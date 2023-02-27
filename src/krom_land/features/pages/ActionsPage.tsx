import { useEffect } from "react";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import Actions from "../actions/Actions";
import PageStyled from "./styledComponents/PageStyled";

const ActionsPage = () => {
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
      <Actions />
    </PageStyled>
  );
};

export default ActionsPage;
