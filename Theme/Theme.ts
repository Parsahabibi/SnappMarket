import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(250,250,250)",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgb(36,71,250)", //darkblue
      light: "rgb(51,123,240)", //lightblue
    },
    secondary: {
      main: "rgb(250,15,27)", //green
    },
    success: {
      main: "rgb(7,188,32)", //red
    },
    info: {
      main: "rgba(48,53,75,0.4)", //discountPrice(grey)
    },
  },
  typography: {
    h1: {
      fontSize: "1.9rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.6rem",
      color: "rgb(41,41,41)",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.4rem",
      minHeight: "4.2rem",
      color: "rgb(48,53,75)",
      fontWeight: "normal",
      lineHeight: "normal",
    },
    subtitle1: {
      fontSize: "1.2rem", //card
      color: "rgb(97,100,117)",
    },
    subtitle2: {
      fontSize: "",
    },
    caption: {
      fontSize: "1.4rem",
      color: "rgb(66,66,66)", //
    },
  },
});

export default Theme;
