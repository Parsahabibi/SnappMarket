import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";


const SeeAllCard = () => {

    return(
        <Grid display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              m={"12px"}
              width={"150px"}
              bgcolor={"common.white"}
              sx={{borderRadius:"5px"}}
              height={"220px"}>
              <Typography sx={{color:"primary.main"}}>
                  {"مشاهده همه"}
              </Typography>
        </Grid>
    )
}


export default SeeAllCard;