import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import StaffGrid from 'components/staff-grid'
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import StaffCarousel from 'sections/staff-carousel'
// import Services from 'sections/services';
// import Jackpot from 'sections/jackpot';
// import CallToAction from 'sections/call-to-action';
// import Featured from 'sections/featured';
// import Pricing from 'sections/pricing';
// import Testimonials from 'sections/testimonials';
// import Blogs from 'sections/blogs';
// import FAQ from 'sections/faq';
// import Subscribe from 'sections/subscribe';
// import InProgress from 'components/in-progress';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner title="Our Dedicated Staff" text="Committed to care" />
          <StaffCarousel />
          <StaffGrid />
          {/* <SEO title="Startup Landing 014" />
          <Banner />
          <Services /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
