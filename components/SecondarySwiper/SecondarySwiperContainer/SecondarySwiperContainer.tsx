import {Box, padding} from "@mui/system";
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
        right: 40,
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
        left: 60,
        backgroundColor: "primary.main",
        borderRadius: "50%",
        boxShadow: "0 0 5px rgba(1 , 1 , 1 , 0.2)",
    }

    return (
        <Grid display={"flex"} paddingY={"24px"} paddingX={"16px"} flexDirection={"column"} width={"100%"}
              sx={{backgroundColor: "primary.main"}}>
            <Grid display={"flex"}
                  alignItems={"center"}
                  width={"90%"}
                  mr={4}
                  marginY={"12px"}
                  pr={"20px"}
                  sx={{color: "common.white"}}
                  justifyContent={"space-between"}>
                <Typography>
                    {"خرید بیشتر، پرداخت کمتر"}
                </Typography>
                <ArrowBackIosNewIcon sx={{cursor: "pointer", fontSize: "14px"}}/>
            </Grid>
            <Grid display={"flex"} alignItems={"center"}>
                <Box sx={RightSliderButton}>
                    <ArrowForwardIosIcon sx={{color: "common.white", cursor: "pointer", fontSize: "14px"}}/>
                </Box>

                <Swiper slidesPerView={1.1}>
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
                            <Grid display={"flex"} >
                                <SecondarySwiperCard/>
                                <SecondarySwiperCard/>
                                <SecondarySwiperCard/>
                                <SeeAllCard/>
                            </Grid>
                        </SwiperSlide>
                    </Grid>
                </Swiper>
                <Box sx={LeftSliderButton}>
                    <ArrowBackIosNewIcon sx={{color: "common.white", cursor: "pointer", fontSize: "14px"}}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SecondarySwiperContainer;