import { nameof } from "nameof";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AppCheckbox from "shared/components/checkbox/AppCheckbox";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";
import OkDialog from "shared/dialogs/OkDialog";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";
import { selectContact } from "shared/infrastructure/store/contact/contactSlice";
import { messageTemplate } from "shared/templates/messageTemplate";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

import ContactService from "../ContactService";
import WriteToUsFormModel from "../models/WriteToUsFormModel";
import WriteToUsStyled from "./styledComponents/WriteToUsStyled";

const WriteToUs = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // Store
  const common = useSelector(selectCommon);

  // Constants
  const _contactService = new ContactService();
  const theme = useTheme();
  const contact = useSelector(selectContact);
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));

  // State
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<WriteToUsFormModel>(
    new WriteToUsFormModel(),
  );

  // Other
  const handleTextFieldOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let message = messageTemplate;

    Object.keys(formData).forEach((key) => {
      message = message.replace("@" + key, (formData as any)[key]);
    });

    _contactService.sendEmail(
      contact.Email,
      formData.user_email,
      formData.user_name,
      "Zpráva z KROMLand.cz",
      message,
    );

    e.currentTarget.reset();
    setFormData(new WriteToUsFormModel());
  };

  const handleOnClickGdpr = (
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>,
  ) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleCheckboxOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    const name: string = e.target.name;

    setFormData({ ...formData, [name]: checked });
  };

  return (
    <WriteToUsStyled component="section">
      <Stack spacing={3} direction="column" className="write-to-us-wrapper">
        <>
          <SectionTitle
            mainText="Máte nějaký dotaz?"
            secondaryText="Napište nám"
          />
        </>
        <form ref={refForm} onSubmit={handleFormOnSubmit}>
          <Stack
            spacing={3}
            direction="column"
            className="write-to-us-form-wrapper"
          >
            <>
              <Stack spacing={3} direction={smDwn ? "column" : "row"}>
                <TextField
                  label="Vaše jméno"
                  required
                  variant="outlined"
                  type="text"
                  className="first-row-input"
                  autoComplete="off"
                  name={nameof<WriteToUsFormModel>("user_name")}
                  value={formData.user_name}
                  onChange={handleTextFieldOnChange}
                />
                <TextField
                  label="E-mail"
                  required
                  variant="outlined"
                  type="email"
                  className="first-row-input"
                  autoComplete="off"
                  name={nameof<WriteToUsFormModel>("user_email")}
                  value={formData.user_email}
                  onChange={handleTextFieldOnChange}
                />
              </Stack>
              <TextField
                label="Vaše zpráva"
                required
                variant="outlined"
                type="text"
                multiline
                rows={4}
                autoComplete="off"
                name={nameof<WriteToUsFormModel>("message")}
                value={formData.message}
                onChange={handleTextFieldOnChange}
              />
            </>
            <Box className="gdpr-consent">
              <AppCheckbox
                required
                checked={formData.gdpr_consent}
                name={nameof<WriteToUsFormModel>("gdpr_consent")}
                label={
                  <Box component="span">
                    Souhlasím se zpracováním{" "}
                    <Box component="a" onClick={handleOnClickGdpr}>
                      osobních údajů
                    </Box>
                  </Box>
                }
                onChange={handleCheckboxOnChange}
              />
            </Box>
            <>
              <Box className="button-wrapper">
                <Button variant="contained" type="submit">
                  Odeslat zprávu
                </Button>
              </Box>
            </>
          </Stack>
        </form>

        <OkDialog
          isOpen={dialogOpen}
          onClickOkButton={() => setDialogOpen(false)}
          title={common.Conditions.GdprLabel}
          isClosable
          content={
            <Box
              component="span"
              dangerouslySetInnerHTML={{ __html: common.Conditions.GdprText }}
            />
          }
        />
      </Stack>
    </WriteToUsStyled>
  );
};

export default WriteToUs;
