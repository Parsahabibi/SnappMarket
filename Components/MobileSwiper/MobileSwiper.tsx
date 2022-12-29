import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container } from '@mui/system';
import Link from 'next/link';
import CardProductSwiper from "../ProductSwiper Version1/CardProductSwiper/CardProductSwiper";
import { dataMobileCardCategory } from "../../Data/DataMobileCategoryCard/DataMobileCategoryCard";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);
export interface Props {
    bgColor: string,
    title: string
}
const MobileSwiper = ({bgColor , title}:Props) => {
    
    const swiperRef = useRef<any>(null)
    return (
        <Grid flexDirection={"column"} display={{ xs: "flex", sm: "none", lg: "none" }} padding={'1.2rem 1rem 1.2rem 1.3rem'}
            sx={{ backgroundColor: bgColor }} borderRadius={'0.5rem'} mx={1.5}>
            <Grid display={{ xs: "flex", sm: "none", lg: "none" }} alignItems={"center"} justifyContent={'space-between'}>
                <Grid display={'flex'}>
                    <Typography
                        color={'common.white'}
                        fontSize={'1.4rem'}
                        fontWeight={500} m={'0px 0px 0px 0.8rem'}>
                        {title}
                    </Typography>
                    <Box display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        marginLeft={5}
                        color={'primary.main'}
                        borderRadius={1} sx={{ width: 90, height: 20, backgroundColor: 'common.white' }}>
                        <Typography fontSize={14.5} p={'0.2rem 0.4rem'} borderRadius={'0.6rem'} color={'rgb(67, 81, 250)'} pt={1}>
                            {'11:49:10'}
                        </Typography>
                        <AccessTimeIcon sx={{ marginX: 0, width: 35, height: 20 }} />
                    </Box>
                </Grid>
                <Typography color={'common.white'} fontSize={'1.4rem'} fontWeight={500} m={'0px 0px 0px 0.8rem'} display={'flex'} alignItems={'center'} pl={1}>
                    {'همه'}
                    <ArrowBackIosIcon />
                </Typography>
            </Grid>
            <Grid mt={2}>
                <Swiper
                    // slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.95
                        },
                        375: {
                            slidesPerView: 2.3
                        },
                        425: {
                            slidesPerView: 2.7
                        },
                    }}
                    ref={swiperRef}
                    virtual
                >


                    {dataMobileCardCategory.slice(7, 15).map(item => (
                        <SwiperSlide key={item.id} >
                            <Grid ml={'1rem'} style={{ maxWidth: '30px', display: 'flex' }} >
                                <CardProductSwiper  bottom={'5%'} left={'5%'} heightImage={100} widthImage={100}
                                    titleBtn={<AddIcon />} width='135px' title={item.title}
                                    image={item.image} Price={item.Price} Weight={item.Weight}
                                    priceReduction={item.priceReduction} Discount={item.Discount}
                                    id={0} />

                            </Grid>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Grid>
        </Grid>
    )
}


export default MobileSwiper;