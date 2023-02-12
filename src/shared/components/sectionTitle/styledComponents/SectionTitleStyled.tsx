import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SectionTitleStyled = styled(Box)(
  ({ theme }) =>
    `
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;

  & .main-text {
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    color: ${theme.palette.text.primary}
  }

  & .secondary-text {
    font-family: "Caveat", cursive;
    font-size: 1.5rem;
    color: ${theme.palette.common.purple.main}
  }
`
);

export default SectionTitleStyled;
