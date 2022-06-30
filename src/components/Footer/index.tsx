import React from 'react';
import Image from 'next/image';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {ParagraphMedium} from 'baseui/typography';
import {useTheme} from 'next-themes';

import Container from '../Container';
import Text from '../Text';

const Main = styled(Block, ({$theme}) => ({
  width: '100%',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  padding: `${$theme.sizing.scale800} 0`,
}));

const Paragraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
  margin: 0,
  padding: 0,
}));

const Footer = () => {
  const {resolvedTheme} = useTheme();

  return (
    <Main>
      <Container>
        <Block>
          <a
            href="https://discord.gg/MqsRYeQWqa"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/discord-${resolvedTheme}.svg`}
              width="32"
              height="32"
              alt="Discord"
            />
          </a>
          <a
            href="https://twitter.com/floor_report"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/twitter-${resolvedTheme}.svg`}
              width="32"
              height="32"
              alt="Twitter"
            />
          </a>
        </Block>
        <Block>
          <Paragraph>
            by <a href="https://twitter.com/mager">@mager</a>
          </Paragraph>
        </Block>
      </Container>
    </Main>
  );
};

export default Footer;
