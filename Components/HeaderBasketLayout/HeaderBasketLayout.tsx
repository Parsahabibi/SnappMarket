import React from "react";
import BasketLayout from "../BasketModal/BasketLayout";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import Grid from "@mui/material/Grid";

type Props = {};

const HeaderBasketLayout = (props: Props) => {
  return (
    <Grid alignSelf="center">
      <ShoppingBasketButton />
      <BasketLayout />
    </Grid>
  );
};

export default HeaderBasketLayout;
