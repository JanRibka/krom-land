import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppRoute } from "shared/infrastructure/router/appRoutes";
import { selectActions } from "shared/infrastructure/store/actions/actionsSlice";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";
import { selectContact } from "shared/infrastructure/store/contact/contactSlice";
import { selectGallery } from "shared/infrastructure/store/gallery/gallerySlice";
import { selectHome } from "shared/infrastructure/store/home/homeSlice";

import SeoFb from "./img/seo_fb.jpg";

const Seo = () => {
  // Constants
  const { pathname } = useLocation();
  const home = useSelector(selectHome);
  const actions = useSelector(selectActions);
  const gallery = useSelector(selectGallery);
  const contact = useSelector(selectContact);
  const common = useSelector(selectCommon);

  // Other
  useEffect(() => {
    SetSeo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, common._dataLoaded]);

  const SetSeo = () => {
    let title = "";
    let description = "";

    switch (pathname) {
      case AppRoute.Home:
        title = home.Title;
        description = home.Description;
        break;
      case AppRoute.Actions:
        title = actions.Title;
        description = actions.Description;
        break;
      case AppRoute.Gallery:
        title = gallery.Title;
        description = gallery.Description;
        break;
      case AppRoute.Contact:
        title = contact.Title;
        description = contact.Description;
        break;
    }
    // Změna document title
    document.title = title;

    // Description
    const desc = document.querySelector("meta[name='description']");
    desc?.setAttribute("content", description);

    // Open graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    ogTitle?.setAttribute("content", title);
    const ogDesc = document.querySelector("meta[property='og:description']");
    ogDesc?.setAttribute("content", description);
    const ogLocale = document.querySelector("meta[property='og:locale']");
    ogLocale?.setAttribute("content", "cs");
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
