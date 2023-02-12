import PageTitle from '../../../shared/infrastructure/components/pageTitle/PageTitle';
import TopBackground from './img/contact_top_bg.webp';
import PageStyled from './styledComponents/PageStyled';

const GalleryPage = () => {
  // TODO: Po přechodu na stranku se udělá scroll to top
  return (
    <PageStyled component='main'>
      {" "}
      <>
        <PageTitle
          image={TopBackground}
          title='Galerie'
          alt='Úvodní fotka stránky Galerie'
        />
      </>
    </PageStyled>
  );
};

export default GalleryPage;
