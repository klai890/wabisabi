import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import StaffGrid from 'components/staff-grid'
import theme from 'theme';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import StaffCarousel from 'sections/staff-carousel'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner title="Our Dedicated Staff" text="Committed to care" />
          <StaffCarousel />
          <StaffGrid />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
