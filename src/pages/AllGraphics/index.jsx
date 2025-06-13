import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row } from 'react-bootstrap';
import { graphics, meta } from "../../content_option";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const AllGraphics = () => {

  const [index, setIndex] = useState(-1);
    return (
        <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | All Graphics </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
         
            <SectionTitle title={"All Graphics"}/>
            <hr className="t_border ml-0 text-left" />
         
        </Row>

        <div>
            <>
      <RowsPhotoAlbum photos={graphics} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={graphics}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
        </div>
        </Container>
        </HelmetProvider>
    );
};

export default AllGraphics;