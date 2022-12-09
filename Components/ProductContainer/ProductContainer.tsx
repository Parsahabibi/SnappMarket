// import React from 'react'
import { CardActionArea, Grid } from '@mui/material'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Image from 'next/image';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BorderTop, Info, Label } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Theme from "../../Theme/Theme"

import data from "./DataProductContainer"
import { imageTop } from "./DataProductContainer"
import { imageBottom } from "./DataProductContainer"


// import { Container } from '@mui/system';
import Link from 'next/link';

// import { Button, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import CardProductSwiper from '../CardProductSwiper/CardProductSwiper'
// import { data } from '../../../Data/dataProductSwiperV1/dataProductSwiperV1';
import backgroundImage from '../../../assets/Images/image15.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import React, { useCallback, useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container } from '@mui/system';

// import { makeStyles, useTheme, Typography } from '@material-ui/core'

interface Props {

}
//transition:"box-shadow 0.2s ease-in-out 0s"
const ProductContainer = (props: Props) => {

    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === data.length + 7 ? setPage(prev => 0) : setPage(prev => prev + 7)
    }, [page])
    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(data.length - 7) : setPage(prev => prev - 7)
    }, [page])
    useEffect(() => {
        swiperRef.current.swiper.slideTo(page)
    }, [page])

    return (
        <Container>
            <Grid border={0.05} borderColor={"info.main"} width={"auto"} sx={{ direction: "rtl" }}>
                <Grid container justifyContent={"space-between"} alignItems={"center"} bgcolor={'common.white'}>
                    <Grid pr={3}>
                        <Typography borderBottom={5} borderColor={"primary.main"} color="common.black" variant='subtitle1'>لبنیات</Typography>
                    </Grid>
                    <Grid pl={3} sx={{ display: 'flex' }}>
                        <Link href={"www.google.com"}><Typography color="primary.main">مشاهده بیشتر</Typography></Link>
                        <KeyboardArrowLeftIcon sx={{ color: "primary.main" }} />
                    </Grid>
                </Grid>
                <Grid borderTop={0.1} borderColor={"info.main"}>
                    <Swiper
                        ref={swiperRef}
                        breakpoints={{
                            720:{
                                slidesPerView:3.3
                            },
                            900:{
                                slidesPerView:4.5
                            }
                        }}
                    >
                        {page > 0 ?
                            <Grid position={'absolute'} top={'45%'} right={15} display={'flex'} zIndex={99} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} color={'common.white'}>
                                <Button sx={{ color: 'common.white' }} onClick={handlePrevSlide}><ArrowForwardIosIcon /></Button>
                            </Grid>
                            : ''}
                        <Grid container justifyContent={"center"} alignItems={"center"}>
                            {data.map(item => (
                                <SwiperSlide key={item.name}>
                                    <Card sx={{ borderRadius: '0px', height: "25rem"}}>
                                        <Grid container justifyContent={"center"} pt={2}>
                                            <Link href={"/"}>
                                                <Grid sx={{'&hover Image':{transition:"box-shadow 0.2s ease-in-out 0s" , transform: 'translateY(0px)'}}}>
                                                    <Image src={item.image} alt={item.name} width={163} height={163} />
                                                </Grid>
                                            </Link>
                                        </Grid>
                                        <CardContent>
                                            <Grid mb={3} pb={2.5}>
                                                <Typography sx={{ maxHeight: "15px" }}>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid mb={1.5} container alignItems={"center"}>
                                                <Typography variant="body2">
                                                    {item.description}
                                                </Typography>
                                            </Grid>
                                            <Grid container alignItems={"baseline"} mr={0.25}>
                                                <Grid ml={1} p={1} container justifyContent={"center"} alignItems={"center"} sx={{ width: 30, height: 25, color: "common.white", borderRadius: "5px", textAlign: "center" }}>
                                                    {
                                                        item.Discount <= 10 ? <Typography p={0.5} border={1} borderRadius={1} borderColor={"secondary.main"} color="secondary.main">{item.Discount}%</Typography> : <Typography p={0.5} borderRadius={1} bgcolor={"secondary.main"}>{item.Discount}%</Typography>//null??
                                                    }
                                                </Grid>
                                                <Grid sx={{ textDecoration: "line-through" }}>{item.oprice}</Grid>
                                            </Grid>
                                            <Grid container alignItems={"flex-end"} justifyContent={"space-between"}>
                                                <Typography sx={{ fontSize: "15px" }}>{item.price}تومان</Typography>
                                                <Grid >
                                                    <Button sx={{ height: "34px", fontSize: "12px", padding: "0 16px" }} variant='outlined'>افزودن به سبد</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Grid>
                        <SwiperSlide>
                            <Card sx={{ display: "flex", alignItems: "center", height: "400px", width: "auto" }}>
                                <Grid container justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Grid container flexDirection={'row'} flexWrap={'nowrap'} sx={{ opacity: '0.3' }} justifyContent={"space-between"} borderBottom={0.5}>
                                        {
                                            imageTop.map(item =>
                                                <Grid key={item.id} sx={{ display: "flex", mr: "10px", borderLeft: "0.5px solid rgb(66,66,66)", mb: "20px" }}>
                                                    <Image style={{ marginLeft: "15px" }} width={55} height={55} src={item.image} alt={"image1"} />
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                    <CardContent sx={{ paddingBottom: "50px", paddingTop: "50px" }}>
                                        <Link href={"www.google.com"}>
                                            <Grid container justifyContent={"center"} alignItems={"center"}>
                                                مشاهده همه
                                                <KeyboardArrowLeftIcon sx={{ color: "primary.main" }} />
                                            </Grid>
                                        </Link>
                                    </CardContent>
                                    <Grid container flexDirection={'row'} flexWrap={'nowrap'} sx={{ opacity: '0.3', BorderTop: "0.5px solid rgb(66,66,66)" }} justifyContent={"space-between"} borderTop={0.5}>
                                        {
                                            imageBottom.map(item =>
                                                <Grid key={item.id} sx={{ display: "flex", mr: "10px", borderLeft: "0.5px solid rgb(66,66,66)", mt: "20px" }}>
                                                    <Image style={{ marginLeft: "15px" }} width={55} height={55} src={item.image} alt={"image1"} />
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Card>
                        </SwiperSlide>
                        {page < 2 ?
                            <Grid position={'absolute'} top={'45%'} left={15} zIndex={99} display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} >
                                <Button sx={{ color: 'common.white' }} onClick={handleNextSlide}><ArrowBackIosIcon /></Button>
                            </Grid>
                            : ''}

                    </Swiper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default ProductContainer