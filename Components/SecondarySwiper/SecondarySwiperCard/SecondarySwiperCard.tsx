import {Box} from "@mui/system";
import Grid from "@mui/material/Grid";
import {Button, Typography} from "@mui/material";
import Image from "next/image";
import sample from "../../../assets/Images/image6.jpg"

const SecondarySwiperCard = () => {

    return(
        <Grid
              m={"12px"}
              display={"flex"}
              sx={{backgroundColor:"common.white" , width:"330px" , height:"205px" , borderRadius:2 ,flexDirection:"column"}}>
           <Grid display={"flex"} p={"12px"} width={"100%"} justifyContent={"space-between"}>
               <Typography sx={{fontSize:"14px" , fontWeight:500}}>
                   {"پک آماده مصرف"}
               </Typography>
               <Typography sx={{fontSize:"12px" , fontWeight:400 , cursor:"pointer" , color:"primary.main"}}>
                   {"مشاهده کالاها"}
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
                  marginX={"12px"}
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
            <Grid display={"flex"}
                  mr={"12px"} mt={1}>
                <Box bgcolor={"secondary.main"}
                     p={0.1}
                     ml={1}
                     sx={{color:"common.white" , fontSize:"14px" , borderRadius:"3px"}}>
                    {"27%"}
                </Box>
                <del style={{fontSize:"14px"}}>
                    {"22,000"}
                </del>
            </Grid>
            <Grid display={"flex"}
                  justifyContent={"space-between"}
                  width={"90%"}
                  marginX={"12px"}
                  alignItems={"center"}>
                <Typography variant={"h2"}>
                    {"16,016 تومان"}
                </Typography>
                <Button variant={"outlined"}
                        sx={{height:"32px" , fontSize:"12px" , width:"max-content" , padding:"2px"}}>
                    {"افزودن"}
                </Button>
            </Grid>
        </Grid>
    )
}


export default SecondarySwiperCard;