import {Box} from "@mui/system";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import Image from "next/image";
import sample from "../../../assets/Images/image5.jpg"
import {Typography} from "@mui/material";

const MobileCardSwiper = () => {

    return(
        <Grid display={"flex"}
              flexDirection={"column"}
              bgcolor={"common.white"}
              position={"relative"}
              marginX={"8px"}
              paddingX={"10px"}
              paddingY={"8px"}
              sx={{width:"135px" , height:"240px" , borderRadius:"5px"}}>
            <Box width={32}
                 height={32}
                 left={8}
                 display={"flex"}
                 justifyContent={"center"}
                 position={"absolute"}
                 bgcolor={"common.white"}
                 border={"1px solid rgba(35, 71, 251, 0.24)"}
                 borderRadius={"50%"}
                 sx={{boxShadow:"0px 8px 10px 0px rgba( 0 , 0 , 0 , 0.16)"}}
                 alignItems={"center"} >
                <AddIcon sx={{color:"primary.main"}}/>
            </Box>
            <Grid display={"flex"}>
                <Image src={sample} alt={"productPic"} height={100}/>
            </Grid>
            <Grid display={"flex"}
                  flexDirection={"column"}
                  marginY={"3px"}>
                <Typography sx={{fontSize:"13px"}}>
                    {"شامپو بدن Honey & Milk بوتانیس"}
                </Typography>
                <Typography marginY={"5px"} sx={{fontSize:"12px" , color:"rgb(26, 28, 35)" , fontWeight:100}}>
                    {"400 میلی لیتر"}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MobileCardSwiper;