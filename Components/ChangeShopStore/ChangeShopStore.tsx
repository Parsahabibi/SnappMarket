import React from "react";
import Hyperstorelogo from "../../assets/Images/hyperlogo.jpg";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ChangeShopStore = ({ onClick }: Props) => {
  return (
    <Grid display="flex" justifyContent="center" alignSelf="flex-start">
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
      <Typography
        alignSelf="center"
        marginLeft="10px"
        color="white"
        fontSize="1.4rem"
      >
        خرید از هایپراستار صبا
      </Typography>
      <ButtonBase
        sx={{
          color: "primary.main",
          bgcolor: "white",
          borderRadius: "15px",
          height: "2.3rem",
          width: "8.9rem",
          alignSelf: "center",
        }}
        onClick={onClick}
      >
        <Typography variant="subtitle2" sx={{ fontSize: "1rem", mr: "3px" }}>
          تغییر فروشگاه
        </Typography>
        <KeyboardArrowDownOutlinedIcon />
      </ButtonBase>
    </Grid>
  );
};

export default ChangeShopStore;
