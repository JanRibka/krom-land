import Contact from "krom_land/features/contact/Contact";

import PageStyled from "./styledComponents/PageStyled";

const ContactPage = () => {
  return (
    <PageStyled component="main">
      <div className="top-space"></div>
      <Contact />
    </PageStyled>
  );
};

export default ContactPage;
