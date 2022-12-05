import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import Container from "@mui/system/Container";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import ProfileButtonHeader from "../ProfileButtonHeader/ProfileButtonHeader";

type Props = {};

const DekstopHeader = (props: Props) => {
  return (
    <Grid padding="20px" bgcolor="success.main" height="14rem">
      <Container maxWidth="lg">
        <Grid display="flex">
          <Grid display="flex" justifyContent="space-evenly">
            <ShoppingBasketButton />
            <ProfileButtonHeader />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default DekstopHeader;
