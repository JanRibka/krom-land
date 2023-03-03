import { ChangeEvent, FormEvent, useRef, useState } from "react";
import RepositoryKL from "shared/infrastructure/repositiory/RepositoryKL";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import WriteToUsStyled from "./styledComponents/WriteToUsStyled";

const WritetoUs = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // Constants
  const _repoKL = new RepositoryKL();
  const theme = useTheme();
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));
  const formDataInitit = {
    user_name: "",
    user_email: "",
    message: "",
  };
  // State
  const [formData, setFormData] = useState<{
    user_name: string;
    user_email: string;
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
    // TOTO: Vytvořit šablony tady a posílat enkodo vany text na server
    _repoKL.sendEmail(
      formData.user_email,
      formData.user_name,
      formData.message
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
    </WriteToUsStyled>
  );
};

export default WritetoUs;
