import { ButtonBase, Drawer, Grid, Typography, Button } from "@mui/material";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ProductBasketCard from "../ProductBasketCard/ProductBasketCard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

type Props = {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const BasketLayout = ({ onClose, open }: Props) => {
  return (
    <Drawer onClose={onClose} open={open}>
      <Grid sx={{ width: "40rem" }}>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
          borderBottom="1px solid rgb(244,244,244)"
        >
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.4rem"
          >
            سبد خرید من 4 کالا
            <ButtonBase
              sx={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                pl: "5px",
                color: "rgb(41, 41, 41)",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                mr: "5px",
                ":hover": {
                  bgcolor: "rgb(238,238,238)",
                },
              }}
            >
              <DeleteOutlinedIcon
                sx={{
                  height: "20px",
                  width: "20px",
                  mr: "5px",
                  alignSelf: "center",
                  display: "flex",
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid alignSelf="center" display="flex">
            <CloseOutlinedIcon
              sx={{
                cursor: "pointer",
                color: "primary.main",
                width: "25px",
                height: "25px",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          height="80px"
          borderBottom="1px solid rgb(244,244,244)"
          boxShadow="rgb(0 0 0 / 16%) 0px 0.15rem 0.3rem 0px"
        >
          <Grid alignSelf="center" color="success.main" fontSize="1.2rem">
            هزینه ارسال رایگان خواهد بود
          </Grid>
        </Grid>
        <Grid height="75rem">
          <Grid
            flexDirection="column"
            display="flex"
            flex="1 1 auto"
            height="100%"
            overflow="hidden auto"
          >
            <ProductBasketCard />
          </Grid>
        </Grid>
        <Grid
          p="10px"
          borderTop="1px solid rgb(244,244,244)"
          bgcolor="white"
          sx={{ position: "absolute", bottom: 2, width: "100%" }}
        >
          <Grid
            bgcolor="rgb(242,247,255)"
            height="3.6rem"
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb="5px"
          >
            <Typography sx={{ color: "primary.main", fontSize: "1.4rem" }}>
              23٬220 تومان سود خرید{" "}
            </Typography>
          </Grid>
          <Grid>
            <Grid>
              <Button variant="contained">
                نهایی کردن خرید
                <Grid
                  bgcolor="rgb(6,150,26)"
                  alignSelf="center"
                  mr="20px"
                  display="flex"
                  alignItems="center"
                  fontSize="1.4rem"
                  width="auto"
                  height="2.5rem"
                  position="absolute"
                  left="0.8rem"
                  p="5px"
                  borderRadius="5px"
                >
                  23,220 تومان
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default BasketLayout;
