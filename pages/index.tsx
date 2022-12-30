import Grid from "@mui/material/Grid";
import DekstopHeader from "../Components/Header/DekstopHeader";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";
import CategoryBanner from "../Components/CategoryBanner/CategoryBanner";
import AuctionBanner from "../Components/Banner/AuctionBanner";
import HealthBanner from "../Components/Banner/HealthBanner";
import ShampooBanner from "../Components/Banner/ShampooBanner";
import ProductContainer from "../Components/ProductContainer/ProductContainer";
import DrinkBanner from "../Components/Banner/DrinkBanner";
import SecondarySwiperContainer from "../Components/SecondarySwiper/SecondarySwiperContainer/SecondarySwiperContainer";
import AboutUs from "../Components/AboutUs/AboutUs";
import DesktopFooter from "../Components/DesktopFooter/DesktopFooter";
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Box';
import {TypographyVariant} from "@mui/material";
import Header from "../Components/MobileMenuHeader/Header";
import Category from "../Components/CategotyMobileMenu/Category";
import SwiperBannerMobile from "../Components/SwiperBannerMobile/SwiperBannerMobile";
import MobileSwiper from "../Components/MobileSwiper/MobileSwiper";

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
    return (
        <Grid>
            {/* {loading ?
                <Grid sx={{display: 'flex',alignItems:'center' ,justifyContent:'center',width:'100%' , height:'100vh'}}>
                    <CircularProgress sx={{marginLeft:1}}/>
                    <Typography fontWeight={900} fontSize={20} color={'info.main'}>
                        {'در حال بارگذاری صفحه هستیم'}
                    </Typography>
                </Grid> : */}
                <>
                    <DekstopHeader/>
                    <Header/>
                    <AuctionBanner/>
                    <Category position={'relative'} display={'none'} bgcolor={'rgb(255,255,255)'} pb={3}ptop={1}/>
                    <Slider color={'primary.main'} title={'حراج اول ماه'}/>
                    <HealthBanner/>
                    <CategoryBanner/>
                    <MobileSwiper color={'common.white'} bgColor={'primary.main'} title={'زیبایی و سلامت'} display={'flex'}/>
                    <SwiperBannerMobile/>
                    <Slider color={'primary.main'} title={'زیبایی و سلامت'}/>
                    <ShampooBanner/>
                    <ProductContainer/>
                    <DrinkBanner/>
                    <ProductContainer/>
                    <ProductContainer/>
                    <ProductContainer/>
                    <HealthBanner/>
                    <ProductContainer/>
                    <ProductContainer/>
                    <SecondarySwiperContainer/>
                    <ProductContainer/>
                    <ProductContainer/>
                    <AboutUs/>
                    <DesktopFooter/>
                </>
            {/* } */}
        </Grid>
    );
}
