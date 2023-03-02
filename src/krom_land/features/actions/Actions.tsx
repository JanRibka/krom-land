import PageTitle from "shared/components/pageTitle/PageTitle";

import Stack from "@mui/material/Stack";

import ActionSelect from "./actionSelect/ActionSelect";
import TopBackground from "./img/contact_top_bg.webp";

const Actions = () => {
  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='Nadcházející akce'
          alt='Úvodní fotka stránky Akce'
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
