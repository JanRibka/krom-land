import Gallery from '../gallery/Gallery';
import PageStyled from './styledComponents/PageStyled';

const GalleryPage = () => {
  // TODO: Po přechodu na stranku se udělá scroll to top
  return (
    <PageStyled component='main'>
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
