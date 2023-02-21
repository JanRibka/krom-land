import { useEffect } from 'react';

import SeoFb from './img/seo_fb.jpg';

const Seo = () => {
  // Other
  useEffect(() => {
    SetSeo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SetSeo = () => {
    // Open graph
    const seoFb = SeoFb;
    const ogImage = document.querySelector("meta[property='og:image']");
    ogImage?.setAttribute("content", seoFb);
    const ogImageUrl = document.querySelector(
      "meta[property='og:image:secure_url']"
    );
    ogImageUrl?.setAttribute("content", seoFb);
  };

  return <></>;
};

export default Seo;
