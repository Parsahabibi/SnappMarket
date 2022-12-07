import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import SecondarySwiperContainer from "../components/SecondarySwiper/SecondarySwiperContainer/SecondarySwiperContainer";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
          <SecondarySwiperContainer/>
      </Grid>
    </ThemeProvider>
  );
}
