import Gallery from '../gallery/Gallery';
import PageStyled from './styledComponents/PageStyled';

const GalleryPage = () => {
  return (
    <PageStyled component='main'>
      <div className='top-space'></div>
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
