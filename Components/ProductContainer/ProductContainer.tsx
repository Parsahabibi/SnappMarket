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
import { Info, Label } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Theme from "../../Theme/Theme"
import data from "./DataProductContainer"
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



interface Props {

}

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
                <Grid border={0.5} borderColor={"info.main"} width={"auto"} sx={{ direction: "rtl" , borderRadius:"5px" }}>
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
                            slidesPerView={3.75}
                            ref={swiperRef}
                        >
                            {page > 0 ?
                                <Grid position={'absolute'} top={'45%'} right={15} display={'flex'} zIndex={99} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} color={'common.white'}>
                                    <Button sx={{ color: 'common.white' }} onClick={handlePrevSlide}><ArrowForwardIosIcon /></Button>
                                </Grid>
                                : ''}
                            <Grid container justifyContent={"center"} alignItems={"center"}>
                                {data.map(item => (
                                    <SwiperSlide key={item.name}>
                                        <Card sx={{ borderRadius: '0px', height: "25rem" }}>
                                            <Grid container justifyContent={"center"} pt={2}>
                                                <Link href={"/"}>
                                                    <Grid>
                                                        <Image src={item.image} alt={item.name} width={163} height={163} />
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <CardContent>
                                                <Grid mb={3}>
                                                    <Typography>
                                                        {item.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid mb={1.5} container alignItems={"center"}>
                                                    <Typography variant="body2">
                                                        {item.description}
                                                    </Typography>
                                                </Grid>
                                                <Grid container alignItems={"baseline"}>
                                                    <Grid ml={1} p={1} container justifyContent={"center"} alignItems={"center"} sx={{ width: 30, height: 30, color: "common.white", borderRadius: "5px", textAlign: "center" }}>
                                                        {
                                                            item.Discount <= 10 ? <Typography p={0.5} border={1} borderRadius={1} borderColor={"secondary.main"} color="secondary.main">{item.Discount}%</Typography> : <Typography p={0.5} borderRadius={1} bgcolor={"secondary.main"}>{item.Discount}%</Typography>//null??
                                                        }
                                                    </Grid>
                                                    <Grid sx={{ textDecoration: "line-through" }}>{item.oprice}</Grid>
                                                </Grid>
                                                <Grid container alignItems={"flex-end"} justifyContent={"space-between"}>
                                                    <Typography>{item.price}تومان</Typography>
                                                    <Grid mr={3}>
                                                        <Button variant='outlined'>افزودن به سبد </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Grid>
                            <SwiperSlide>
                                <Card sx={{ display: "flex", alignItems: "center", height: "400px", width: "auto" }}>
                                    <Grid container justifyContent={"center"} alignItems={"center"}>
                                        {/* <Grid>
                                            {
                                                data.map(item=>
                                                    <Grid key={item.name} >
                                                        ({item.id <4 ? <Image src={item.image} alt={item.name} width={163} height={163} /> : ""})
                                                    </Grid>
                                                    )
                                            }
                                        </Grid> */}
                                        <CardContent>
                                            <Link href={"www.google.com"}>
                                                <Grid container justifyContent={"center"} alignItems={"center"}>
                                                    مشاهده همه
                                                    <KeyboardArrowLeftIcon sx={{ color: "primary.main" }} />
                                                </Grid>
                                            </Link>
                                        </CardContent>
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
