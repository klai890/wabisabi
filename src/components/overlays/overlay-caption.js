import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import { Link } from '../link';

import arrowAngle from '../../assets/arrow-angle.svg';

const OverlayCaption = ({ image, title, description, path, linkLabel }) => {
  return (
    <Box
      sx={styles.blogCard}
      className={`blogCard ${image === null ? 'noThumb ' : ' '} ${
        description === null ? 'noDescription  ' : ''
      } ${linkLabel === null ? 'noLabel ' : ''}`}
    >
      {image !== null && (
        <Box sx={styles.image}>
          <Image src={image} alt={title} />
        </Box>
      )}

      <Box sx={styles.content} className="blogContent">
        <Heading as="h3">
            {title}
        </Heading>
        {description !== null && <Text as="p">{description}</Text>}
        {linkLabel !== null && (
          <Link sx={styles.linkLabel} path={path}>
            {linkLabel} <Image src={arrowAngle} alt="angle icon" />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default OverlayCaption;

const styles = {
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
        filter: 'brightness(70%)',
      },
      '.blogContent': {
        position: 'absolute',
        right: 0,
        bottom: 0,
        display: 'flex',
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

      width: '100%',
      display: 'block',
    },
  },
  content: {
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

