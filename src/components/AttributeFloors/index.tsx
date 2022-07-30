import React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import FloorPrice from '../../components/FloorPrice';
import H4 from '../../components/H4';
import Image from '../../components/Image';
import Text from '../../components/Text';
import type {AttributeT} from '../../types';
import {getOpenSeaAttributeURL} from '../../utils';

type Props = {
  attributes: AttributeT[];
  slug: string;
};

const Container = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: $theme.sizing.scale400,
}));

const TextContainer = styled(Block, ({$theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: $theme.sizing.scale200,
}));

const AttributeName = styled(Text, () => ({
  fontWeight: 700,
  margin: 0,
}));

const AttributeValue = styled(Text, () => ({
  margin: 0,
}));

const AttributeFloors = ({slug, attributes}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Block>
      <H4 marginBottom={theme.sizing.scale800}>Attribute Floors</H4>
      <FlexGrid>
        {attributes.map((attr) => (
          <FlexItem key={attr.key}>
            <Image name={attr.value} size="100%" src={attr.image} />
            <Container>
              <TextContainer>
                <AttributeName>{attr.key}</AttributeName>
                <StyledLink href={getOpenSeaAttributeURL(slug, attr)}>
                  <AttributeValue>{attr.value}</AttributeValue>
                </StyledLink>
              </TextContainer>
              <FloorPrice>{attr.floor}</FloorPrice>
            </Container>
          </FlexItem>
        ))}
      </FlexGrid>
    </Block>
  );
};
export default AttributeFloors;
