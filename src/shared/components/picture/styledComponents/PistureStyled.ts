import Box from "@mui/material/Box";
import grey from "@mui/material/colors/grey";
import { styled } from "@mui/material/styles";

const PictureStyled = styled(Box)(
  ({ theme }) => `
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;

  &.enb-hover:hover {
    cursor: pointer;

    .image-overlay {        
        background-color: ${theme.palette.common.purple.main};
    }
      
    svg {
        opacity: 1;
        animation: bounce 500ms ease;
    }
  }

  .image-overlay {
    width: inherit;
    height: inherit;
    aspect-ratio: inherit;
    border-radius: 15px;
    background-color: transparent;
    z-index: 1;
    opacity: 0.2;
    transition: all 300ms ease
  }

  img {
    width: 100%;
    height: auto;    
    position: absolute;    
    background-color: ${grey[400]}
  }

  svg {
    position: absolute;    
    font-size: xx-large;
    opacity: 0;
    transform: scale(1.3);
    color: ${theme.palette.common.red.dark};
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
