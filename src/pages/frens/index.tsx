import * as React from 'react';
import Link from 'next/link';

import {useStyletron} from 'baseui';
import {StyledLink} from 'baseui/link';

import Container from '../../components/Container';
import Error from '../../components/Error';
import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import H1 from '../../components/H1';
import Image from '../../components/Image';
import Loading from '../../components/Loading';
import type {FrenT} from '../../types';
import {API_PATH, getFrenPhoto} from '../../utils';
import {Routes} from '../../constants';

type Props = {
  frens: FrenT;
  success: boolean;
};

const Frens = ({frens, success}: Props) => {
  const [_, theme] = useStyletron();

  if (!success) {
    return <Error message="Failed to fetch frens" />;
  }

  if (!frens) {
    return <Loading />;
  }
  const {users} = frens;

  return (
    <Container>
      <H1 marginBottom={theme.sizing.scale800}>Frens</H1>
      {users && (
        <FlexGrid>
          {users.map((user) => (
            <FlexItem key={user.name}>
              {user.photo && (
                <Link href={Routes.ADDRESS(user.slug)}>
                  <a>
                    <Image
                      name={user.name}
                      size="100%"
                      src={getFrenPhoto(user.address)}
                    />
                  </a>
                </Link>
              )}
              <StyledLink href={Routes.ADDRESS(user.slug)}>
                {user.name}
              </StyledLink>
            </FlexItem>
          ))}
        </FlexGrid>
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const url = `${API_PATH}/frens`;
  const res = await fetch(url);
  if (res.status !== 200) {
    return {
      props: {
        success: false,
      },
    };
  }

  const frens = await res.json();

  return {
    props: {
      success: true,
      frens,
    },
  };
}

export default Frens;
