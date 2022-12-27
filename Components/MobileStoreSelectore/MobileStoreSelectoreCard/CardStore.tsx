import React from "react";
import { Grid, Typography } from "@mui/material";
import ButtonProductCardSwiper from "../../ButtonProductCardSwiper/ButtonProductCardSwiper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type Props = {
  title: string;
  dis: string;
  top: string;
  bgcolor: string;
};

const CardStore = ({ title, dis, top, bgcolor }: Props) => {
  return (
    <Grid
      zIndex={-1000}
      position={"absolute"}
      top={top}
      right={"0px"}
      left={"0px"}
      mt={"-14rem"}
      height={130}
      bgcolor={"common.white"}
      borderRadius={"0.5rem"}
      boxShadow={1}
      display={"flex"}
      justifyContent={"space-between"}
      p={"6.6rem 1rem 1.6rem"}
    >
      <Grid display={"flex"} gap={2} flexDirection={"column"}>
        <Typography fontSize={"1.2rem"} fontWeight={500}>
          {title}
        </Typography>
        <Typography fontSize={"1.2rem"}>{dis}</Typography>
      </Grid>
      <ButtonProductCardSwiper
        title={"شروع خرید "}
        icon={<ArrowBackIosNewIcon />}
        bgcolor={bgcolor}
      />
    </Grid>
  );
};

export default CardStore;
