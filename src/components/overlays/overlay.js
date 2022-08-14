import React from 'react';
import { Box, Heading, Image } from 'theme-ui';

const Overlay = ({ image, title }) => {
  return (
    <Box sx={styles.overlayCard} className='overlayCard noDescription noLabel'>
      {image !== null && (
        <Box sx={styles.image}>
          <Image src={image} alt={title} />
        </Box>
      )}

      <Box sx={styles.content} className="title">
        <Heading as="h3"> {title} </Heading>
      </Box>

    </Box>
  );
};

export default Overlay;

const styles = {
  overlayCard: {
    position: 'relative',
    overflow: 'hidden',
    mb: 30,
    mx: 15,
    '&.noThumb': {
      p: '25px',
      backgroundColor: '#F0F0F4',
      borderRadius: '5px',
      h3: {
        fontSize: '20px',
        lineHeight: 1.75,
        fontWeight: 500,
        m: 0,
      },
    },
    '&.noDescription:not(.noThumb)': {
      position: 'relative',
      img: {
        width: '100%',
        filter: 'brightness(60%)',
      },
      '.title': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage:
          'linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.71) 99.95%)',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: '25px',
        h3: {
          m: 0,
          color: '#fff',
        },
      },
    },
  },
  image: {
    img: {
      borderRadius: '5px',
      width: '100%',
      display: 'block',
    },
  },
  content: {
    h3: {
      fontSize: '34px',
      color: '#0F2137',
      lineHeight: 1.67,
      fontWeight: 700,
      mt: '20px',
      mb: '15px',
      color: 'inherit',
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#0F2137',
      opacity: 0.6,
      mb: '15px',
    },
  },
  linkLabel: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: '500',
    img: {
      ml: '6px',
    },
  },
};

