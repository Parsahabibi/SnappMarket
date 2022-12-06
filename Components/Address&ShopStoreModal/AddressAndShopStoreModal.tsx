import { Grid } from "@mui/material";
import React from "react";

type Props = {};

const AddressAndShopStoreModal = (props: Props) => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Grid sx={{ display: "flex" }}>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Grid></Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default AddressAndShopStoreModal;
