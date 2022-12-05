import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Grid from "@mui/material/Grid";
import { ButtonBase, Typography } from "@mui/material";
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
        <Typography color="primary.main">سبد خرید</Typography>
        <ShoppingBagOutlinedIcon sx={{ color: "primary.main" }} />
      </ButtonBase>
    </Grid>
  );
};

export default ShoppingBasketButton;
