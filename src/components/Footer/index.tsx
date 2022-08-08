import * as React from 'react';
import Image from 'next/image';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import {ParagraphMedium} from 'baseui/typography';
import {useTheme} from 'next-themes';

import {Routes} from '../../constants';

const Main = styled(Block, ({$theme}) => ({
  width: '100%',
  background: $theme.colors.background,
  margin: 'auto',
  textAlign: 'center',
  padding: `0 0 ${$theme.sizing.scale800}`,
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
          <StyledLink href={Routes.ABOUT()}>Experiment</StyledLink> by{' '}
          <StyledLink href="https://twitter.com/mager">@mager</StyledLink>
        </Paragraph>
      </Block>
    </Main>
  );
};

export default Footer;
