import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import { Link } from '../link';

import arrowAngle from '../../assets/arrow-angle.svg';

// To be used in the staff page for the leadership positions

const StaffCard = ({ image, name, position }) => {
  return (
    <Box
      sx={styles.blogCard}
    //   className={`blogCard ${image === null ? 'noThumb ' : ' '} ${
    //     description === null ? 'noDescription  ' : ''
    //   } ${linkLabel === null ? 'noLabel ' : ''}`}
    >
      {image !== null && (
        <Box sx={styles.image}>
          <Image src={image} alt={name} />
        </Box>
      )}

      <Box sx={styles.content} className="blogContent">
        <Heading as="h3">
            {name}
        </Heading>
        {position !== null && <Text as="p">{position}</Text>}
      </Box>
    </Box>
  );
};

export default StaffCard;

const styles = {
  blogCard: {
    position: 'relative',
    overflow: 'hidden',
    mb: 30,
    mx: 15,
    textAlign: 'center',
    width: [
      'calc(100% - 30px)',
      'calc(100% - 30px)',
      'calc(50% - 30px)',
      'calc(50% - 30px)',
      'calc(33.3333% - 30px)',
    ],

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

      borderRadius: '10px',
      maxWidth: '250px',
    },
  },
  content: {
    h3: {
      fontSize: '18px',
      color: '#0F2137',
      lineHeight: 1.67,
      fontWeight: 700,
      mt: '20px',
      mb: '15px',
      a: {
        color: 'inherit',
      },
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

