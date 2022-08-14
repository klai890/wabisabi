import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import testimonial1 from 'assets/kid_pics/testimonial_pics/testimonial1.webp';
import testimonial2 from 'assets/kid_pics/testimonial_pics/testimonial2.webp';
import testimonial3 from 'assets/kid_pics/testimonial_pics/testimonial3.webp';
import testimonial4 from 'assets/kid_pics/testimonial_pics/testimonial4.webp';
import testimonial5 from 'assets/kid_pics/testimonial_pics/testimonial5.webp';
import testimonial6 from 'assets/kid_pics/testimonial_pics/testimonial6.webp';
import Overlay from 'components/overlays/overlay-testimonial';

const SERVICES_DATA = [
  {
    image: testimonial1,
    quote:
    "[My son] enjoys it a lot and every time he comes back I ask , 'Do you want to go to the next one?' [and he says] 'Yeah, I want to!'"
    ,
    person: "Andrew's Mom",
  },
  {
    image: testimonial2,
    quote:
      'Oh, it\'s been great. Our kids are enjoying [it]. I think it\'s good to be physical during the summertime.',
    person: 'Sophia and Riu\'s Dad'
  },
  {
    image: testimonial3,
    quote:
    'The kids really like it, they\'re enjoying it and the fact that they are running the distance that they are running is really good.',
    person:'Aahana and Arjun\'s Mom'
  },
  {
    image: testimonial4,
    quote: 'So it works out really great for [my son] and I think he made a couple friends here, I think that\'s really important for him.',
    person: 'Albert\'s Mom'
  },
  {
    image: testimonial5,
    quote: ' I have the time for kids to get out for two hours... I think it\'s good for them.',
    person: 'Lucien\'s Mom'
  },
  {
    image: testimonial6,
    quote: ' The most important thing is that the kids enjoy it. You guys are doing a good job. The kids love it. And so that\'s [what is] important.',
    person: 'Coco and Caden\'s Dad'
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, quote, person }, index) => (
            // <Overlay
            //   image={image}
            //   text={text}
            //   heading={heading}
            //   path={path}
            //   key={index}
            // />

            <Overlay
              image={image}
              quote={quote}
              person={person}
          />
          
   
          ))}
        </Grid>
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
  container: {
    marginBottom: '20px'
  }
};
