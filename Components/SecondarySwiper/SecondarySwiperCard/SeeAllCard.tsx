import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";


const SeeAllCard = () => {

    return(
        <Grid display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              m={1}
              width={"150px"}
              bgcolor={"common.white"}
              sx={{borderRadius:2 , cursor:"pointer"}}
              height={"205px"}>
              <Typography sx={{color:"primary.main"}}>
                  {"مشاهده همه"}
              </Typography>
        </Grid>
    )
}


export default SeeAllCard;