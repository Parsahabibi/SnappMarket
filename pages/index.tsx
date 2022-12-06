import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CategoryBanner from "../Components/CategoryBanner/CategoryBanner";



export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine/>
        <CategoryBanner/>
      </Grid>
    </ThemeProvider>
  );
}
