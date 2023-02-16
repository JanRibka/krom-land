import { ChangeEvent, FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import AppSnackbar from "../../../../shared/components/snackbar/AppSnackbar";
import AppSnackBarOpenDataModel from "../../../../shared/components/snackbar/AppSnackBarModel";
import HttpStatusCode from "../../../../shared/enums/HttpStatusCode";
import WriteToUsStyled from "./styledComponents/WriteToUsStyled";

// Uděláno podle https://www.youtube.com/watch?v=wUK40U6sPH0 a https://smtpjs.com/

const WritetoUs = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // Constants
  const theme = useTheme();
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));
  const formDataInitit = {
    user_name: "",
    user_email: "",
    subject: "KromLand - Dotaz",
    message: "",
    confirm_data: false,
  };
  // State
  const [messageOpenData, setMessageOpenData] =
    useState<AppSnackBarOpenDataModel>({
      open: false,
      message: "",
      severity: undefined,
    });
  const [formData, setFormData] = useState<{
    user_name: string;
    user_email: string;
    subject: string;
    message: string;
  }>(formDataInitit);

  // Other
  const handleTextFieldOnBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID_QUESTION ?? "",
        refForm.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === HttpStatusCode.OK) {
            setMessageOpenData({
              open: true,
              message: "Vaše zpráva byla úspěšně odeslána",
              severity: "success",
            });
          } else {
            setMessageOpenData({
              open: true,
              message: "Chyba při odesílání zprávy. Zkuste to prosím později.",
              severity: "error",
            });
          }
        },
        (error) => {
          console.log(error.text);
          setMessageOpenData({
            open: true,
            message: "Chyba při odesílání zprávy. Zkuste to prosím později.",
            severity: "error",
          });
        }
      );

    e.currentTarget.reset();
    setFormData(formDataInitit);
  };

  return (
    <WriteToUsStyled>
      <Stack spacing={3} direction='column' className='write-to-us-wrapper'>
        <>
          <SectionTitle
            mainText='Máte nějaký dotaz?'
            secondaryText='Napište nám'
          />
        </>
        <form ref={refForm} onSubmit={handleFormOnSubmit}>
          <Stack
            spacing={3}
            direction='column'
            className='write-to-us-form-wrapper'
          >
            <>
              <Stack spacing={3} direction={smDwn ? "column" : "row"}>
                <TextField
                  label='Vaše jméno'
                  required
                  variant='outlined'
                  type='text'
                  className='first-row-input'
                  autoComplete='off'
                  name='user_name'
                  onBlur={handleTextFieldOnBlur}
                />
                <TextField
                  label='E-mail'
                  required
                  variant='outlined'
                  type='email'
                  className='first-row-input'
                  autoComplete='off'
                  name='user_email'
                  onBlur={handleTextFieldOnBlur}
                />
                <TextField
                  value='KromLand - Dotaz'
                  label='Předmět'
                  required
                  variant='outlined'
                  type='text'
                  name='subject'
                  sx={{ display: "none" }}
                />
              </Stack>
              <TextField
                label='Vaše zpráva'
                required
                variant='outlined'
                type='text'
                multiline
                rows={4}
                autoComplete='off'
                name='message'
                onBlur={handleTextFieldOnBlur}
              />
            </>
            <>
              <Box className='button-wrapper'>
                <Button variant='contained' type='submit'>
                  Odeslat zprávu
                </Button>
              </Box>
            </>
          </Stack>
        </form>
      </Stack>
      <AppSnackbar
        openData={messageOpenData}
        setOpenData={setMessageOpenData}
      />
    </WriteToUsStyled>
  );
};

export default WritetoUs;
