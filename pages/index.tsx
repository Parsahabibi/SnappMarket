import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
        <Grid height="30px" bgcolor="secondary.main">
          <Typography variant="h2">Hello World</Typography>
          <Button variant="outlined">افزودن به سبد</Button>
          <Button variant="contained">نهایی کردن خرید</Button>
          <Grid color="primary.main"> dffsdafsdafdsa</Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
