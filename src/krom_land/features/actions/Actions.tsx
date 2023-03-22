import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";
import { selectActions } from "shared/infrastructure/store/actions/actionsSlice";

import Stack from "@mui/material/Stack";

import ActionSelect from "./actionSelect/ActionSelect";

const Actions = () => {
  // Store
  const actions = useSelector(selectActions);

  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={actions.MainImage.Path}
          title={actions.PageHeaderTextMain}
          titleColor={actions.PageHeaderTextMainColor}
          alt={actions.MainImage.Alt}
          imhHeight={350}
        />
      </>
      <>
        <ActionSelect />
      </>
    </Stack>
  );
};

export default Actions;
