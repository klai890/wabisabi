import React from 'react';
import { Box, Container, Flex, Image, Grid } from 'theme-ui';
import contactImg from 'assets/kid_pics/contact.webp';
import ContactForm from 'components/contact-form';


const FAQ = () => {
  return (
    <Box as="section" sx={styles.faq}>
      <Container>
        <Grid sx={styles.flex}>
            <ContactForm title="Contact Us"/>
            <Image src={contactImg} />
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {

    // flexDirection: ['column', null, null, null, null, 'row'],
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center',

    img: {
      margin: '20px 10px',
      justifySelf: 'center',

      '@media screen and (max-width: 700px)': {
        maxWidth: '20rem'
      },
    },


    '@media screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr'
    },
  },
  content: {
    // flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
  faq: {
    background: '#EEEEEE'
  }
};
