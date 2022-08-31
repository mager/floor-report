import * as React from 'react';
import Marquee from 'react-fast-marquee';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

import {GetAddressRespT} from '../../types';
import FloorPriceUSD from '../FloorPriceUSD';
import FloorPriceLarge from '../../components/FloorPriceLarge';

type Props = {
  data: GetAddressRespT;
};

const Wrapper = styled(Block, ({$theme}) => ({
  padding: `${$theme.sizing.scale100} 0`,
  width: '100%',
}));

const Component = styled(Block, ({$theme}) => ({
  cursor: 'pointer',
  padding: $theme.sizing.scale800,
  background: $theme.colors.background,
  display: 'flex',
  alignItems: 'center',
}));

const AddressMarquee = ({data: {totalETH, totalUSD}}: Props) => {
  const totalUSDFmt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalUSD);

  return (
    <Marquee
      speed={85}
      gradient={false}
      style={{
        zIndex: 0,
      }}
    >
      <Wrapper>
        <Component>
          <FloorPriceLarge>{totalETH}</FloorPriceLarge>{' '}
          <FloorPriceUSD>({totalUSDFmt})</FloorPriceUSD>
        </Component>
      </Wrapper>
    </Marquee>
  );
};

export default AddressMarquee;
