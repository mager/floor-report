import React from 'react';
import TimeAgo from 'react-timeago';
import {useAccount} from 'wagmi';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';

import Collection from '../../components/Collection';
import Container from '../../components/Container';
import EditProfile from '../../components/EditProfile';
import FloorPrice from '../../components/FloorPrice';
import H1 from '../../components/H1';
import H5 from '../../components/H5';
import InlineLink from '../../components/InlineLink';
import Loading from '../../components/Loading';
import ResponsiveImage from '../../components/ResponsiveImage';
import Text from '../../components/Text';
import {CollectionT, GetAddressRespT, UserT} from '../../types';
import {API_PATH, getFrenPhoto, getName} from '../../utils';

type Props = {
  data: GetAddressRespT;
};

const InfoGrid = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `0 0 ${$theme.sizing.scale800}`,
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

const FloorInfo = styled(Block, () => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const Updated = styled(Text, ({$theme}) => ({
  margin: 0,
  marginTop: $theme.sizing.scale200,
  fontSize: $theme.sizing.scale550,
}));

const Name = styled(Block, ({$theme}) => ({}));

const Edit = styled(Block, ({$theme}) => ({
  fontSize: $theme.sizing.scale550,
}));

export const Address = ({data}: Props): JSX.Element => {
  const [_, theme] = useStyletron();
  const account = useAccount();
  const [isOpen, setIsOpen] = React.useState(false);

  if (!data) {
    return <Loading />;
  }

  if (data.collections?.length === 0) {
    return <Text>No collections found</Text>;
  }

  const user: UserT = data.user;
  const address = data.address;
  const usersWallet =
    account.isConnected && account.address.toLowerCase() == address;

  const displayName = getName(user, data);
  const imageSrc = getFrenPhoto(address);

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
            <Updated>
              Updated <TimeAgo date={data.updatedAt} />
            </Updated>
            {usersWallet && (
              <Edit>
                <InlineLink onClick={() => setIsOpen(true)}>
                  Edit Profile
                </InlineLink>
              </Edit>
            )}
          </Name>
        </UserInfo>
        <FloorInfo>
          <FloorPrice>{data.totalETH}ETH</FloorPrice>
        </FloorInfo>
      </InfoGrid>
      {data.collections ? (
        data.collections.map((collection: CollectionT, i: number) => (
          <Block key={i}>
            <Collection collection={collection} />
          </Block>
        ))
      ) : (
        <AddYourWallet>
          <H5>Add your wallet to the Floor Report index</H5>
          <Text marginBottom={theme.sizing.scale800}>
            We&rsquo;ll fetch the latest floor prices for your NFTs from OpenSea
            every 12 hours.
          </Text>
          <Block marginBottom={theme.sizing.scale800}>
            <Button disabled>Add me to the index (COMING SOON)</Button>
          </Block>
        </AddYourWallet>
      )}
      <EditProfile
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
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
