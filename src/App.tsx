import Layout from "features/layout/Layout";
import { useEffect } from "react";
import CookieConsent from "shared/components/cookieConsent/CookieConsent";
import CookieConstentModel from "shared/components/cookieConsent/CookieConsentModel";
import Seo from "shared/components/seo/Seo";
import { CookieHelper } from "shared/helpers/cookieHelper";
import { GoogleTagManagerHelper } from "shared/helpers/googleTagManagerHelper";

import AppRouter from "./shared/infrastructure/router/AppRouter";

function App() {
  // Constants
  const cookieHelper: CookieHelper = new CookieHelper();
  const googleTagManagerHelper: GoogleTagManagerHelper =
    new GoogleTagManagerHelper();

  // Other
  useEffect(() => {
    const consent: CookieConstentModel =
      cookieHelper.GetCookieConsentCookieValue();

    if (consent.diag === true) {
      if (process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID) {
        googleTagManagerHelper.Init(
          process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID,
        );
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
