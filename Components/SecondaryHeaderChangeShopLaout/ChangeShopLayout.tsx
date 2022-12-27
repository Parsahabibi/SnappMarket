import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Hyperstorelogo from "../../assets/Images/hyperlogo.jpg";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ChangeShopLayout = ({ onClick }: Props) => {
  return (
    <Grid
      onClick={onClick}
      display="flex"
      justifyContent="center"
      alignSelf="flex-start"
      //   whiteSpace="nowrap"
      //   overflow="hidden auto"
      //   width="100%"
      //   textOverflow="ellipsis"
      //   maxWidth="100px"
    >
      <Image
        alt=""
        style={{
          marginLeft: "10px",
          height: "30px",
          width: "30px",
          borderRadius: "50%",
        }}
        src={Hyperstorelogo}
      />

      <ButtonBase
        sx={{
          color: "white",
          borderRadius: "15px",

          alignSelf: "center",
          display: "flex",
        }}
      >
        <Typography
          alignSelf="center"
          marginLeft="10px"
          color="white"
          fontSize="1.2rem"
        >
          خرید از هایپراستار صبا
        </Typography>
        <KeyboardArrowDownOutlinedIcon sx={{ width: "25px", height: "25px" }} />
      </ButtonBase>
    </Grid>
  );
};

export default ChangeShopLayout;
