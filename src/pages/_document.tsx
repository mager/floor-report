import * as React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {Provider as StyletronProvider} from 'styletron-react';
import {Server, Sheet} from 'styletron-engine-atomic';
import {styletron} from '../styletron';

class MyDocument extends Document<{stylesheets: Sheet[]}> {
  static getInitialProps(props: any) {
    // eslint-disable-next-line react/display-name
    const page = props.renderPage((App: any) => (props: any) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return {...page, stylesheets};
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Floor Report</title>
          <meta
            name="description"
            content="Floor Report: NFT prices & analytics"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&family=Titillium+Web:wght@300;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HQ101Y0052`}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HQ101Y0052');`,
            }}
          />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
