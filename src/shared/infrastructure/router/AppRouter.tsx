import ActionsPage from "pages/ActionsPage";
import ContactPage from "pages/ContactPage";
import GalleryPage from "pages/GalleryPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import RentingPage from "pages/RentingPage";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
      <Route path={AppRoute.Renting} element={<RentingPage />} />
      <Route path={AppRoute.Gallery} element={<GalleryPage />} />
      <Route path={AppRoute.Contact} element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
