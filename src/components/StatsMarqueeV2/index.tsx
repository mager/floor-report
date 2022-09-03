import * as React from 'react';
import Marquee from 'react-fast-marquee';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {CollectionT} from '../../types';

import FloorPrice from '../../components/FloorPrice';
import Text from '../../components/Text';

type Props = {
  collection: CollectionT;
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

const Stat = styled(Block, ({$theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0 ${$theme.sizing.scale400}`,
}));

const StatsMarquee = ({collection}: Props) => {
  const [_, theme] = useStyletron();
  // Create a list of components to render in the marquee
  const components = [];
  // Create a map of keys and their corresponding labels
  const labels = {
    '1d': '24 hour volume',
    '7d': 'Weekly volume',
    '30d': 'Monthly volume',
    cap: 'Market cap',
    sales: 'Total sales',
  };

  // Loop through the keys in the labels map
  for (const key in labels) {
    // If the key exists in the collection object
    if (collection.collection[key]) {
      // Push a new component to the components array
      components.push(
        <Stat key={key}>
          <Text marginTop={0} marginRight={theme.sizing.scale200} italic>
            {labels[key]}
          </Text>
          <FloorPrice>{collection.collection[key]}</FloorPrice>
        </Stat>,
      );
    }
  }

  return (
    <Marquee
      speed={85}
      gradient={false}
      style={{
        zIndex: 0,
      }}
    >
      <Wrapper>
        <Component>{components.map((component) => component)}</Component>
      </Wrapper>
    </Marquee>
  );
};

export default StatsMarquee;
