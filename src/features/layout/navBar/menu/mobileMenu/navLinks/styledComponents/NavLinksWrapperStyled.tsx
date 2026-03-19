import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NavLinksWrapperStyled = styled(({ className, ...props }: BoxProps) => (
  <Box {...props} className={className} />
))`
  & .mobile-menu-nav {
    position: fixed;
    top: 23px;
    right: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: 0;
    margin: 0;
    z-index: 9;
    overflow: hidden;
    opacity: 0;
    border-radius: 50%;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
    //animation: border-transform 7s linear infinite;
    transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
      right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 250ms 1100ms ease,
      width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
      height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
      opacity 500ms linear 1500ms;

    &.is-opened {
      animation-play-state: paused;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 200%;
      height: 200%;
      opacity: 1;
      transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 250ms 700ms ease,
        width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
        height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), opacity 500ms linear;
    }

    &.scroll-on:not(.is-opened) {
      top: 9px;
    }
  }

  @keyframes border-transform {
    0%,
    100% {
      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
      border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
      border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
      border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
      border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
      border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
      border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
  }
`;

export default NavLinksWrapperStyled;
