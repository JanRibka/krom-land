import { ReactNode, useEffect, useRef } from "react";
import { windowScrollTo } from "seamless-scroll-polyfill";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import useScrollPosition from "../../../shared/customHooks/useScrollPosition/useScrollPosition";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import ButtonUpStyled from "./styledComponents/ButtonUpStyled";
import LayoutStyled from "./styledComponents/LayoutStyled";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  // References
  const refBtnUp = useRef<HTMLButtonElement>(null);

  // Consts
  const scrollYPosition: number = useScrollPosition();

  // Other
  useEffect(() => {
    HeaderClassListChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYPosition]);

  const HeaderClassListChange = () => {
    const heightOffset: number = 100;

    if (scrollYPosition > heightOffset) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("scroll-on");

      refBtnUp.current?.classList.add("to-top-active");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("scroll-on");

      refBtnUp.current?.classList.remove("to-top-active");
    }
  };

  const ScrollToTopHandler = () => {
    windowScrollTo(window, { behavior: "smooth", top: 0 }, {});
  };

  return (
    <LayoutStyled>
      <NavBar />
      {props.children}
      <Footer />
      <ButtonUpStyled onClick={ScrollToTopHandler} ref={refBtnUp}>
        <KeyboardArrowUpIcon />
      </ButtonUpStyled>
    </LayoutStyled>
  );
};

export default Layout;
