import { ReactNode, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { windowScrollTo } from "seamless-scroll-polyfill";
import AppNotification from "shared/components/notification/AppNotification";
import { useRequest } from "shared/dataAccess/useRequest";
import { useActionsSlice } from "shared/infrastructure/store/actions/useActionsSlice";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";
import { useCommonSlice } from "shared/infrastructure/store/common/useCommonSlice";
import { useContactSlice } from "shared/infrastructure/store/contact/useContactSlice";
import { useGallerySlice } from "shared/infrastructure/store/gallery/useGallerySlice";
import { useHomeSlice } from "shared/infrastructure/store/home/useHomeSlice";
import ResultDataDTO from "shared/models/ResultDataDTO";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import useScrollPosition from "../../../shared/customHooks/useScrollPosition/useScrollPosition";
import { mapFromActionsDTO } from "../actions/save/mapFromActionsDTO";
import { mapFromContactDTO } from "../contact/save/mapFromContactDTO";
import { mapFromGalleryDTO } from "../gallery/save/mapFromGalleryDTO";
import { mapFromHomeDTO } from "../home/save/mapFromHomeDTO";
import KromLandDTO from "../KromLandDTO";
import { mapFromCommonDTO } from "../mapFromCommonDTO";
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
  const { handleActionsUpdate } = useActionsSlice();
  const { handleGalleryUpdate } = useGallerySlice();
  const { handleContactUpdate } = useContactSlice();

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
        Common: {},
        Home: {
          Id: null,
          Title: null,
          Description: null,
          MainImagePath: null,
          MainImageAlt: null,
          AboutUs: null,
          AboutUsImagePath: null,
          AboutUsImageAlt: null,
          PeopleSay1Text: null,
          PeopleSay1Name: null,
          PeopleSay2Text: null,
          PeopleSay2Name: null,
          PeopleSay3Text: null,
          PeopleSay3Name: null,
        },
        Actions: {
          Id: null,
          Title: null,
          Description: null,
          MainImagePath: null,
          MainImageAlt: null,
          ActionDetails: [],
          DocumentsToDownload: [],
        },
        Gallery: {
          Id: null,
          Title: null,
          Description: null,
          MainImagePath: null,
          MainImageAlt: null,
          Images: [],
        },
        Contact: {
          Id: null,
          Title: null,
          Description: null,
          MainImagePath: null,
          MainImageAlt: null,
          GoogleMapsUrl: null,
        },
      },
    },
    [],
    {
      apply: true,
      condition: () => common._dataLoaded === false,
    },
    (data) => {
      const dataType = typeof data;

      if (dataType === "string") {
        AppNotification("Chyba", String(data), "danger");
      } else {
        if (data.Success) {
          handleCommonUpdate(mapFromCommonDTO(data?.Data?.Common));
          handleHomeUpdate(mapFromHomeDTO(data?.Data?.Home));
          handleActionsUpdate(mapFromActionsDTO(data.Data?.Actions));
          handleGalleryUpdate(mapFromGalleryDTO(data.Data?.Gallery));
          handleContactUpdate(mapFromContactDTO(data.Data?.Contact));
        } else {
          AppNotification("Chyba", data.ErrMsg ?? "", "danger");
        }
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
