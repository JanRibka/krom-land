import { useEffect } from "react";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import Gallery from "../gallery/Gallery";
import PageStyled from "./styledComponents/PageStyled";

const GalleryPage = () => {
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
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
