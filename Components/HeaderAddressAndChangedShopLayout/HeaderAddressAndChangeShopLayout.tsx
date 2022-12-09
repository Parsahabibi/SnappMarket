import React, { useState } from "react";
import AddressAndShopStoreModal from "../Address&ShopStoreModal/AddressAndShopStoreModal";
import ChangeShopStore from "../ChangeShopStore/ChangeShopStore";
import Grid from "@mui/material/Grid";

type Props = {};

const HeaderAddressAndChangeShopLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  return (
    <Grid display="flex">
      <ChangeShopStore onClick={handleModalOpen} />
      <AddressAndShopStoreModal open={open} onClose={handleModalClose} />
    </Grid>
  );
};

export default HeaderAddressAndChangeShopLayout;
