import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

import WriteToUsStyled from './styledComponents/WriteToUsStyled';

const WritetoUs = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // State
  const [confirmData, setConfirmData] = useState<boolean>(false);

  // Constants
  const theme = useTheme();
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));

  // Other
  const handleFormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAIL_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAIL_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID ?? "",
        refForm.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <WriteToUsStyled>
      <form ref={refForm} onSubmit={handleFormOnSubmit}>
        <Stack spacing={3} direction='column' className='write-to-us-wrapper'>
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
              />
              <TextField
                label='E-mail'
                required
                variant='outlined'
                type='email'
                className='first-row-input'
                autoComplete='off'
                name='user_email'
              />
              <TextField
                value='KromLand - Kontakt'
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
            />
          </>
          <>
            <FormControl component='fieldset'>
              <FormControlLabel
                label='Souhlasím se shromažďováním a uchováváním mých odeslaných údajů.'
                value='right'
                control={
                  <Checkbox
                    value={confirmData}
                    onClick={() => setConfirmData(!confirmData)}
                  />
                }
              />
            </FormControl>
          </>
          <>
            <Box className='button-wrapper'>
              <Button variant='contained' type='submit' disabled={!confirmData}>
                Odeslat zprávu
              </Button>
            </Box>
          </>
        </Stack>
      </form>
    </WriteToUsStyled>
  );
};

export default WritetoUs;
