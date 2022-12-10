import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  direction: "rtl",
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
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
            fontSize: "1.8rem",
            borderRadius: "0.5rem",
            height: "4.5rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "0 1rem",
            "&:hover": {
              background: "rgb(5,139,24)",
            },
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
    warning: {
      main: "rgb(255 , 111 , 0)"
    }
  },
  typography: {
    fontFamily: "IranSans",
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
      fontSize: "1.2rem",
      color: "rgb(26, 28, 35)",
      fontWeight: "500",
    },
    caption: {
      fontSize: "1.4rem",
      color: "rgb(66,66,66)", //
    },
  },
});

export default Theme;
