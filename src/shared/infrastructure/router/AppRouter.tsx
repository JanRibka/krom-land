import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import ActionsPage from "../../../krom_land/features/pages/ActionsPage";
import ContactPage from "../../../krom_land/features/pages/ContactPage";
import GalleryPage from "../../../krom_land/features/pages/GalleryPage";
import HomePage from "../../../krom_land/features/pages/HomePage";
import { AppRoute } from "./appRoutes";

const AppRouter = () => {
  // Constants
  const { pathname } = useLocation();

  // Change route detection
  useEffect(() => {
    changeMenuActiveButton();
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
      "nav-links-inner-wrapper-mobile"
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

  return (
    <Routes>
      <Route path={AppRoute.Home} element={<HomePage />} />
      <Route path={AppRoute.Actions} element={<ActionsPage />} />
      <Route path={AppRoute.Gallery} element={<GalleryPage />} />
      <Route path={AppRoute.Contact} element={<ContactPage />} />
    </Routes>
  );
};

export default AppRouter;
