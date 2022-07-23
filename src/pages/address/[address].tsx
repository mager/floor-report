import React from 'react';
import TimeAgo from 'react-timeago';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';

import Collection from '../../components/Collection';
import Container from '../../components/Container';
import FloorPrice from '../../components/FloorPrice';
import H1 from '../../components/H1';
import H5 from '../../components/H5';
import Loading from '../../components/Loading';
import ResponsiveImage from '../../components/ResponsiveImage';
import Text from '../../components/Text';
import {CollectionT, GetAddressRespT, UserT} from '../../types';
import {API_PATH, ellipseAddress, getFrenPhoto} from '../../utils';

type Props = {
  data: GetAddressRespT;
};

const InfoGrid = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
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
  fontSize: $theme.sizing.scale550,
}));

const Name = styled(Block, ({$theme}) => ({}));

export const Address = ({data}: Props): JSX.Element => {
  const [_, theme] = useStyletron();
  if (!data) {
    return <Loading />;
  }

  if (data.collections?.length === 0) {
    return <Text>No collections found</Text>;
  }

  const user: UserT = data.user;
  const address = data.address;
  const getName = (user: UserT, data: GetAddressRespT) => {
    if (user.name) {
      return user.name;
    }

    if (data.ensName) {
      return data.ensName;
    }

    return ellipseAddress(address);
  };

  const displayName = getName(user, data);
  const imageSrc = getFrenPhoto(address);

  return (
    <Container>
      <InfoGrid marginBottom={theme.sizing.scale800}>
        <UserInfo>
          {user.photo && (
            <Block marginRight={theme.sizing.scale400}>
              <ResponsiveImage src={getFrenPhoto(address)} alt={displayName} />
            </Block>
          )}
          <Name>
            <H1 marginTop={theme.sizing.scale500}>{displayName}</H1>
            <Updated>
              Updated <TimeAgo date={data.updatedAt} />
            </Updated>
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
