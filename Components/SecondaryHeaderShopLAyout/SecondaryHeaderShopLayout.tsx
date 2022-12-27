import { Grid } from "@mui/material";
import React from "react";
import AddressAndShopStoreModal from "../Address&ShopStoreModal/AddressAndShopStoreModal";
import ChangeShopStore from "../ChangeShopStore/ChangeShopStore";
import { useState } from "react";
import ChangeShopLayout from "../SecondaryHeaderChangeShopLaout/ChangeShopLayout";

type Props = {};

const SecondaryHeaderShopLayout = (props: Props) => {
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const handleModalOpen = () => setSecondaryOpen(true);
  const handleModalClose = () => setSecondaryOpen(false);
  return (
    <Grid height="20px">
      <ChangeShopLayout onClick={handleModalOpen} />
      <AddressAndShopStoreModal
        open={secondaryOpen}
        onClose={handleModalClose}
      />
    </Grid>
  );
};

export default SecondaryHeaderShopLayout;
