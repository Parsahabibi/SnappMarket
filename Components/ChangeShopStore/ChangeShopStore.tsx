import React from "react";
import Hyperstorelogo from "../../assets/Images/hyperlogo.jpg";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type Props = {};

const ChangeShopStore = (props: Props) => {
  return (
    <Grid display="flex" justifyContent="center" alignItems="center">
      <Image
        alt=""
        style={{
          marginLeft: "10px",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
        }}
        src={Hyperstorelogo}
      />
      <Typography marginLeft="10px" color="white">
        خرید از هایپراستار صبا
      </Typography>
      <ButtonBase
        sx={{
          color: "primary.main",
          padding: "2px",
          bgcolor: "white",
          borderRadius: "15px",
        }}
      >
        <Typography variant="subtitle2" sx={{ fontSize: "0.7rem", mr: "3px" }}>
          {" "}
          تغییر فروشگاه
        </Typography>
        <KeyboardArrowDownOutlinedIcon />
      </ButtonBase>
    </Grid>
  );
};

export default ChangeShopStore;
