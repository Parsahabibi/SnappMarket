import React, { useState } from "react";
import BasketLayout from "../BasketModal/BasketLayout";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import Grid from "@mui/material/Grid";

type Props = {};

const HeaderBasketLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  return (
    <Grid alignSelf="center">
      <ShoppingBasketButton onClick={handleModalOpen} />
      <BasketLayout open={open} onClose={handleModalClose} />
    </Grid>
  );
};

export default HeaderBasketLayout;
