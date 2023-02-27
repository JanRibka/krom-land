import { useEffect } from "react";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import Contact from "../contact/Contact";
import PageStyled from "./styledComponents/PageStyled";

const ContactPage = () => {
  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Other
  useEffect(() => {
    googleAnalyticsHelper.SendPageViewToGA();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageStyled component='main'>
      <div className='top-space'></div>
      <Contact />
    </PageStyled>
  );
};

export default ContactPage;
