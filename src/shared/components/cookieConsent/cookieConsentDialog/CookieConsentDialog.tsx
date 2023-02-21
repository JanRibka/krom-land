import { MouseEvent } from 'react';

import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DialogActionsStyled from './styledComponents/DialogActionsStyled';
import DialogStyled from './styledComponents/DialogStyled';

interface IProps {
  isOpen: boolean;
  accepAllOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
  openSettingsOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CookieConsentDialog = (props: IProps) => {
  return (
    <DialogStyled open={props.isOpen} disableScrollLock hideBackdrop>
      <DialogTitle color='text.secondary'>Používáme cookies</DialogTitle>
      <DialogContent>
        <DialogContentText color='text.secondary' align='justify'>
          Tyto webové stránky používají nezbytné soubory cookie k zajištění
          správného fungování a sledovací soubory cookie, abychom pochopili, jak
          s nimi komunikujete. Sledovací soubory cookie budou nastaveny až po
          Vašem souhlasu.
        </DialogContentText>
      </DialogContent>
      <DialogActionsStyled>
        <Button variant='contained' onClick={props.accepAllOnClickAction}>
          Přijmout vše
        </Button>
        <Button variant='text' onClick={props.openSettingsOnClickAction}>
          Nastavení
        </Button>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default CookieConsentDialog;
