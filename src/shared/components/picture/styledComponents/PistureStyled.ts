import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PictureStyled = styled(Box)(
  ({ theme }) => `
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    svg {
        opacity: 1;
        animation: bounce 500ms ease;
    }
  }

  img {
    width: inherit;
    height: inherit;
    aspect-ratio: 16/9;
    position: absolute;
    border-radius: 15px;
  }

  svg {
    position: absolute;    
    font-size: xx-large;
    opacity: 0;
    transform: scale(1.3);
    color: ${theme.palette.common.purple.dark};
  }

  @keyframes bounce {
    0% {
        transform: scale(0.8);
    }
    80% {
        transform: scale(1.4);
    }
    100% {
        transform: scale(1.3);
    }
  }
`
);

export default PictureStyled;
