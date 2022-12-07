import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/system";

type Props = {};

const ShoppingBasketButton = (props: Props) => {
  return (
    <Grid>
      <ButtonBase
        sx={{
          borderRadius: "10px",
          width: "10.5rem",
          height: "2.7rem",
          bgcolor: "white",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ShoppingBagOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography color="primary.main">سبد خرید</Typography>
        <Box
          sx={{
            background: "rgb(242,247,255)",
            borderRadius: "50%",
            width: "1.5rem",
            height: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "primary.main",
          }}
          component="span"
        >
          1
        </Box>
      </ButtonBase>
    </Grid>
  );
};

export default ShoppingBasketButton;
