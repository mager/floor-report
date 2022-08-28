import * as React from 'react';
import TimeAgo from 'react-timeago';
import {useAccount} from 'wagmi';
import {useRouter} from 'next/router';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';

import AddressMarquee from '../../components/AddressMarquee';
import ExpandableCollection from '../../components/Collection/expandable';
import Container from '../../components/Container';
import EditProfile from '../../components/EditProfile';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import InlineLink from '../../components/InlineLink';
import Loading from '../../components/Loading';
import ResponsiveImage from '../../components/ResponsiveImage';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import {CollectionT, GetAddressRespT, UserT} from '../../types';
import {API_PATH, getFrenPhoto, getName} from '../../utils';

type Props = {
  data: GetAddressRespT;
};

const InfoGrid = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const AddYourWallet = styled(Block, () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const UserInfo = styled(Block, () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FloorInfo = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `0 0 ${$theme.sizing.scale800}`,
  alignItems: 'center',
}));

const Updated = styled(Text, ({$theme}) => ({
  marginTop: $theme.sizing.scale200,
  fontSize: $theme.sizing.scale550,
}));

const Name = styled(Block, ({$theme}) => ({}));

const Edit = styled(Block, ({$theme}) => ({
  fontSize: $theme.sizing.scale550,
}));

const Updating = () => {
  return (
    <Container>
      <H4>Updating your wallet... come back in a few.</H4>
      <Loading />
    </Container>
  );
};

export const Address = ({data}: Props): JSX.Element => {
  const {push, query, reload} = useRouter();
  const [_, theme] = useStyletron();
  const account = useAccount();
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [showETH, setShowETH] = React.useState(true);

  const refresh = async (a?: string) => {
    const address = a || account.address.toLowerCase();
    setLoading(true);
    await fetch(`/api/user/${address}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
  };

  if (!data) {
    return <Loading />;
  }

  // While we are adding the wallet to the database, show the user a updating message
  const updating = data.updating;
  if (updating) {
    return <Updating />;
  }

  if (data.collections?.length === 0) {
    return (
      <Container>
        <Text>No collections found</Text>
      </Container>
    );
  }

  const user: UserT = data.user;
  const address = data.address;
  const usersWallet =
    account.isConnected &&
    account.address.toLowerCase() == address.toLowerCase();

  const displayName = getName(user, data);
  const imageSrc = getFrenPhoto(address);

  const hasCollections = data.collections;
  const totalUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(data.totalUSD);

  return (
    <Container>
      <InfoGrid>
        <UserInfo>
          {user.photo && (
            <Block marginRight={theme.sizing.scale400}>
              <ResponsiveImage src={imageSrc} alt={displayName} />
            </Block>
          )}
          <Name>
            <H1 marginTop={theme.sizing.scale500}>{displayName}</H1>
            {hasCollections && (
              <Updated>
                Updated <TimeAgo date={data.updatedAt} />
              </Updated>
            )}
          </Name>
        </UserInfo>
      </InfoGrid>
      <FloorInfo>
        <Block>
          {usersWallet && (
            <Edit>
              <InlineLink onClick={() => setIsOpen(true)}>
                Edit Profile
              </InlineLink>
              <Separator />
              {loading ? (
                <InlineLink disabled>Refreshing...</InlineLink>
              ) : (
                <InlineLink
                  onClick={() => {
                    refresh();
                    push(`/address/${account.address.toLowerCase()}`);
                  }}
                >
                  Refresh
                </InlineLink>
              )}
            </Edit>
          )}
        </Block>
        {hasCollections && <AddressMarquee data={data} />}
      </FloorInfo>
      {data.collections ? (
        <Block>
          <Block>
            <H4>Collections</H4>
          </Block>
          <Block>
            {data.collections.map((collection: CollectionT, i: number) => (
              <Block key={i}>
                <ExpandableCollection collection={collection} />
              </Block>
            ))}
          </Block>
        </Block>
      ) : isUpdating ? (
        <Updating />
      ) : (
        <AddYourWallet>
          <H5>Add your wallet to Floor Report</H5>
          <Text marginBottom={theme.sizing.scale800}>
            We&rsquo;ll fetch the latest floor prices for your NFTs from OpenSea
            every 12 hours.
          </Text>
          <Block marginBottom={theme.sizing.scale800}>
            <Button
              isLoading={loading}
              disabled={loading}
              onClick={async () => {
                setIsUpdating(true);
                await refresh(address);
              }}
            >
              Add me to the index
            </Button>
          </Block>
        </AddYourWallet>
      )}
      <EditProfile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageSrc={imageSrc}
        displayName={displayName}
      />
    </Container>
  );
};

export async function getServerSideProps(context) {
  const url = `${API_PATH}/address/${context.query.address}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Address;
