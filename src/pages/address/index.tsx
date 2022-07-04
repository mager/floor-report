import React from 'react';
import TimeAgo from 'react-timeago';
import useSWR from 'swr';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useTheme} from 'next-themes';

import {Block} from 'baseui/block';

import Collection from '../../components/Collection';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Totals from '../../components/Totals';
import Error from '../../components/Error';
import {CollectionT, GetAddressRespT, NFTT, UserT} from '../../types';
import {ellipseAddress, fetcher, swrOptions} from '../../utils';

export const Address = (props: any): JSX.Element => {
  const {query} = useRouter();
  const {resolvedTheme} = useTheme();
  const {data, error} = useSWR(
    query.address && `/api/address/${query.address}`,
    fetcher,
    swrOptions,
  );

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <Block>Failed to load</Block>;
  }

  if (data.collections?.length === 0) {
    return <Block>No collections found</Block>;
  }

  const user: UserT = data.user;
  const address = data.address;
  const getNFTName = (nft: NFTT): string =>
    nft.name ? nft.name : `#${nft.tokenId}`;

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
      {data.collections.map((collection: CollectionT, i: number) => (
        <Block key={i}>{collection.name}</Block>
      ))}
    </Container>
  );
};

export default Address;
