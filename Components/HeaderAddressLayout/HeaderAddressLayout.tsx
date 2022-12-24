import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import AddressAndShopStoreModal from "../Address&ShopStoreModal/AddressAndShopStoreModal";
import AddressButton from "../AddressButton/AddressButton";

type Props = {};

const HeaderAddressLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  return (
    <Grid position="relative">
      <AddressButton onClick={handleModalOpen} />
      <AddressAndShopStoreModal open={open} onClose={handleModalClose} />
    </Grid>
  );
};

export default HeaderAddressLayout;
