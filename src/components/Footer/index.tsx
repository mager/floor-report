import React from 'react';
import Image from 'next/image';
import {useTheme} from 'next-themes';
import {Block} from 'baseui/block';
import styles from './Footer.module.css';

const Footer = () => {
  const {resolvedTheme} = useTheme();

  return (
    <Block>
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
        <p>
          by <a href="https://twitter.com/mager">@mager</a>
        </p>
      </Block>
    </Block>
  );
};

export default Footer;
