import { Grid } from "@mui/material";
import FilterCategory from "./FilterCategory/FilterCategory";
import FilterPriceCategory from "./FilterPriceCategory/FilterPriceCategory";

type Props = {};

const SidebarCategoryPage = (props: Props) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      position="sticky"
      top="24.5rem"
      height="auto"
    >
      <FilterCategory />
      <FilterPriceCategory />
    </Grid>
  );
};

export default SidebarCategoryPage;
