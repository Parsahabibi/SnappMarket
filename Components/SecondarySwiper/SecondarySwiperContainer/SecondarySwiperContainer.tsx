import {Box, Container} from "@mui/system";
import SecondarySwiperCard from "../SecondarySwiperCard/SecondarySwiperCard";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import SeeAllCard from "../SecondarySwiperCard/SeeAllCard";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SecondarySwiperContainer = () => {

    SwiperCore.use([Navigation, Pagination]);

    const RightSliderButton = {
        paddingX: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        position: "absolute",
        right: 200,
        backgroundColor: "primary.main",
        borderRadius: "50%",
        boxShadow: "0 0 5px rgba(1 , 1 , 1 , 0.2)",
        zIndex: "1000",
    }

    const LeftSliderButton = {
        paddingX: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        position: "absolute",
        left: 220,
        zIndex: 1000,
        backgroundColor: "primary.main",
        borderRadius: "50%",
        boxShadow: "0 0 5px rgba(1 , 1 , 1 , 0.2)",
    }

    return (
        <Container>
            <Grid display={{xs:'none',sm:'flex'}} marginY={3}
                  paddingY={3}
                  justifyContent={"center"}
                  paddingX={2}
                  flexDirection={"column"}
                  width={"100%"}
                  sx={{backgroundColor: "primary.main", borderRadius: "15px"}}>
                <Grid display={"flex"}
                      alignItems={"center"}
                      paddingX={3}
                      pb={1}
                      width={"100%"}
                      sx={{color: "common.white"}}
                      justifyContent={"space-between"}>
                    <Typography variant={"caption"} color={"common.white"}>
                        {"خرید بیشتر، پرداخت کمتر"}
                    </Typography>
                    <ArrowBackIosNewIcon sx={{cursor: "pointer", fontSize: "14px"}}/>
                </Grid>
                <Grid display={"flex"} alignItems={"center"}>
                    {/*
                    <Box sx={RightSliderButton}>
                        <ArrowForwardIosIcon sx={{color: "common.white", cursor: "pointer", fontSize: "14px"}}/>
                    </Box>
                    */}

                    <Swiper breakpoints={{
                        720: {
                            slidesPerView: 0.1
                        },
                        900: {
                            slidesPerView: 0.9
                        }
                    }}>
                        <Grid display={"flex"}>
                            <SwiperSlide>
                                <Grid display={"flex"}>
                                    <SecondarySwiperCard/>
                                    <SecondarySwiperCard/>
                                    <SecondarySwiperCard/>
                                    <SecondarySwiperCard/>
                                </Grid>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Grid display={"flex"}>
                                    <SecondarySwiperCard/>
                                    <SecondarySwiperCard/>
                                    <SecondarySwiperCard/>
                                    <SeeAllCard/>
                                </Grid>
                            </SwiperSlide>
                        </Grid>
                    </Swiper>
                    {/*
                    <Box sx={LeftSliderButton}>
                        <ArrowBackIosNewIcon sx={{color: "common.white", cursor: "pointer", fontSize: "14px"}}/>
                    </Box>
                    */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default SecondarySwiperContainer;