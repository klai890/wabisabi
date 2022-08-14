import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import OverlayHeader from 'components/overlays/overlay-header';
import galleryCover from 'assets/gallery_pics/gallery_cover.webp';
import GalleryGrid from 'components/gallery-grid'

export default function Gallery() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <OverlayHeader img={galleryCover} title="Gallery"/>
          <GalleryGrid />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
