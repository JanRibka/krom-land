import Stack from "@mui/material/Stack";

import PageTitle from "../../../shared/infrastructure/components/pageTitle/PageTitle";
import GoogleMaps from "./googleMaps/GoogleMaps";
import TopBackground from "./img/contact_top_bg.webp";
import WritetoUs from "./writeToUs/WriteToUs";

const Contact = () => {
  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='Kontakt'
          alt='Úvodní fotka stránky Kontakt'
          imhHeight={350}
        />
      </>
      <>
        <WritetoUs />
      </>
      <>
        <GoogleMaps />
      </>
    </Stack>
  );
};

export default Contact;
