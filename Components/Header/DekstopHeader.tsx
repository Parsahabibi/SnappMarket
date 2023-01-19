import Grid from "@mui/material/Grid";
import React from "react";
import Container from "@mui/system/Container";
import ShoppingBasketButton from "../ShoppingBasketButton/ShoppingBasketButton";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChangeShopStore from "../ChangeShopStore/ChangeShopStore";
import SearchBar from "../SearchBar/SearchBar";
import BackgroundHeaderImage from "../../assets/Images/headerbg.jpg";
import HeaderCategoryLayout from "../HeaderCategoryLayout/HeaderCategoryLayout";
import HeaderAddressLayout from "../HeaderAddressLayout/HeaderAddressLayout";
import HeaderProfileLayout from "../HeaderProfileLAyout/HeaderProfileLayout";
import HeaderAddressAndChangeShopLayout from "../HeaderAddressAndChangedShopLayout/HeaderAddressAndChangeShopLayout";
import HeaderBasketLayout from "../HeaderBasketLayout/HeaderBasketLayout";

type Props = {};

const styled = {
  backgroundImage: `url('${BackgroundHeaderImage.src}')`,
  backgroundSize: "cover",
};

const DekstopHeader = (props: Props) => {
  return (
    <Grid
      flexDirection="column"
      display={{xs:'none',sm:'flex'}}
      padding="20px"
      height="22rem"
      style={styled}
      position={'fixed'}
      right={'0px'}
      top={'0px'}
      left={'0px'}
      zIndex={1000}
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
            <HeaderAddressLayout />
          </Grid>
          <Grid display="flex" justifyContent="space-evenly">
            <HeaderProfileLayout />
            <HeaderBasketLayout />
          </Grid>
        </Grid>
        <Grid justifyContent="space-between" display="flex">
          <Grid>
            <Grid mt="20px" display="flex" flexDirection="column">
              <HeaderAddressAndChangeShopLayout />
              <Grid
                display="flex"
                mt="10px"
                position="relative"
                alignSelf="center"
              >
                <Grid mt="10px">
                  <HeaderCategoryLayout />
                </Grid>

                <Grid alignSelf="center" width={{ xs: "25rem", md: "33rem" }}>
                  <SearchBar />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            p="20px"
            mt="20px"
            display="flex"
            justifyContent="flex-start"
            minWidth="300px"
          >
            <Grid display="flex" flexDirection="column" flexWrap="wrap">
              <Grid mb="10px" display="flex" justifyContent="flex-start">
                <Typography
                  variant="subtitle2"
                  color="white"
                  display="flex"
                  justifyContent="flex-end"
                  fontSize="1.2rem"
                >
                  <WatchLaterIcon
                    sx={{ ml: "5px", width: "2rem", height: "2rem" }}
                  />
                  تحویل از امروز ساعت 16:00
                </Typography>
              </Grid>
              <Grid display="flex" justifyContent="flex-end" mt="5px">
                <Typography
                  variant="subtitle2"
                  color="white"
                  display="flex"
                  justifyContent="flex-end"
                  fontSize="1.2rem"
                >
                  <LocalShippingIcon
                    sx={{ ml: "5px", width: "2rem", height: "2rem" }}
                  />
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
