import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  image: any | string;
  title: string;
  priceReduction: string;
};

const CategoryBannerCard = ({ image, title, priceReduction }: Props) => {
  return (
    <Grid sx={{ cursor: "pointer", width: "33.33%" }}>
      <Grid
        item
        container
        xs={11}
        md={12}
        sx={{
          border: " 0.1rem solid rgba(255, 203, 150, 0.43)",
          borderRadius: "0.5rem",
        }}
        bgcolor={"rgba(255, 203, 150, 0.27)"}
        display={"flex"}
        width={{ lg: "32.5rem" }}
        height={{ lg: "17.7rem" }}
      >
        <Grid
          item
          xs={12}
          md={4}
          height={{ xs: "100px", sm: "240px", md: "120px" }}
          width={{ xs: "100px", sm: "245px", md: "10rem" }}
        >
          <Image
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          display={{ xs: "none", md: "flex" }}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          paddingRight={{ md: "1.5rem", lg: "1rem" }}
        >
          <Typography pb={3}>{title}</Typography>
          <Typography
            sx={{ transform: "skew(-15deg)" }}
            bgcolor={"success.main"}
            color={"common.white"}
            p={"4px 10px "}
            borderRadius={1}
          >
            {priceReduction}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ArrowBackIosNewIcon />
        </Grid>
      </Grid>
      <Grid
        display={{ xs: "flex", md: "none" }}
        justifyContent={"center"}
        pt={2}
      >
        <Typography>{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default CategoryBannerCard;
