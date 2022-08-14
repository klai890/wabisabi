import React from 'react';
import { Box, Container } from 'theme-ui';
import Overlay from 'components/overlays/overlay';

const OverlayHeader = ({img, title}) => {
  return (
    <Box as="section" id="services" sx={styles.box}>
      <Container>

        <Overlay
          image={img}
          title={title}
        />
        
      </Container>
    </Box>
  );
};

export default OverlayHeader;

const styles = {
  box: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
};
