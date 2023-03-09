import { ReactNode, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { windowScrollTo } from "seamless-scroll-polyfill";
import AppNotification from "shared/components/notification/AppNotification";
import { useRequest } from "shared/dataAccess/useRequest";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";
import { useCommonSlice } from "shared/infrastructure/store/common/useCommonSlice";
import { useHomeSlice } from "shared/infrastructure/store/home/useHomeSlice";
import ResultDataDTO from "shared/models/ResultDataDTO";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import useScrollPosition from "../../../shared/customHooks/useScrollPosition/useScrollPosition";
import { mapFromHomeDTO } from "../home/save/mapFromHomeDTO";
import KromLandDTO from "../KromLandDTO";
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
  const { handleHomeUpdate } = useHomeSlice();
  const { handleCommonUpdate } = useCommonSlice();

  // Store
  const common = useSelector(selectCommon);

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

  /**
   * Get data for web
   */
  useRequest<ResultDataDTO<KromLandDTO>>(
    {
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "webcontent",
        type: "getall",
      }),
    },
    {
      Success: false,
      ErrMsg: "",
      Data: {
        Common: { _dataLoaded: false },
        Home: {
          Title: "",
          Description: "",
          MainImagePath: "",
          MainImageAlt: "",
          AboutUs: "",
          AboutUsImagePath: "",
          AboutUsImageAlt: "",
          PeopleSay1Text: "",
          PeopleSay1Name: "",
          PeopleSay2Text: "",
          PeopleSay2Name: "",
          PeopleSay3Text: "",
          PeopleSay3Name: "",
        },
      },
    },
    [],
    {
      apply: true,
      condition: () => common._dataLoaded === false,
    },
    (data) => {
      console.log(data.Data);
      if (data.Success) {
        if (!!data?.Data?.Home) {
          handleHomeUpdate(mapFromHomeDTO(data?.Data?.Home));
          handleCommonUpdate({ _dataLoaded: true });
        }
      } else {
        AppNotification("Chyba", data.ErrMsg ?? "", "danger");
      }
    }
  );

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
