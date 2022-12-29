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

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
    return (
        <Grid>
            <SecondarySwiperContainer/>
        </Grid>
    );
}
