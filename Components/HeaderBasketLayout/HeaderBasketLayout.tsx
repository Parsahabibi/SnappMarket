import React, { useState } from "react";
import BasketLayout from "../BasketModal/BasketLayout";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import Grid from "@mui/material/Grid";

type Props = {};

const HeaderBasketLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(!open);
  const handleModalClose = () => setOpen(!open);
  
  return (
    <Grid alignSelf="center">
      <ShoppingBasketButton handleModalOpen={handleModalOpen} />
      <BasketLayout open={open} onClose={handleModalClose} />
    </Grid>
  );
};

export default HeaderBasketLayout;
