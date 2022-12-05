import Grid from "@mui/material/Grid";
import React from "react";
import Container from "@mui/system/Container";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import ProfileButtonHeader from "../ProfileButtonHeader/ProfileButtonHeader";
import AddressButton from "../AddressButton/AddressButton";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

type Props = {};

const DekstopHeader = (props: Props) => {
  return (
    <Grid
      flexDirection="column"
      display="flex"
      padding="20px"
      bgcolor="success.main"
      height="14rem"
    >
      <Container maxWidth="lg">
        <Grid
          p="10px"
          borderBottom="0.1rem solid rgba(255,255,255,0.16)"
          display="flex"
          justifyContent="space-between"
        >
          <Grid display="flex">
            <Grid ml="20px" color="white" width="57px">
              Snap Market!
            </Grid>
            <AddressButton />
          </Grid>
          <Grid display="flex" justifyContent="space-evenly">
            <ProfileButtonHeader />
            <ShoppingBasketButton />
          </Grid>
        </Grid>
        <Grid justifyContent="space-between" display="flex">
          <Grid>
            <Grid>bye</Grid>
          </Grid>
          <Grid>hello</Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default DekstopHeader;
