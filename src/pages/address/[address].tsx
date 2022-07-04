import React from 'react';

import {useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import Collection from '../../components/Collection';
import Container from '../../components/Container';
import H1 from '../../components/H1';
import Loading from '../../components/Loading';
import {CollectionT, GetAddressRespT, UserT} from '../../types';
import {API_PATH, ellipseAddress} from '../../utils';

type Props = {
  data: GetAddressRespT;
};

export const Address = ({data}: Props): JSX.Element => {
  const [_, theme] = useStyletron();
  if (!data) {
    return <Loading />;
  }

  if (data.collections?.length === 0) {
    return <Block>No collections found</Block>;
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

  return (
    <Container>
      <Block marginBottom={theme.sizing.scale800}>
        <H1>{getName(user, data)}</H1>
      </Block>
      {data.collections.map((collection: CollectionT, i: number) => (
        <Block key={i}>
          <Collection collection={collection} />
        </Block>
      ))}
    </Container>
  );
};

export async function getServerSideProps(context) {
  const url = `${API_PATH}/address/${context.query.address}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log({data});

  return {
    props: {
      data,
    },
  };
}

export default Address;
