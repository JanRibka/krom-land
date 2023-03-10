import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";
import { selectContact } from "shared/infrastructure/store/contact/contactSlice";

import GoogleMaps from "./googleMaps/GoogleMaps";
import ContactStyled from "./styledComponents/ContactStyled";
import WritetoUs from "./writeToUs/WriteToUs";

const Contact = () => {
  // Store
  const contact = useSelector(selectContact);

  return (
    <ContactStyled spacing={10} direction='column'>
      <>
        <PageTitle
          image={contact.MainImagePath}
          title='Kontakt'
          alt={contact.MainImageAlt}
          imhHeight={350}
        />
      </>
      <>
        <WritetoUs />
      </>
      <>
        <GoogleMaps googleMapsUrl={contact.GoogleMapsUrl} />
      </>
    </ContactStyled>
  );
};

export default Contact;
