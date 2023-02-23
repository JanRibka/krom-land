import { parse as dateParse } from "date-fns";
import cslocale from "date-fns/locale/cs";
import { Dayjs } from "dayjs";
import { MuiTelInputInfo } from "mui-tel-input/dist/index.types";
import { ChangeEvent, FormEvent, forwardRef, Ref } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { nameof } from "../../../../../nameof";
import DialogContentFormModel from "../models/DialogContentFormModel";
import DialogContentStyled from "./styledComponents/DilogContentFormStyled";

interface IProps {
  formData: DialogContentFormModel;
  handleTextFieldOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleOnChangeDatePipcker: (
    value: Dayjs | null,
    keyboardInputValue: string | undefined,
    name: string
  ) => void;
  handleOnChangeTelInput: (
    value: string,
    info: MuiTelInputInfo,
    name: string
  ) => void;
  handleOnChangeRadio: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const DialogContentForm = forwardRef(
  (props: IProps, ref: Ref<HTMLFormElement>) => {
    // Constants
    const theme = useTheme();
    const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
    const smDwn = useMediaQuery(theme.breakpoints.down("sm"));
    const rowDirection = smDwn ? "column" : "row";

    return (
      <DialogContentStyled>
        <form ref={ref} onSubmit={props.handleFormOnSubmit}>
          <Stack spacing={2} direction='column'>
            <>
              <TextField
                label='E-mail'
                required
                fullWidth
                variant='outlined'
                type='email'
                autoComplete='off'
                name={nameof<DialogContentFormModel>("user_email")}
                value={props.formData.user_email}
                onChange={props.handleTextFieldOnChange}
              />
            </>
            <>
              <Typography variant='h6' className='label'>
                Informace o dítěti
              </Typography>
              <Stack spacing={2} direction={rowDirection}>
                <TextField
                  label='Jméno'
                  required
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("child_name")}
                  value={props.formData.child_name}
                  onChange={props.handleTextFieldOnChange}
                />
                <TextField
                  label='Příjmení'
                  required
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("child_last_name")}
                  value={props.formData.child_last_name}
                  onChange={props.handleTextFieldOnChange}
                />
              </Stack>
            </>
            <>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={cslocale}
              >
                {mdDwn ? (
                  <MobileDatePicker
                    label='Datum narození'
                    inputFormat='DD.MM.YYYY'
                    value={dateParse(
                      props.formData.child_birthday,
                      "dd.mm.yyyy",
                      new Date()
                    )}
                    onChange={(date: any, keyboardInputValue) =>
                      props.handleOnChangeDatePipcker(
                        date,
                        keyboardInputValue,
                        nameof<DialogContentFormModel>("child_birthday")
                      )
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        error={false}
                        placeholder='dd.mm.rrrr'
                        name={nameof<DialogContentFormModel>("child_birthday")}
                      />
                    )}
                  />
                ) : (
                  <DesktopDatePicker
                    label='Datum narození'
                    inputFormat='DD.MM.YYYY'
                    value={dateParse(
                      props.formData.child_birthday,
                      "dd.mm.yyyy",
                      new Date()
                    )}
                    onChange={(date: any, keyboardInputValue) =>
                      props.handleOnChangeDatePipcker(
                        date,
                        keyboardInputValue,
                        nameof<DialogContentFormModel>("child_birthday")
                      )
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        error={false}
                        placeholder='dd.mm.rrrr'
                        name={nameof<DialogContentFormModel>("child_birthday")}
                      />
                    )}
                  />
                )}
              </LocalizationProvider>
            </>
            <>
              <Typography variant='h6' className='label'>
                Informace o prvním zákonném zástupci
              </Typography>
              <Stack spacing={2} direction={rowDirection}>
                <TextField
                  label='Jméno'
                  required
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>(
                    "first_representative_name"
                  )}
                  value={props.formData.first_representative_name}
                  onChange={props.handleTextFieldOnChange}
                />
                <TextField
                  label='Příjmení'
                  required
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>(
                    "first_representative_last_name"
                  )}
                  value={props.formData.first_representative_last_name}
                  onChange={props.handleTextFieldOnChange}
                />
              </Stack>
              <TextField
                label='Telefon'
                required
                fullWidth
                variant='outlined'
                type='tel'
                autoComplete='off'
                placeholder='xxx xxx xxx'
                name={nameof<DialogContentFormModel>(
                  "first_representative_phone_number"
                )}
                value={props.formData.first_representative_phone_number}
                onChange={props.handleTextFieldOnChange}
              />
            </>
            <>
              <Typography variant='h6' className='label'>
                Informace o druhém zákonném zástupci
              </Typography>
              <Stack spacing={2} direction={rowDirection}>
                <TextField
                  label='Jméno'
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>(
                    "second_representative_name"
                  )}
                  value={props.formData.second_representative_name}
                  onChange={props.handleTextFieldOnChange}
                />
                <TextField
                  label='Příjmení'
                  fullWidth
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>(
                    "second_representative_last_name"
                  )}
                  value={props.formData.second_representative_last_name}
                  onChange={props.handleTextFieldOnChange}
                />
              </Stack>
              <TextField
                label='Telefon'
                fullWidth
                variant='outlined'
                type='tel'
                autoComplete='off'
                // placeholder='xxx xxx xxx'
                name={nameof<DialogContentFormModel>(
                  "second_representative_phone_number"
                )}
                value={props.formData.second_representative_phone_number}
                onChange={props.handleTextFieldOnChange}
              />
            </>
            <>
              <Typography variant='h6' className='label'>
                Adresní informace
              </Typography>
              <Stack spacing={2} direction={rowDirection}>
                <TextField
                  label='Jmeno'
                  fullWidth
                  required
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("address_name")}
                  value={props.formData.address_name}
                  onChange={props.handleTextFieldOnChange}
                />
                <TextField
                  label='Příjmení'
                  fullWidth
                  required
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("address_last_name")}
                  value={props.formData.address_last_name}
                  onChange={props.handleTextFieldOnChange}
                />
              </Stack>
              <TextField
                label='Ulice a č. p.'
                fullWidth
                required
                variant='outlined'
                type='text'
                autoComplete='off'
                name={nameof<DialogContentFormModel>("address_street_cp")}
                value={props.formData.address_street_cp}
                onChange={props.handleTextFieldOnChange}
              />
              <Stack spacing={2} direction={rowDirection}>
                <TextField
                  label='Město'
                  fullWidth
                  required
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("address_city")}
                  value={props.formData.address_city}
                  onChange={props.handleTextFieldOnChange}
                />
                <TextField
                  label='PSČ'
                  fullWidth
                  required
                  variant='outlined'
                  type='text'
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("address_psc")}
                  value={props.formData.address_psc}
                  onChange={props.handleTextFieldOnChange}
                />
              </Stack>
            </>
            <>
              <Typography variant='h6' className='label'>
                Ostatní
              </Typography>
              <TextField
                label='Zdravotní omezení dítěte'
                placeholder='(Užívané léky, alergie, omezení po úraze, diety) Prosíme uveďte opravdu všechna omezení. Pokud nemá Vaše dítě žádné zdravotní omezení, nepište nic.'
                fullWidth
                variant='outlined'
                type='text'
                multiline
                rows={4}
                autoComplete='off'
                name={nameof<DialogContentFormModel>("other_hendicap")}
                value={props.formData.other_hendicap}
                onChange={props.handleTextFieldOnChange}
              />
              <FormControl required>
                <FormLabel>
                  Souhlasíte s focením Vašeho dítěte při akcích a poté
                  zveřejnění na sociálních sítích? (instagram, facebook)
                </FormLabel>
                <RadioGroup
                  row
                  name={nameof<DialogContentFormModel>("other_photos")}
                  value={props.formData.other_photos}
                  onChange={props.handleOnChangeRadio}
                >
                  <FormControlLabel
                    value='Ano'
                    control={<Radio required />}
                    label='Ano'
                  />
                  <FormControlLabel
                    value='Ne'
                    control={<Radio required />}
                    label='Ne'
                  />
                </RadioGroup>
              </FormControl>

              <FormControl required>
                <FormLabel>Jak bude dítě z akce odcházet?</FormLabel>
                <RadioGroup
                  row
                  aria-required
                  name={nameof<DialogContentFormModel>(
                    "other_how_children_arrives"
                  )}
                  value={props.formData.other_how_children_arrives}
                  onChange={props.handleOnChangeRadio}
                >
                  <FormControlLabel
                    value='Vyzvednu si jej'
                    control={<Radio required />}
                    label='Vyzvednu si jej'
                  />
                  <FormControlLabel
                    value='Může odcházet po akci samo domů'
                    control={<Radio required />}
                    label='Může odcházet po akci samo domů'
                  />
                </RadioGroup>
              </FormControl>

              {props.formData.other_how_children_arrives ===
                "Vyzvednu si jej" && (
                <TextField
                  label='Osoby, které si můžou díte vyzvednout'
                  placeholder='Pokud jste zvolili vyzvednutí dítěte, prosím napište osoby, které si můžou dítě vyzvednout a k nim i vztah k dítěti. '
                  fullWidth
                  required
                  variant='outlined'
                  type='text'
                  multiline
                  rows={4}
                  autoComplete='off'
                  name={nameof<DialogContentFormModel>("other_pickup_person")}
                  value={props.formData.other_pickup_person}
                  onChange={props.handleTextFieldOnChange}
                />
              )}

              <FormControl required>
                <FormLabel>Jak budete platit?</FormLabel>
                <RadioGroup
                  row
                  aria-required
                  name={nameof<DialogContentFormModel>("other_pay_method")}
                  value={props.formData.other_pay_method}
                  onChange={props.handleOnChangeRadio}
                >
                  <FormControlLabel
                    value='Přes účet'
                    control={<Radio required />}
                    label='Přes účet'
                  />
                  <FormControlLabel
                    value='Hotově při prvním dni víkendu'
                    control={<Radio required />}
                    label='Hotově při prvním dni víkendu'
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                label='Chcete nám něco sdělit?'
                placeholder='Tato kolonka slouží i k infu, že je dítě mladší než 5 let. Uveďte prosím jméno staršího sourozence.'
                fullWidth
                variant='outlined'
                type='text'
                multiline
                rows={4}
                autoComplete='off'
                name={nameof<DialogContentFormModel>("other_other_info")}
                value={props.formData.other_other_info}
                onChange={props.handleTextFieldOnChange}
              />
            </>
          </Stack>
          <Button
            type='submit'
            className='registration-submit-button'
            sx={{ display: "none" }}
          >
            submit
          </Button>
          {/* Hiddens */}
          <input
            type='hidden'
            name={nameof<DialogContentFormModel>("subject")}
            value={props.formData.subject}
          />
          <input
            type='hidden'
            name={nameof<DialogContentFormModel>("action_name")}
            value={props.formData.action_name}
          />
        </form>
      </DialogContentStyled>
    );
  }
);

export default DialogContentForm;
