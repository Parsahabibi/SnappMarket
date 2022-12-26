import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import image1 from "../../assets/Images/milkProductPage.jpg"
import image2 from "../../assets/Images/behind1.jpg"

import Image from "next/image";
import dataProductPage, { dataSwiperProductPage } from "./DataProductPage";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { borderColor } from "@mui/system";

type Props = {};

const MobileProductPage = (props: Props) => {

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

  const [image, setImage] = useState(image1)
  //state1

  return (
    <Grid bgcolor={"common.white"}>
      <Grid sx={{ display: "flex", alignItems: "center" }} bgcolor={"common.white"} pt={2} pb={1.25} mb={4} borderBottom={1} borderColor={"rgb(230, 230, 230)"}>
        <Grid pr={2}>
          <ArrowForwardIcon style={{ width: "24px", height: "24px" }} />
        </Grid>
        <Grid pr={"24%"}>
          <Typography variant="h3">جزئیات محصول</Typography>
        </Grid>
      </Grid>
      <Grid>
        {
          dataProductPage.map(item =>
            <Grid key={item.id}>
              <Grid position={"relative"} width={"100%"} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Swiper
                  ref={swiperRef}
                  breakpoints={{
                    0: {
                      slidesPerView: 1
                    },
                    375: {
                      slidesPerView: 1
                    }
                  }}
                >
                  <Grid container alignItems={"center"} justifyContent={"center"}>
                    {
                      dataSwiperProductPage.map(
                        item =>
                          <SwiperSlide style={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={item.id}>
                            <Image style={{ width: "210px", height: "210px" }} src={item.image || image} alt={"slider"} />
                          </SwiperSlide>
                      )
                    }
                  </Grid>
                </Swiper>
                <Grid zIndex={99} position={"absolute"} bottom={0} left={15}>
                  <Button style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", cursor: "pointer", width: "72px", height: "64px", border: "0.5px solid rgba(35, 71, 251, 0.24)", borderRadius: "0.8rem" , marginBottom:"15px" }} onClick={handlePrevSlide}>
                    <Grid pt={1}>
                      <Image style={{ width: "48px", height: "48px" }} src={item.image} alt={'small'} />
                    </Grid>
                  </Button>
                  <Button style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", cursor: "pointer", width: "72px", height: "64px", border: "0.5px solid rgba(35, 71, 251, 0.24)", borderRadius: "0.8rem" }} onClick={handleNextSlide}>
                    <Grid pt={1}>
                      <Image style={{ width: "48px", height: "48px" }} src={item.image2} alt={'small'} />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
              <Grid container pr={3} pb={1} alignItems={"center"}>
                <Typography variant="subtitle1">{item.AProduct}</Typography>
                <KeyboardArrowLeftIcon />
                <Typography variant="subtitle1">{item.product}</Typography>
              </Grid>
              <Container>
                <Box sx={{ minHeight: '12.5rem', bgcolor: "common.white", p: '1.6rem', borderRadius: "0.8rem", boxShadow: 1 }}>
                  <Grid container justifyContent={"space-between"} alignItems={"baseline"}>
                    <Grid>
                      <Typography maxWidth={"192px"} variant="h2">{item.name}</Typography>
                    </Grid>
                    <Grid pr={1} pl={1} pt={0.5} pb={0.5} border={1} borderColor={"rgba(26, 28, 35, 0.12)"} borderRadius={'4rem'}>
                      <Typography variant="subtitle1">{item.lable}</Typography>
                    </Grid>
                  </Grid>
                  <Grid pb={1}>
                    <Typography variant="caption" color={"primary.main"}>{item.company}</Typography>
                  </Grid>
                  <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid>
                      <Grid>
                        <Grid container alignItems={"center"}>
                          <Grid bgcolor={"secondary.main"} sx={{ display: "flex", alignItems: "center" }} p={0.5} borderRadius={1} color={"common.white"}>
                            <Typography>
                              %{item.discount}
                            </Typography>
                          </Grid>
                          <Typography fontSize={"1.1rem"} fontWeight={500} sx={{ textDecoration: "line-through", textDecorationColor: "rgb(117 , 117 , 117)", pr: 0.5 }}>
                            {item.oprice}
                          </Typography>
                        </Grid>
                        <Grid container alignItems={"center"} pt={0.5}>
                          <Typography variant="caption" sx={{ pl: 0.5 }}>
                            {item.price}
                          </Typography>
                          <Typography>تومان</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid >
                      <Button sx={{ bgcolor: "primary.main", borderRadius: "0.8rem" }}>
                        <Typography fontSize={"1.3rem"} fontWeight={600} sx={{ pr: 1.5, pl: 1.5 }} color={"common.white"}>افزودن به سبد</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  );
};

export default MobileProductPage;
