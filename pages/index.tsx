import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../Theme/Theme";
import DesktopHeader from "../Components/Header/DekstopHeader";
import DesktopFooter from "../Components/DesktopFooter/DesktopFooter";
import AboutUs from "../Components/AboutUs/AboutUs";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";
import CategoryBanner from "../Components/CategoryBanner/CategoryBanner";
import ProductContainer from "../Components/ProductContainer/ProductContainer";
import SecondarySwiperContainer from "../Components/SecondarySwiper/SecondarySwiperContainer/SecondarySwiperContainer";



export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <>
                <CssBaseLine/>
                <DesktopHeader/>
                <Slider title={'تخفیف ویژه'} color={'rgb(250,15,27)'}/>
                <CategoryBanner/>
                <ProductContainer/>
                <Slider title={'زیبایی و سلامت'} color={'rgb(36,71,250)'}/>
                <SecondarySwiperContainer/>
                <AboutUs/>
                <DesktopFooter/>
            </>
        </ThemeProvider>
    );
}
