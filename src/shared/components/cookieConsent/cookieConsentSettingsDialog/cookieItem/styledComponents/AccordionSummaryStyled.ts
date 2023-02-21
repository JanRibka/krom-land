import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  flexDirection: "row-reverse",
  color: theme.palette.text.secondary,

  "& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded":
    {
      marginLeft: theme.spacing(1),
    },
}));

export default AccordionSummaryStyled;
