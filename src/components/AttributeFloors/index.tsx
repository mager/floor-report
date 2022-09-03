import * as React from 'react';

import {styled, withStyle, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import FloorPrice from '../../components/FloorPrice';
import H4 from '../../components/H4';
import Image from '../../components/Image';
import Label from '../../components/Label';
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

const AttributeName = styled(Label, () => ({
  fontWeight: 700,
  margin: 0,
}));

const AttributeValue = styled(Label, () => ({
  margin: 0,
}));

const Link = withStyle(StyledLink, ({$theme}) => ({
  textDecoration: 'none',
}));

const AttributeFloors = ({slug, attributes}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Block>
      <H4 marginBottom={theme.sizing.scale800}>Attribute Floors</H4>
      <FlexGrid columns={[2, 2, 6, 6]}>
        {attributes.map((attr) => {
          const openSeaURL = getOpenSeaAttributeURL(slug, attr);
          return (
            <FlexItem key={attr.key}>
              <a href={openSeaURL} target="_blank" rel="noreferrer">
                <Image name={attr.value} size="100%" src={attr.image} />
              </a>
              <Container>
                <TextContainer>
                  <AttributeName>{attr.key}</AttributeName>
                  <Link href={openSeaURL} $theme={theme}>
                    <AttributeValue>{attr.value}</AttributeValue>
                  </Link>
                </TextContainer>
                <FloorPrice>{attr.floor}</FloorPrice>
              </Container>
            </FlexItem>
          );
        })}
      </FlexGrid>
    </Block>
  );
};
export default AttributeFloors;
