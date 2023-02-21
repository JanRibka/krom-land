import CookieConsent from 'shared/components/cookieConsent/CookieConsent';
import Seo from 'shared/components/seo/Seo';

import Layout from './krom_land/features/layout/Layout';
import AppRouter from './shared/infrastructure/router/AppRouter';

function App() {
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
