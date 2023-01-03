import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { cartSlice } from "../../redux/Slice/Slice";
import store from "../../redux/store";

type Props = {
  handleModalOpen: React.MouseEventHandler<HTMLButtonElement>;
};

const ShoppingBasketButton = ({ handleModalOpen }: Props) => {
  const cartItems = useSelector((state:any) => state.cart);
  const totalCount = cartItems.reduce((prev:any, p:any) => prev + p.count, 0);
  return (
    <Grid>
      <ButtonBase
        sx={{
          borderRadius: "5px",
          width: "14rem",
          height: "3.6rem",
          bgcolor: "white",
          display: "flex",
          justifyContent: "space-evenly",
        }}
        onClick={handleModalOpen}
      >
        <ShoppingBagOutlinedIcon
          sx={{ color: "primary.main", width: "2rem", height: "2rem" }}
        />
        <Typography color="primary.main" fontSize="1.3rem" fontWeight="500">
          سبد خرید
        </Typography>
        <Box
          sx={{
            background: "rgb(242,247,255)",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "primary.main",
          }}
          component="span"
        >
          {totalCount}
        </Box>
      </ButtonBase>
    </Grid>
  );
};

export default ShoppingBasketButton;
