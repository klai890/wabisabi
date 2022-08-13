import React from 'react';
import { Box, Container, Grid, Image, Text, Heading } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import img from 'assets/kid_pics/home.webp';
import Overlay from 'components/cards/overlay';

import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: img,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: '3D modeling & art',
    path: '#',
  },
  // {
  //   image: serviceImage2,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Digital promotion',
  //   path: '#',
  // },
  // {
  //   image: serviceImage3,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Business Enterprise',
  //   path: '#',
  // },
  // {
  //   image: serviceImage4,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Marketing & advertising',
  //   path: '#',
  // },
  // {
  //   image: serviceImage5,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Ultimate development',
  //   path: '#',
  // },
  // {
  //   image: serviceImage6,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Online support',
  //   path: '#',
  // },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        {/* <BlockTitle
          title="Experience Wabi-Sabi Sports Camps"
          // text="Features are highlighted here"
        /> */}

        <Overlay
          image={img}
          title="Experience Wabi-Sabi Sports Camps"
          description={null}
          path="/"
          linkLabel={null}
        />
        {/* <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid> */}

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
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
