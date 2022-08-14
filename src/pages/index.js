import React from 'react';
import { ThemeProvider, Container, Text, Heading } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import OverlayHeader from 'components/overlays/overlay-header';
import Pricing from 'sections/pricing';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import homeCover from 'assets/kid_pics/home.webp';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 014" />
          <Banner title="Wabi Sabi Sports" />
          <OverlayHeader img={homeCover} title="Experience Wabi Sabi"/>

          <Container>
          <Heading as="h3">
            There’s No Place Like Here
          </Heading>

          <Text>

            Located in Cupertino, Wabi-Sabi Sports welcomes campers of all ages to participate in fun sports programs and 
            activities. We have experienced and friendly staff that ensures every camper has an amazing and unique experience
            in a safe and fun atmosphere.

            Our group of high school varsity athletes are experienced high school athletes who have competed at 
            state and national level competitions. We primarily focus on fitness, speed, strength, agility, and 
            healthy exercise habits, through fun and productive workouts and games. All our campers will be happy 
            here and embrace exercise.

          </Text>
        </Container>
          <Pricing />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
