import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import MobileStoreSelectore from "../Components/MobileStoreSelectore/MobileStoreSelectore";
import MobileCategoryPage from "../Components/MobileCategoryPage/MobileCategoryPage";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";


export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
          <MobileCategoryPage/>
          {/* <Slider/> */}
      </Grid>
    </ThemeProvider>
  );
}
