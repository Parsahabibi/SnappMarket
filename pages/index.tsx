import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import MobileStoreSelectore from "../Components/MobileStoreSelectore/MobileStoreSelectore";
import MobileCategoryPage from "../Components/MobileCategoryPage/MobileCategoryPage";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";
import LoginModal from "../Components/LoginModal/LoginModal";


export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
          {/* <MobileCategoryPage/> */}
          {/* <Slider/> */}
          <LoginModal/>
      </Grid>
    </ThemeProvider>
  );
}
