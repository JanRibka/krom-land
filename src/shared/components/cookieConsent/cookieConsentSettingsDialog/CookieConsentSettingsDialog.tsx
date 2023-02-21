import React, { Dispatch, MouseEvent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CookieItem from './cookieItem/CookieItem';
import DialogActionsStyled from './styledComponents/DialogActionsStyled';
import DialogContentStyled from './styledComponents/DialogContentStyled';
import DialogStyled from './styledComponents/DialogStyled';
import DialogTitleWrapperStyled from './styledComponents/DialogTitleWrapperStyled';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  necCookieValue: boolean;
  setNecCookieValue: Dispatch<React.SetStateAction<boolean>>;
  diagCookieValue: boolean;
  setDiagCookieValue: Dispatch<React.SetStateAction<boolean>>;
  agreeAllOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
  saveSettingsOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CookieConsentSettingsDialog = (props: IProps) => {
  return (
    <DialogStyled open={props.isOpen} disableScrollLock={false}>
      <DialogTitleWrapperStyled>
        <DialogTitle color='text.secondary'>Nastavení cookies</DialogTitle>
        <IconButton
          onClick={() => {
            props.setIsOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleWrapperStyled>

      <DialogContentStyled dividers>
        <Typography color='text.secondary' fontWeight='bold'>
          Použití souborů cookie
        </Typography>
        <Box component='p' textAlign='justify' color='text.secondary'>
          Pro fungování webových stránek využíváme soubory cookie, což jsou malé
          soubory, které naše stránky pomocí prohlížeče ukládají do vašeho
          zařízení nebo z něj čtou. Soubory cookie používáme k zajištění
          základních funkcí webu a k analýze údajů o našich návštěvnících.
          Používáním tohoto webu s tímto používáním souhlasíte.
        </Box>
        <CookieItem
          cookieName='Funkční cookies'
          cookieDescription='Jedná se o soubory cookie, které jsou nezbytné k tomu, aby web správně fungoval, takže není možné je vypnout.'
          value={props.necCookieValue}
          setValue={props.setNecCookieValue}
          disable={true}
        />
        <CookieItem
          cookieName='Analytické cookies'
          cookieDescription='Tyto soubory cookie shromažďují informace o tom, jak webovou stránku používáte, které stránky jste navštívili a na které odkazy jste klikli. Všechna data jsou anonymizována a nelze je použít k vaší identifikaci.'
          value={props.diagCookieValue}
          setValue={props.setDiagCookieValue}
        />
      </DialogContentStyled>
      <DialogActionsStyled>
        <Button variant='contained' onClick={props.agreeAllOnClickAction}>
          Souhlasím se vším
        </Button>
        <Button onClick={props.saveSettingsOnClickAction}>
          Uložit nastavení
        </Button>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default CookieConsentSettingsDialog;
