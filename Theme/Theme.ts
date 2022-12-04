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
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: "primary.main",
            backgrond: "white",
            border: "0.01rem solid rgb(230,235,254)",
            borderRadius: "1.7rem",
            padding: "0 1.6rem",
            height: "3.4rem",
            fontWeight: "500",
            fontSize: "1.2rem",
            "&:hover": {
              background: "rgb(36,71,250)",
              color: "white",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            background: "rgb(7,188,32)",
            color: "white",
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "rgb(36,71,250)", //darkblue
      light: "rgb(51,123,240)", //lightblue
    },
    secondary: {
      main: "rgb(250,15,27)", //red
    },
    success: {
      main: "rgb(7,188,32)", //green
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
