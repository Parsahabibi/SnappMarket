import {Box} from "@mui/system";
import SecondarySwiperCard from "../SecondarySwiperCard/SecondarySwiperCard";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const SecondarySwiperContainer = () => {

    return(
        <Grid display={"flex"} paddingY={"24px"} paddingX={"16px"} flexDirection={"column"}  width={"100%"} sx={{backgroundColor:"primary.main"}}>
            <Grid display={"flex"}
                  alignItems={"center"}
                  width={"90%"}
                  mr={4}
                  marginY={"12px"}
                  pr={"90px"}
                  sx={{color:"common.white"}}
                  justifyContent={"space-between"}>
                <Typography>
                    {"خرید بیشتر، پرداخت کمتر"}
                </Typography>
                <ArrowBackIosNewIcon sx={{cursor:"pointer" , fontSize:"14px"}}/>
            </Grid>
            <Grid display={"flex"} alignItems={"center"}>
                <Box paddingX={"20px"}>
                    <ArrowForwardIosIcon sx={{color:"common.white" , cursor:"pointer"}}/>
                </Box>
                   <SecondarySwiperCard/>
                <Box paddingX={"20px"}
                     display={"flex"}
                     alignItems={"center"}
                     justifyContent={"center"}
                     width={40}
                     height={40}
                     position={"absolute"}
                     left={60}
                     sx={{backgroundColor:"primary.main" , borderRadius:"50%" , boxShadow:"0 0 5px black"}}>
                    <ArrowBackIosNewIcon sx={{color:"common.white" , cursor:"pointer" , fontSize:"14px"}}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SecondarySwiperContainer;