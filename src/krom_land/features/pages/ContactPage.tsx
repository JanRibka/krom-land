import Contact from '../contact/Contact';
import PageStyled from './styledComponents/PageStyled';

const ContactPage = () => {
  return (
    <PageStyled component='main'>
      <div className='top-space'></div>
      <Contact />
    </PageStyled>
  );
};

export default ContactPage;
