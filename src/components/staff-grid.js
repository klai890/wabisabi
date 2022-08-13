import React from 'react';
import { Box, Container, Grid, Flex } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import testimonial1 from 'assets/kid_pics/testimonial_pics/testimonial1.webp';
import testimonial2 from 'assets/kid_pics/testimonial_pics/testimonial2.webp';
import testimonial3 from 'assets/kid_pics/testimonial_pics/testimonial3.webp';
import testimonial4 from 'assets/kid_pics/testimonial_pics/testimonial4.webp';
import testimonial5 from 'assets/kid_pics/testimonial_pics/testimonial5.webp';
import testimonial6 from 'assets/kid_pics/testimonial_pics/testimonial6.webp';
import Overlay from 'components/cards/overlay-testimonial';
import StaffCard from 'components/cards/staff-card';
import presPic from 'assets/staff_pics/agnes.webp';
import vpresPic from 'assets/staff_pics/karena.webp';
import anonymousPic from 'assets/staff_pics/anonymous.webp';
import finPic from 'assets/staff_pics/brandon.webp';

// Uhh, not actually a grid, realized I like flex way better.
const STAFF_DATA = [
  {
    image: presPic,
    name: 'Agnes Wang',
    position: 'President/Founder'
  },
  {
    image: vpresPic,
    name: 'Karena Lai',
    position: 'Vice President'
  },
  {
    image: anonymousPic,
    name: 'Denny Dong',
    position: 'Director of Recruitment'
  },
  {
    image: finPic,
    name: 'Brandon Xu',
    position: 'Director of Finance'
  },
  {
    image: anonymousPic,
    name: 'TBD',
    position: 'Director of Event Coordination'
  },
  {
    image: anonymousPic,
    name: 'TBD',
    position: 'Director of Media'
  },
];
const StaffGrid = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container sx={styles.container}>
        <Flex sx={styles.grid}>
          {STAFF_DATA.map(({ image, name, position }, index) => (
            // <Overlay
            //   image={image}
            //   text={text}
            //   heading={heading}
            //   path={path}
            //   key={index}
            // />

            <StaffCard
              image={image}
              name={name}
              position={position}
            />
          
   
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default StaffGrid;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    flexWrap: 'wrap',
    // gridGap: '30px',
    // gridTemplateColumns: '100% 100% 100%'
  },
  container: {
    marginBottom: '20px'
  }
};
