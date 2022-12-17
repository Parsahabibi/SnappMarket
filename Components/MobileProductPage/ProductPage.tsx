import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Image from "next/image";
import dataProductPage from "./DataProductPage";
import ButtonProductCardSwiper from "../ButtonProductCardSwiper/ButtonProductCardSwiper";
type Props = {};

const ProductPage = (props: Props) => {
  return (
    <Grid bgcolor={"common.white"}>
      <Grid container bgcolor={"common.white"} pt={2} pb={1.25} borderBottom={1} borderColor={"rgb(230, 230, 230)"}>
        <Grid pr={2}>
          <ArrowForwardIcon style={{ width: "24px", height: "24px" }} />
        </Grid>
        <Grid pr={9}>
          <Typography variant="h3">جزئیات محصول</Typography>
        </Grid>
      </Grid>
      <Grid>
        {
          dataProductPage.map(item =>
            <Grid key={item.id}>
              <Grid width={"100%"} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image style={{ width: "210px", height: "210px" }} src={item.image} alt={"mahsol"} />
              </Grid>
              <Grid container pr={3} pb={1} alignItems={"center"}>
                <Typography variant="subtitle1">{item.AProduct}</Typography>
                <KeyboardArrowLeftIcon />
                <Typography variant="subtitle1">{item.product}</Typography>
              </Grid>
              <Container>
                <Grid sx={{ minHeight: '12.5rem', bgcolor: "common.white", p: '1.6rem', borderRadius: "0.8rem" }}>
                  <Grid container justifyContent={"space-between"} alignItems={"baseline"}>
                    <Grid>
                      <Typography maxWidth={"192px"} variant="h2">{item.name}</Typography>
                    </Grid>
                    <Grid pr={1} pl={1} pt={0.5} pb={0.5} border={1} borderColor={"rgba(26, 28, 35, 0.12)"} borderRadius={'4rem'}>
                      <Typography variant="subtitle1">{item.lable}</Typography>
                    </Grid>
                  </Grid>
                  <Grid pb={1}>
                    <Typography variant="caption" color={"primary.main"}>{item.company}</Typography>
                  </Grid>
                  <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid>
                      <Grid>
                        <Grid container alignItems={"center"}>
                          <Grid bgcolor={"secondary.main"} p={0.5} borderRadius={1} color={"common.white"}>
                            <Typography>
                              %{item.discount}
                            </Typography>
                          </Grid>
                          <Typography fontSize={"1.1rem"} fontWeight={500} sx={{textDecoration:"line-through" , textDecorationColor:"rgb(117 , 117 , 117)" , pr:0.5}}>
                            {item.oprice}
                          </Typography>
                        </Grid>
                        <Grid container alignItems={"center"} pt={0.5}>
                          <Typography variant="caption" sx={{pl:0.5}}>
                            {item.price}
                          </Typography>
                          <Typography>تومان</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid >
                      <Button sx={{bgcolor:"primary.main" , borderRadius:"0.8rem"}}>
                        <Typography fontSize={"1.3rem"} fontWeight={600} sx={{pr:1.5 ,pl:1.5}} color={"common.white"}>افزودن به سبد</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  );
};

export default ProductPage;
