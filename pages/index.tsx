import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import DekstopHeader from "../Components/Header/DekstopHeader";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";
import CategoryBanner from "../Components/CategoryBanner/CategoryBanner";
import AuctionBanner from "../Components/Banner/AuctionBanner";
import HealthBanner from "../Components/Banner/HealthBanner";




export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
          <DekstopHeader/>
         <AuctionBanner/>
          <Slider color={'primary.main'} title={'حراج اول ماه'}/>
          <HealthBanner/>
          <CategoryBanner/>
      </Grid>
    </ThemeProvider>
  );
}
