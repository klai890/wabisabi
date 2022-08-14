import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import { Link } from '../link';

import arrowAngle from '../../assets/arrow-angle.svg';

const Overlay = ({ image, quote, person }) => {
  return (
    <Box
      sx={styles.blogCard}
      className='blogCard'
    //   className={`blogCard ${image === null ? 'noThumb ' : ' '} ${
    //     description === null ? 'noDescription  ' : ''
    //   } ${linkLabel === null ? 'noLabel ' : ''}`}
    >

        <Box sx={styles.image}>
          <Image sx={styles.img} src={image} alt={person} />
        </Box>


      <Box sx={styles.content} className="blogContent">
        <Heading as="h3">
            {quote}
        </Heading>
        {person !== null && <Text as="p">{person}</Text>}

      </Box>
    </Box>
  );
};

export default Overlay;

const styles = {
  img: {
    filter: 'brightness(40%)',
  },
  blogCard: {
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
      },
      '.blogContent': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage:
          'linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.71) 99.95%)',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'flex-end',
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
    position: 'absolute',
    bottom: '0',
    padding: '10px',
    color: 'white',
    h3: {
      fontSize: '20px',
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

