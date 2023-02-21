import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

export default AccordionDetailsStyled;
