import Grid from "@mui/material/Grid";
import React from "react";
import Container from "@mui/system/Container";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import ProfileButtonHeader from "../ProfileButtonHeader/ProfileButtonHeader";
import AddressButton from "../AddressButton/AddressButton";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChangeShopStore from "../ChangeShopStore/ChangeShopStore";

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
            <Grid mt="20px" display="flex" flexDirection="column">
              <ChangeShopStore />
              <Typography>hello</Typography>
            </Grid>
          </Grid>
          <Grid
            p="20px"
            mt="20px"
            display="flex"
            justifyContent="flex-start"
            minWidth="300px"
          >
            <Grid display="flex" flexDirection="column">
              <Grid mb="10px" display="flex" justifyContent="flex-start">
                <Typography
                  variant="subtitle2"
                  color="white"
                  display="flex"
                  justifyContent="flex-end"
                >
                  <WatchLaterIcon sx={{ ml: "5px" }} />
                  تحویل از امروز ساعت 16:00
                </Typography>
              </Grid>
              <Grid display="flex" justifyContent="flex-end">
                <Typography
                  variant="subtitle2"
                  color="white"
                  display="flex"
                  justifyContent="flex-end"
                >
                  <LocalShippingIcon sx={{ ml: "5px" }} />
                  ارسال رایگان برای سفارش بالای 200000 تومان
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default DekstopHeader;
