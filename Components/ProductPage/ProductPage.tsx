import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, ButtonBase, Container, Grid, Modal, Typography } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import dataProductPage, { dataSwiperProductPage } from "../MobileProductPage/DataProductPage"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

type Props = {}

const ProductPage = (props: Props) => {

    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === dataSwiperProductPage.length ? setPage(prev => 0) : setPage(prev => prev + 1)
    }, [page])
    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(dataSwiperProductPage.length - 1) : setPage(prev => prev - 1)
    }, [page])
    useEffect(() => {
        swiperRef.current.swiper.slideTo(page)
    }, [page])

    return (
        <Grid bgcolor={"common.white"}>
            <Container>
                {
                    dataProductPage.map(
                        item =>
                            <Container key={item.id}>
                                <Grid container justifyContent={"space-between"}>
                                    <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <HomeOutlinedIcon style={{ width: "20px", height: "20px" }} />
                                        <Typography variant='caption'>اسنپ مارکت</Typography>
                                        <KeyboardArrowLeftOutlinedIcon />
                                        <Typography variant='caption'>
                                            {item.AProduct}
                                        </Typography>
                                        <KeyboardArrowLeftOutlinedIcon />
                                        <Typography variant='caption'>
                                            {item.product}
                                        </Typography>
                                        <KeyboardArrowLeftOutlinedIcon />
                                        <Typography variant='caption'>
                                            {item.product} {item.company}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <CloseOutlinedIcon style={{ width: "20px", height: "20px" }} />
                                    </Grid>
                                </Grid>
                                <Grid key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                                    <Grid>
                                        <Grid mt={4} mb={3} height={"100%"} width={"468px"} border={1} borderColor={"rgb(240,240,240)"} borderRadius={2} container alignItems={"center"} justifyContent={"center"}>
                                            <Swiper
                                                ref={swiperRef}
                                                slidesPerView={1}
                                            >
                                                {page === 0 ?
                                                    <Box sx={{ boxShadow: 2 }} position={'absolute'} top={'45%'} right={410} display={'flex'} zIndex={99} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'common.white'} borderRadius={'50%'} color={'primary.main'}>
                                                        <Button sx={{ color: 'info.light' }} onClick={handleNextSlide}><KeyboardArrowLeftIcon style={{ width: 24, height: 24 }} /></Button>
                                                    </Box>
                                                    : ''}
                                                <Grid container alignItems={"center"} justifyContent={"center"}>
                                                    {
                                                        dataSwiperProductPage.map(
                                                            item =>
                                                                <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={item.id}>
                                                                    <Zoom>
                                                                        <Image src={item.image} alt={"slider"} />
                                                                    </Zoom>
                                                                </SwiperSlide>
                                                        )
                                                    }
                                                </Grid>
                                                {page === 1 ?
                                                    <Box sx={{ boxShadow: 2 }} position={'absolute'} top={'45%'} left={410} zIndex={99} display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'common.white'} borderRadius={'50%'} >
                                                        <Button sx={{ color: 'info.light' }} onClick={handlePrevSlide}><KeyboardArrowRightIcon style={{ width: 24, height: 24 }} /></Button>
                                                    </Box>
                                                    : ''}
                                            </Swiper>
                                        </Grid>
                                        <Grid container alignItems={"center"} justifyContent={"center"} gap={7}>
                                            <Image style={{ width: "56px", height: "56px", border: "1px solid rgb(240,240,240)" }} src={item.image} alt={"small"} />
                                            <Image style={{ width: "56px", height: "56px", border: "1px solid rgb(240,240,240)" }} src={item.image2} alt={"small"} />
                                        </Grid>
                                    </Grid>
                                    <Grid width={"50rem"} pr={2} container flexDirection={"column"}>
                                        <Grid sx={{ borderBottom: "1px dashed black" }}>
                                            <Grid pt={3.5} pb={3}>
                                                <Typography variant='h1'>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid pb={2} container gap={1}>
                                                <Typography variant='h3'>
                                                    برند :
                                                </Typography>
                                                <Typography variant='h3' color={"primary.main"}>
                                                    {item.company}
                                                </Typography>
                                            </Grid>
                                            <Grid pb={2} container gap={1}>
                                                <Typography variant='h3'>
                                                    دسته بندی ها :
                                                </Typography>
                                                <Typography variant='h3' color={"primary.main"}>
                                                    {item.product}
                                                </Typography>
                                            </Grid>
                                            <Grid pb={2} container gap={1}>
                                                <Typography variant='h3'>فروشنده  : </Typography>
                                                <Typography variant='h3' color={"primary.main"}>هایپر استار </Typography>
                                            </Grid>
                                            <Link href={"/"}>
                                                <Grid mb={2} container alignItems={"center"} justifyContent={"center"} bgcolor={'rgb(250,250,250)'} width={50} height={30} borderRadius={"4rem"}>
                                                    <Typography variant='subtitle1'>
                                                        {item.lable}
                                                    </Typography>
                                                </Grid>
                                            </Link>
                                        </Grid>
                                        <Grid>
                                            <Grid pb={0.5} pt={1.5}>
                                                <Typography variant='h3'>
                                                    قیمت مصرف کننده :
                                                </Typography>
                                            </Grid>
                                            <Grid container flexDirection={"column"}>
                                                <Grid pr={"336px"} container alignItems={"center"}>
                                                    <Grid pb={0.5} container alignItems={"center"} gap={0.5}>
                                                        <Typography variant='h2' sx={{ textDecoration: "line-through" }}>
                                                            {item.oprice}تومان
                                                        </Typography>
                                                        <Grid borderRadius={"1.2rem"} pr={2} pl={2} bgcolor={"secondary.main"} color={"common.white"}>
                                                            <Typography color={"common.white"} variant='h2'>
                                                                {item.discount}%
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid pb={2} pr={"364px"} container gap={0.5}>
                                                    <Typography fontSize={"2.2rem"} fontWeight={500} color={"rgb(117, 117, 117)"}>
                                                        {item.price}
                                                    </Typography>
                                                    <Typography fontSize={"2.2rem"} fontWeight={500} color={"rgb(117, 117, 117)"}>تومان</Typography>
                                                </Grid>
                                                <Grid pr={"250px"}>
                                                    <ButtonBase sx={{
                                                        background: "rgb(51,123,240)",
                                                        color: "white",
                                                        fontSize: "1.8rem",
                                                        borderRadius: "0.5rem",
                                                        height: "4.5rem",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        width: "100%",
                                                        padding: "0 1rem",
                                                        ":hover": {
                                                            background: "rgb(36,70,245)"
                                                        }
                                                    }}>
                                                        <Typography variant='h3' color={"common.white"}>افزودن به سبد</Typography>
                                                    </ButtonBase>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                    )
                }
            </Container>
        </Grid>
    )
}

export default ProductPage