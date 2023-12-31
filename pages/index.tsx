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
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Box';
import { TypographyVariant } from "@mui/material";
import Header from "../Components/MobileMenuHeader/Header";
import Category from "../Components/CategotyMobileMenu/Category";
import SwiperBannerMobile from "../Components/SwiperBannerMobile/SwiperBannerMobile";
import MobileSwiper from "../Components/MobileSwiper/MobileSwiper";
import EggBanner from "../Components/Banner/EggBanner";
import Banner from "../Components/Banner/Banner";
import { DataBaseDairy } from "../DataBase/CategoryDairy/CategoryDairy";
import { DataBaseDrink } from "../DataBase/CategoryDrink/CategoryDrink";
import { DataBaseCosmetics } from "../DataBase/CategoryCosmetics/CategoryCosmetics";
import { DataBaseAppliances } from "../DataBase/CategoryAppliances/Appliances";


export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
console.log(DataBaseCosmetics[0].cosmetics)
    return (
        <Grid>
            {loading ?
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
                    <CircularProgress sx={{ marginLeft: 1 }} />
                    <Typography fontWeight={900} fontSize={20} color={'info.main'}>
                        {'در حال بارگذاری صفحه هستیم'}
                    </Typography>
                </Grid> :
                <>
                    <DekstopHeader />
                    <Header />
                    <AuctionBanner />
                    <Slider color={'primary.main'} title={'حراج اول ماه'} x={0} y={10} Data={DataBaseDairy[0].Dairy} />
                    <MobileSwiper color={'common.white'} bgColor={'primary.main'} title={'نوشیدنی'} display={'flex'} display2={'none'} />
                    <Category position={'relative'} display={'none'} bgcolor={'rgb(255,255,255)'} pb={1} ptop={1} x={0} y={15} />
                    <HealthBanner />
                    <CategoryBanner />
                    <Slider color={'primary.main'} title={'زیبایی و سلامت'} x={11} y={20} Data={DataBaseCosmetics[0].cosmetics} />
                    <ShampooBanner />
                    <Grid display={{ xs: 'flex', sm: 'none' }} mt={-10}>
                        <ProductContainer title={"لبنیات"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={10} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"لبنیات"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={10} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"نوشیدنی "} dis={"همه"} x={40} y={40} Data={DataBaseDrink[0].Drinks} second={10} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"نوشیدنی "} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDrink[0].Drinks} second={10} first={0} />
                    </Grid>
                    <EggBanner />
                    <DrinkBanner />
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"آرایشی و بهداشتی"} dis={"همه"} x={40} y={40} Data={DataBaseCosmetics[0].cosmetics} second={10} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"دوغ"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={44} first={33} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"آرایشی و بهداشتی"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseCosmetics[0].cosmetics} second={10} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"دوغ"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={44} first={33} />
                    </Grid>
                    <SwiperBannerMobile />
                    <Banner />
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"آبمیوه طبیعی"} dis={"همه"} x={40} y={40} Data={DataBaseDrink[0].Drinks} second={32} first={0} />
                    </Grid>
                    {/* <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"مواد پروتئینی"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"آبمیوه طبیعی"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDrink[0].Drinks} second={32} first={23} />
                    </Grid>
                    {/* <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"مواد پروتئینی"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <SecondarySwiperContainer />
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"آرایشی و بهداشتی"} dis={"همه"} x={40} y={40} Data={DataBaseCosmetics[0].cosmetics} second={23} first={12} />
                    </Grid>
                    {/* <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"چاشنی و افزودنی"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"آرایشی و بهداشتی"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseCosmetics[0].cosmetics} second={23} first={12} />
                    </Grid>
                    {/* <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"چاشنی و افزودنی"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <MobileSwiper color={'common.white'} bgColor={'primary.main'} title={'خرید عمده'} display={'none'} display2={"flex"} />
                    <HealthBanner />
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"لوازم برقی و دیجیتال"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={21} first={11} />
                    </Grid>
                    {/* <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"کنسرو و غذای آماده"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"میوه و سبزیجات تازه"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid>
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"کنسرو و غذای آماده"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid>
                    <HealthBanner /> */}
                    {/* <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"کودک و نوزاد"} dis={"همه"} x={40} y={40} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <Grid display={{ xs: 'flex', sm: 'none' }}>
                        <ProductContainer title={"لوازم برقی و دیجیتال"} dis={"همه"} x={40} y={40} Data={DataBaseAppliances[0].appliances} second={10} first={0} />
                    </Grid>
                    {/* <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"کودک و نوزاد"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseDairy[0].Dairy} second={0} first={0} />
                    </Grid> */}
                    <Grid display={{ xs: 'none', sm: 'flex' }}>
                        <ProductContainer title={"لوازم برقی و دیجیتال"} dis={"مشاهده بیشتر"} x={85} y={85} Data={DataBaseAppliances[0].appliances} second={10} first={0} />
                    </Grid>
                    <AboutUs />
                    <DesktopFooter />
                </>
            }
        </Grid>
    );
}
