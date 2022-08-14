import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Testimonials from 'sections/testimonials';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner title="Testimonials" />
          <Testimonials />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
