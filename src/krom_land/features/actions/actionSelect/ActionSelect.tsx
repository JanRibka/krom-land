import { useRef } from "react";
import { useSelector } from "react-redux";
import { pushToDataLayer } from "shared/helpers/googleTagManagerHelper";
import { selectActions } from "shared/infrastructure/store/actions/actionsSlice";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import Action from "../action/Action";
import Documents from "../documents/Documents";
import ActionSelectStyled from "./styledComponents/ActionSelectStyled";

const ActionSelect = () => {
  // References
  const refButtonFirst = useRef<HTMLLIElement>(null);
  const refButtonSecond = useRef<HTMLLIElement>(null);
  const refButtonThird = useRef<HTMLLIElement>(null);
  const refButtonFourth = useRef<HTMLLIElement>(null);
  const refTabFirst = useRef<HTMLDivElement>(null);
  const refTabSecond = useRef<HTMLDivElement>(null);
  const refTabThird = useRef<HTMLDivElement>(null);
  const refTabFourth = useRef<HTMLDivElement>(null);

  // Store
  const actions = useSelector(selectActions);

  // Constants
  const theme = useTheme();

  // Other
  const handleOnCLick = (value: number) => {
    if (value === 0) {
      // MenuButtons
      refButtonFirst.current?.classList.add("active");
      refButtonSecond.current?.classList.remove("active");
      refButtonThird.current?.classList.remove("active");
      refButtonFourth.current?.classList.remove("active");

      // Tabs
      refTabFirst.current?.classList.add("active");
      refTabSecond.current?.classList.remove("active");
      refTabThird.current?.classList.remove("active");
      refTabFourth.current?.classList.remove("active");

      // Google analytics
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: actions.ActionDetails[0].ActionName,
      });
    } else if (value === 1) {
      // MenuButtons
      refButtonSecond.current?.classList.add("active");
      refButtonFirst.current?.classList.remove("active");
      refButtonThird.current?.classList.remove("active");
      refButtonFourth.current?.classList.remove("active");

      // Tabs
      refTabSecond.current?.classList.add("active");
      refTabFirst.current?.classList.remove("active");
      refTabThird.current?.classList.remove("active");
      refTabFourth.current?.classList.remove("active");

      // Google analytics
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: actions.ActionDetails[1].ActionName,
      });
    } else if (value === 2) {
      // MenuButtons
      refButtonThird.current?.classList.add("active");
      refButtonFirst.current?.classList.remove("active");
      refButtonSecond.current?.classList.remove("active");
      refButtonFourth.current?.classList.remove("active");

      // Tabs
      refTabThird.current?.classList.add("active");
      refTabFirst.current?.classList.remove("active");
      refTabSecond.current?.classList.remove("active");
      refTabFourth.current?.classList.remove("active");

      // Google analytics
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: actions.ActionDetails[2].ActionName,
      });
    } else if (value === 3) {
      // MenuButtons
      refButtonFourth.current?.classList.add("active");
      refButtonFirst.current?.classList.remove("active");
      refButtonSecond.current?.classList.remove("active");
      refButtonThird.current?.classList.remove("active");

      // Tabs
      refTabFourth.current?.classList.add("active");
      refTabFirst.current?.classList.remove("active");
      refTabSecond.current?.classList.remove("active");
      refTabThird.current?.classList.remove("active");

      // Google analytics
      pushToDataLayer("gtm.click", {
        buttonName: "document_select",
        buttonDesc: "Zobrazení dokumentů ke stažení",
      });
    }
  };

  return (
    <ActionSelectStyled component='section'>
      <Stack>
        <>
          <Box component='ul'>
            {/* První záložka */}
            <Box
              ref={refButtonFirst}
              component='li'
              className='active'
              onClick={() => handleOnCLick(0)}
            >
              {actions.ActionDetails?.[0]?.MonthName ? (
                <Box component='span'>{actions.ActionDetails[0].MonthName}</Box>
              ) : (
                <Skeleton className='skeleton-menu-text' />
              )}
            </Box>
            {/* Druhá záložka */}
            <Box
              ref={refButtonSecond}
              component='li'
              onClick={() => handleOnCLick(1)}
            >
              {actions.ActionDetails?.[1]?.MonthName ? (
                <Box component='span'>{actions.ActionDetails[1].MonthName}</Box>
              ) : (
                <Skeleton className='skeleton-menu-text' />
              )}
            </Box>
            {/* Třetí záložka */}
            <Box
              ref={refButtonThird}
              component='li'
              onClick={() => handleOnCLick(2)}
            >
              {actions.ActionDetails?.[2]?.MonthName ? (
                <Box component='span'>{actions.ActionDetails[2].MonthName}</Box>
              ) : (
                <Skeleton className='skeleton-menu-text' />
              )}
            </Box>
            {/* Čtvrtá záložka */}
            <Box
              ref={refButtonFourth}
              component='li'
              onClick={() => handleOnCLick(3)}
            >
              <Box component='span'>Dokumenty</Box>
            </Box>
          </Box>
        </>
        <>
          <Box>
            <Action
              ref={refTabFirst}
              className='active'
              backgroundColor={theme.palette.secondary.main}
              idAction={actions.ActionDetails?.[0]?.Id}
              name={actions.ActionDetails?.[0]?.ActionName}
              description={actions.ActionDetails?.[0]?.ActionDescritption}
              image={actions.ActionDetails?.[0]?.Image.Path}
              imageAlt={actions.ActionDetails?.[0]?.Image.Alt}
              videoUrl={actions.ActionDetails?.[0]?.VideoLink}
              kdy={actions.ActionDetails?.[0]?.Date}
              kde={actions.ActionDetails?.[0]?.Place}
              cena={actions.ActionDetails?.[0]?.Price}
              zdaPoznamkaKCene={actions.ActionDetails?.[0]?.IsPriceRemark}
              poznamkaKCene={actions.ActionDetails?.[0]?.PriceRemark}
              capacityFull={actions.ActionDetails?.[0]?.CapacityFull}
            />
            <Action
              ref={refTabSecond}
              backgroundColor={theme.palette.primary.main}
              idAction={actions.ActionDetails?.[1]?.Id}
              name={actions.ActionDetails?.[1]?.ActionName}
              description={actions.ActionDetails?.[1]?.ActionDescritption}
              image={actions.ActionDetails?.[1]?.Image.Path}
              imageAlt={actions.ActionDetails?.[1]?.Image.Alt}
              videoUrl={actions.ActionDetails?.[1]?.VideoLink}
              kdy={actions.ActionDetails?.[1]?.Date}
              kde={actions.ActionDetails?.[1]?.Place}
              cena={actions.ActionDetails?.[1]?.Price}
              zdaPoznamkaKCene={actions.ActionDetails?.[1]?.IsPriceRemark}
              poznamkaKCene={actions.ActionDetails?.[1]?.PriceRemark}
              capacityFull={actions.ActionDetails?.[1]?.CapacityFull}
            />
            <Action
              ref={refTabThird}
              backgroundColor={theme.palette.common.purple.main}
              idAction={actions.ActionDetails?.[2]?.Id}
              name={actions.ActionDetails?.[2]?.ActionName}
              description={actions.ActionDetails?.[2]?.ActionDescritption}
              image={actions.ActionDetails?.[2]?.Image.Path}
              imageAlt={actions.ActionDetails?.[2]?.Image.Alt}
              videoUrl={actions.ActionDetails?.[2]?.VideoLink}
              kdy={actions.ActionDetails?.[2]?.Date}
              kde={actions.ActionDetails?.[2]?.Place}
              cena={actions.ActionDetails?.[2]?.Price}
              zdaPoznamkaKCene={actions.ActionDetails?.[2]?.IsPriceRemark}
              poznamkaKCene={actions.ActionDetails?.[2]?.PriceRemark}
              capacityFull={actions.ActionDetails?.[2]?.CapacityFull}
            />
            <Documents ref={refTabFourth} />
          </Box>
        </>
      </Stack>
    </ActionSelectStyled>
  );
};

export default ActionSelect;
