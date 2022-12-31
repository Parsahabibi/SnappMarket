import { Grid } from "@mui/material";
import React from "react";
import DesktopFooter from "../DesktopFooter/DesktopFooter";
import MainCategoryPage from "./MainCategoryPage/MainCategoryPage";
import SidebarCategoryPage from "./SidebarCategoryPage/SidebarCategoryPage";

type Props = {};

const CategoryPage = (props: Props) => {
  return (
    <Grid>
      <Grid display={"flex"} justifyContent={"space-around"} item xs={12}>
        <Grid width={"25%"} position="relative">
          <SidebarCategoryPage />
        </Grid>
        <Grid width={"70%"}>
          <MainCategoryPage />
        </Grid>
      </Grid>
      <Grid>
        <DesktopFooter />
      </Grid>
    </Grid>
  );
};

export default CategoryPage;
