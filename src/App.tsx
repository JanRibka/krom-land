import axios from "axios";
import { useEffect } from "react";
import CookieConsent from "shared/components/cookieConsent/CookieConsent";
import CookieConstentModel from "shared/components/cookieConsent/CookieConsentModel";
import Seo from "shared/components/seo/Seo";
import {
  GetCookieConsentCookieValue,
  GoogleAnalyticsHelper,
} from "shared/helpers/googleAnalyticsHelper";

import Layout from "./krom_land/features/layout/Layout";
import AppRouter from "./shared/infrastructure/router/AppRouter";

function App() {
  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Other
  useEffect(() => {
    const consent: CookieConstentModel = GetCookieConsentCookieValue();

    if (consent.diag === true) {
      if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
        googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
      <CookieConsent />
      <Seo />
    </>
  );
}

export default App;
