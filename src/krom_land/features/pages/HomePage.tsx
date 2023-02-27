import { useEffect } from "react";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import Home from "../home/Home";
import PageStyled from "./styledComponents/PageStyled";

const HomePage = () => {
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
      <Home />
    </PageStyled>
  );
};

export default HomePage;
