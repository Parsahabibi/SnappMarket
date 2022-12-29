import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwiperCore, {Navigation, Pagination, Virtual} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {useRef} from "react";
import cheese from '../../assets/Images/cheese.jpg'
import AddIcon from '@mui/icons-material/Add';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Container} from '@mui/system';
import Link from 'next/link';
import CardProductSwiper from "../ProductSwiper Version1/CardProductSwiper/CardProductSwiper";
import {dataMobileCardCategory} from "../../Data/DataMobileCategoryCard/DataMobileCategoryCard";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

const MobileSwiper = () => {

    const swiperRef = useRef<any>(null)
    return (
        <Grid flexDirection={"column"} display={{xs: "flex", sm: "none", lg: "none"}} padding={1}
              sx={{backgroundColor: 'primary.main'}}>
            <Grid display={{xs: "flex", sm: "none", lg: "none"}} alignItems={"center"}>
                <Typography color={'common.white'} fontSize={14}>
                    {'حراج اول ماه'}
                </Typography>
                <Box display={"flex"}
                     alignItems={"center"}
                     justifyContent={"center"}
                     marginX={1}
                     color={'primary.main'}
                     borderRadius={1} sx={{width: 90, height: 25, backgroundColor: 'common.white'}}>
                    <Typography fontSize={16}>
                        {'11:49:10'}
                    </Typography>
                    <AccessTimeIcon sx={{marginX: 0, width: 35, height: 20}}/>
                </Box>
            </Grid>
            <Grid>
                <Swiper
                    breakpoints={{
                        320:{
                            slidesPerView:0.5
                        },
                        720: {
                            slidesPerView: 3
                        },
                        900: {
                            slidesPerView: 3.5
                        },
                        1024: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 4.8
                        },
                        1440: {
                            slidesPerView: 4.8
                        },
                    }}
                    ref={swiperRef}
                    virtual
                >


                    {dataMobileCardCategory.slice(7, 15).map(item => (
                        <SwiperSlide key={item.id} style={{maxWidth: '30px'}}>
                            <Grid ml={'1rem'}>
                                <CardProductSwiper bottom={'85%'} left={'-10%'} heightImage={100} widthImage={100}
                                                   titleBtn={<AddIcon/>} width='130px' title={item.title}
                                                   image={item.image} Price={item.Price} Weight={item.Weight}
                                                   priceReduction={item.priceReduction} Discount={item.Discount}
                                                   id={0}/>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
        </Grid>
    )
}


export default MobileSwiper;