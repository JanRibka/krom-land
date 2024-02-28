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
import Vouchers from "../vouchers/Vouchers";
import ActionSelectStyled from "./styledComponents/ActionSelectStyled";

const ActionSelect = () => {
  // References
  const refMenuUlList = useRef<HTMLUListElement>(null);
  const refActionTabWrapper = useRef<HTMLDivElement>(null);

  // Store
  const actions = useSelector(selectActions);

  // Constants
  const theme = useTheme();
  const actionDetailsLength = actions.ActionDetails.length;
  const colors = [
    theme.palette.secondary.main,
    theme.palette.primary.main,
    theme.palette.common.purple.main,
    theme.palette.common.red.main,
  ];

  // Other
  const handleOnCLick = (value: number) => {
    const lis = refMenuUlList.current?.childNodes;

    lis?.forEach((item, index) => {
      const classList = (item as Element).classList;
      classList.remove("active");

      if (index === value) classList.add("active");
    });

    const actionTabs = refActionTabWrapper.current?.childNodes;

    actionTabs?.forEach((item, index) => {
      const classList = (item as Element).classList;
      classList.remove("active");

      if (index === value) classList.add("active");
    });

    if (value === actionDetailsLength) {
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: "Zobrazení dokumentů ke stažení",
      });
    } else if (value === actionDetailsLength + 1) {
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: "Zobrazení dárkových poukazů",
      });
    } else {
      pushToDataLayer("gtm.click", {
        buttonName: "action_select",
        buttonDesc: "Zobrazení detailu akce",
        actionName: actions.ActionDetails[value].ActionName,
      });
    }
  };

  const renderBookmarks = () => {
    const result: JSX.Element[] = [];

    actions.ActionDetails.forEach((item, index) =>
      result.push(
        <Box
          key={`actionBookmark_${index}`}
          component="li"
          className={
            "action-bookmark-" + index + (index === 0 ? " active" : undefined)
          }
          onClick={() => handleOnCLick(index)}
        >
          {item.MonthName ? (
            <Box component="span">{item.MonthName}</Box>
          ) : (
            <Skeleton className="skeleton-menu-text" />
          )}
        </Box>
      )
    );

    result.push(
      <Box
        component="li"
        className={"action-bookmark-" + actionDetailsLength}
        onClick={() => handleOnCLick(actionDetailsLength)}
      >
        <Box component="span">Dokumenty</Box>
      </Box>
    );

    result.push(
      <Box
        component="li"
        className={"action-bookmark-" + (actionDetailsLength + 1)}
        onClick={() => handleOnCLick(actionDetailsLength + 1)}
      >
        <Box component="span">Poukazy</Box>
      </Box>
    );

    return result;
  };

  const renderActions = () => {
    return actions.ActionDetails.map((item, index) => {
      return (
        <Action
          key={`actionTab_${index}`}
          className={"action-tab" + (index === 0 ? " active" : undefined)}
          backgroundColor={colors[index % colors.length]}
          idAction={item.Id}
          name={item.ActionName}
          description={item.ActionDescritption}
          image={item.Image.Path}
          imageAlt={item.Image.Alt}
          videoUrl={item.VideoLink}
          kdy={item.Date}
          kde={item.Place}
          cena={item.Price}
          zdaPoznamkaKCene={item.IsPriceRemark}
          poznamkaKCene={item.PriceRemark}
          capacityFull={item.CapacityFull}
        />
      );
    });
  };

  return (
    <ActionSelectStyled component="section">
      <Stack>
        <Box className="menu-wrapper">
          <Box ref={refMenuUlList} component="ul">
            {renderBookmarks()}
          </Box>
        </Box>
        <>
          <Box ref={refActionTabWrapper}>
            {renderActions()}

            <Documents
              className={"action-tab" + actionDetailsLength}
              backgroundColor={colors[actionDetailsLength % colors.length]}
            />
            <Vouchers
              className={"action-tab" + actionDetailsLength + 1}
              backgroundColor={
                colors[(actionDetailsLength + 1) % colors.length]
              }
            />
          </Box>
        </>
      </Stack>
    </ActionSelectStyled>
  );
};

export default ActionSelect;
