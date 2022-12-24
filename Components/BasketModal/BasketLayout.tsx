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
      <Grid sx={{ width: "35rem" }}>
        <Grid
          display="flex"
          justifyContent="space-between"
          p="10px"
          borderBottom="1px solid rgb(244,244,244)"
        >
          <Grid display="flex" alignItems="center" justifyContent="center">
            سبد خرید من 4کالا
            <ButtonBase
              sx={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                color: "rgb(41, 41, 41)",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                ":hover": {
                  bgcolor: "",
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
          <Grid>
            <CloseOutlinedIcon
              sx={{ cursor: "pointer", color: "primary.main" }}
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
          <Grid alignSelf="center" color="success.main">
            هزینه ارسال رایگان است
          </Grid>
        </Grid>
        <Grid height="41rem" overflow="hidden auto">
          <ProductBasketCard />
        </Grid>
        <Grid p="10px" borderTop="1px solid rgb(244,244,244)">
          <Grid
            bgcolor="rgb(242,247,255)"
            p="20px"
            height="3.6rem"
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            mb="5px"
          >
            <Typography sx={{ color: "primary.main" }}>
              23٬220 تومان سود خرید{" "}
            </Typography>
          </Grid>
          <Grid>
            <Button variant="contained">
              نهایی کردن خرید
              <Grid
                bgcolor="rgb(6,150,26)"
                alignSelf="center"
                mr="20px"
                fontSize="1.4rem"
                p="5px"
                borderRadius="5px"
              >
                23,220
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default BasketLayout;
