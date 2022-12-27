import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BackgroundHeaderImage from "../../assets/Images/headerbg.jpg";
import SnappLogo from "../../assets/Images/SnappLogo.png";
import Image from "next/image";
import HeaderAddressLayout from "../HeaderAddressLayout/HeaderAddressLayout";
import HeaderAddressAndChangeShopLayout from "../HeaderAddressAndChangedShopLayout/HeaderAddressAndChangeShopLayout";
import SearchBar from "../SearchBar/SearchBar";
import HeaderProfileLayout from "../HeaderProfileLAyout/HeaderProfileLayout";
import HeaderBasketLayout from "../HeaderBasketLayout/HeaderBasketLayout";
import ChangeShopLayout from "../SecondaryHeaderChangeShopLaout/ChangeShopLayout";
import SecondaryHeaderShopLayout from "../SecondaryHeaderShopLAyout/SecondaryHeaderShopLayout";
import HeaderCategoryLayout from "../HeaderCategoryLayout/HeaderCategoryLayout";
import Typography from "@mui/material/Typography";

type Props = {};
const styled = {
  backgroundImage: `url('${BackgroundHeaderImage.src}')`,
  backgroundSize: "cover",
};
const styleLogo = {
  backgroundSize: "cover",
  color: "rgb(250,250,250)",
};

const SecondaryHeader = (props: Props) => {
  return (
    <Grid style={styled}>
      <Container>
        <Grid
          display="flex"
          height="6.8rem"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid sx={{ cursor: "pointer" }}>
            <Image alt="" src={SnappLogo} style={styleLogo} width={70} />
          </Grid>
          <Grid display={{ sm: "none", md: "flex" }}>
            <HeaderAddressLayout />
          </Grid>
          <Grid>
            <SecondaryHeaderShopLayout />
          </Grid>
          <Grid>
            <SearchBar />
          </Grid>
          <Grid>
            <HeaderProfileLayout />
          </Grid>
          <Grid>
            <HeaderBasketLayout />
          </Grid>
        </Grid>
      </Container>
      <Grid
        bgcolor={"white"}
        height="5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container>
          <Grid display="flex" justifyContent="space-between">
            <Grid display="flex" alignItems="center">
              <Grid display="flex" alignSelf="center">
                <HeaderCategoryLayout />
              </Grid>

              <Typography sx={{ cursor: "pointer", fontSize: "1.4rem" }}>
                تخفیف‌های امروز
              </Typography>
            </Grid>
            <Grid alignSelf="center" position="relative" left={30}>
              <Typography fontSize="1.4rem" sx={{ cursor: "pointer" }}>
                سوالات متداول
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SecondaryHeader;
