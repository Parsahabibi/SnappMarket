import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
        <Grid height="30px" bgcolor="secondary.main">
          <Typography variant="h3">Hello World</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
