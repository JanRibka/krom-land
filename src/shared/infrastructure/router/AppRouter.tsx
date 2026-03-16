import NotFoundPage from "krom_land/features/pages/NotFoundPage";
import PujcovnaPage from "krom_land/features/pages/PujcovnaPage";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import ActionsPage from "../../../krom_land/features/pages/ActionsPage";
import ContactPage from "../../../krom_land/features/pages/ContactPage";
import GalleryPage from "../../../krom_land/features/pages/GalleryPage";
import HomePage from "../../../krom_land/features/pages/HomePage";
import usePrevious from "../../customHooks/usePrevious/usePrevious";
import { AppRoute } from "./appRoutes";

const AppRouter = () => {
  // Constants
  const { pathname } = useLocation();
  let previousRoute = usePrevious<string | undefined>(pathname);

  // Change route detection
  useEffect(() => {
    changeMenuActiveButton();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const changeMenuActiveButton = () => {
    // Main menu
    const navLinksWrapper = document.getElementById("nav-links-inner-wrapper");

    navLinksWrapper?.childNodes.forEach((item) => {
      const newItem = item as HTMLLIElement;

      if (newItem.dataset.route === pathname) {
        newItem.classList.add("active");
      } else {
        newItem.classList.remove("active");
      }
    });

    // Mobile menu
    const navLinksWrapperMobile = document.getElementById(
      "nav-links-inner-wrapper-mobile",
    );

    navLinksWrapperMobile?.childNodes.forEach((item) => {
      const newItem = item as HTMLLIElement;

      if (newItem.dataset.route === pathname) {
        newItem.classList.add("active");
      } else {
        newItem.classList.remove("active");
      }
    });

    // Zavření mobilního menu
    const hamburgerIcon = document.getElementsByClassName("mobile-menu")[0]
      .childNodes[0] as HTMLDivElement;

    if (hamburgerIcon.classList.contains("is-opened")) hamburgerIcon.click();
  };

  const scrollToTop = () => {
    if (!!previousRoute) window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path={AppRoute.Home} element={<HomePage />} />
      <Route path={AppRoute.Actions} element={<ActionsPage />} />
      <Route path={AppRoute.Pujcovna} element={<PujcovnaPage />} />
      <Route path={AppRoute.Gallery} element={<GalleryPage />} />
      <Route path={AppRoute.Contact} element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
