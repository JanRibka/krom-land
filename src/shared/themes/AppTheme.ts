import createTheme from '@mui/material/styles/createTheme';

// Colors
const palettePrimaryLight = "rgb(254, 205, 210)";
const palettePrimaryMain = "rgb(253, 126, 143)";
const palettePrimaryDark = "rgb(227, 113, 128)";
const paletteSecondaryMain = "rgb(238, 238, 238)";
const paletteSecondaryDark = "rgb(214, 214, 214)";
const paletteTextPrimary = "rgb(9, 0, 4)";
const paletteTextSecondary = "rgb(42, 42, 42)";
const paletteCustomThirdLight = "rgb(184, 103, 33)";
const paletteCustomThirdMain = "rgb(163, 91, 29)";
const paletteCustomThirdDark = "rgb(140, 78, 25)";

// Custom theme
// Colors
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    third: {
      light: string;
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
      third: {
        light: paletteCustomThirdLight,
        main: paletteCustomThirdMain,
        dark: paletteCustomThirdDark,
      },
    },
  },
});

export const AppTheme = createTheme(AppThemePalette, {});
