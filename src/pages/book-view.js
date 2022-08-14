import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Pricing from 'sections/pricing';
import Subscribe from 'sections/subscribe';

export default function BookPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 014" />
          <Pricing />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
