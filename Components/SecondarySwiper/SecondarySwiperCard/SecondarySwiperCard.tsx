import {Box} from "@mui/system";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Image from "next/image";
import sample from "../../../assets/Images/image6.jpg"

const SecondarySwiperCard = () => {

    return(
        <Grid border={1}
              m={"12px"}
              display={"flex"}
              sx={{backgroundColor:"common.white" , width:"310px" , height:"205px" , borderRadius:"5px" ,flexDirection:"column"}}>
           <Grid display={"flex"} p={"12px"} width={"100%"} justifyContent={"space-between"}>
               <Typography sx={{fontSize:"14px" , fontWeight:500}}>
                   {"پک آماده مصرف"}
               </Typography>
               <Typography sx={{fontSize:"12px" , fontWeight:400 , cursor:"pointer" , color:"primary.main"}}>
                   {"مشاهده همه"}
               </Typography>
           </Grid>
            <Grid marginY={"3px"} display={"flex"} position={"relative"} width={"100%"}>
                <Box mr={"12px"}
                     display={"flex"}
                     border={"1px solid rgb(202, 211, 254)"}
                     width={"60px"} height={"60px"}
                     alignItems={"center"}
                     bgcolor={"common.white"}
                     justifyContent={"center"}
                     sx={{borderRadius:"50%"}}>
                    <Image src={sample} alt={"product"} width={55} style={{borderRadius:"50%"}}/>
                </Box>
                <Box position={"absolute"}
                     right={"55px"}
                     display={"flex"}
                     border={"1px solid rgb(202, 211, 254)"}
                     width={"60px"} height={"60px"}
                     alignItems={"center"}
                     justifyContent={"center"}
                     bgcolor={"common.white"}
                     sx={{borderRadius:"50%"}}>
                    <Image src={sample} alt={"product"} width={55} style={{borderRadius:"50%"}}/>
                </Box>
            </Grid>
            <Grid marginY={"5px"}
                  display={"flex"}
                  alignItems={"center"}
                  width={"100%"}>
                <Typography ml={1} sx={{color:"secondary.main" , fontSize:"12px"}}>
                    {"20% تخفیف بیشتر"}
                </Typography>
                <Typography sx={{fontSize:"12px"}}>
                    {"با خرید این بسته"}
                </Typography>
            </Grid>
            <Grid display={"flex"}>
                <Box bgcolor={"secondary.main"}
                     p={0.1}
                     sx={{color:"common.white" , fontSize:"14px"}}>
                    {"27%"}
                </Box>
            </Grid>
        </Grid>
    )
}


export default SecondarySwiperCard;