import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import { dataCategoryBannerCard } from "../../Data/DataCategoryBannerCard/DataCategoryBannerCard";
import { dataCard } from "../../Data/DataCategoryCard/DataCategoryCard";
import AccordionCardCategory from "./AccordionCardCategory/AccordionCardCategory";
import CategoryBannerCard from "./CategoryBannerCard/CategoryBannerCard";
import CategoryCard from "./CategoryCard/CategoryCard";

type Props = {};

const CategoryBanner = (props: Props) => {
  return (
    <Container>
      <Grid display={{ xs: "none", md: "flex" }} flexDirection={"column"}>
        <Grid item container display={"flex"} alignItems={"center"} mt={3.5}>
          <Grid
            item
            xs={3}
            sm={4}
            md={5}
            sx={{ borderTop: "0.1rem solid rgba(163, 163, 163, 0.25)" }}
          />
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {"دسته بندی ها"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={4}
            md={5}
            sx={{ borderTop: "0.1rem solid rgba(163, 163, 163, 0.25)" }}
          />
        </Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          mt={3.5}
          gap={{ md: "10px", lg: "0px" }}
        >
          {dataCategoryBannerCard.map((item) => (
            <CategoryBannerCard
              key={item.id}
              image={item.image}
              title={item.title}
              priceReduction={item.priceReduction}
            />
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          gap={{ xs: "13px", lg: "0px" }}
        >
          {dataCard.slice(0, 4).map((item) => (
            <Grid
              key={item.id}
              width={{ xs: "250px", sm: "280px" }}
              height={"88px"}
              my={3}
            >
              <CategoryCard
                title={item.title}
                image={item.image}
                priceReduction={item.priceReduction}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          gap={{ xs: "18px", lg: "0px" }}
        >
          <AccordionCardCategory />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryBanner;
