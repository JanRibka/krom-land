import createTheme from '@mui/material/styles/createTheme';

import Eater_Regular from '../fonts/Eater-Regular.ttf';

// Colors
const palettePrimaryLight = "rgb(254, 205, 210)";
const palettePrimaryMain = "rgb(253, 126, 143)";
const palettePrimaryDark = "rgb(227, 113, 128)";
const paletteSecondaryMain = "rgb(238, 238, 238)";
const paletteSecondaryDark = "rgb(214, 214, 214)";
const paletteTextPrimary = "rgb(9, 0, 4)";
const paletteTextSecondary = "rgb(238, 238, 238)";
const paletteCustomPurpleMain = "rgb(208, 149, 217)";
const paletteCustomPurpleDark = "rgb(106, 60, 135)";
const paletteCustomRedMain = "rgb(229, 0, 105)";
const paletteCustomRedDark = "rgb(255, 0, 0)";

// Custom theme
// Colors
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    purple: {
      main: string;
      dark: string;
    };
    red: {
      main: string;
      dark: string;
    };
  }
}

// Typography theme
const AppThemeTypography = createTheme({
  typography: {
    // fontFamily: "'Didact Gothic', sans-serif",
  },
});

// Components theme
const AppThemeComponents = createTheme(AppThemeTypography, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Eater';
          src: local('Eater'), local('Eater-Regular'), url(${Eater_Regular}), format('truetype');
        }
      `,
    },
  },
});

// Palette theme
const AppThemePalette = createTheme(AppThemeComponents, {
  palette: {
    primary: {
      light: palettePrimaryLight,
      main: palettePrimaryMain,
      dark: palettePrimaryDark,
    },
    secondary: {
      main: paletteSecondaryMain,
      dark: paletteSecondaryDark,
    },
    text: {
      primary: paletteTextPrimary,
      secondary: paletteTextSecondary,
    },
    common: {
      purple: {
        main: paletteCustomPurpleMain,
        dark: paletteCustomPurpleDark,
      },
      red: {
        main: paletteCustomRedMain,
        dark: paletteCustomRedDark,
      },
    },
  },
});

export const AppTheme = createTheme(AppThemePalette, {});
