import { Grid } from "@mui/material"
import FilterCategory from "./FilterCategory/FilterCategory"
import FilterPriceCategory from "./FilterPriceCategory/FilterPriceCategory"

type Props = {}

const SidebarCategoryPage = (props: Props) => {
    return (
        <Grid>
           <FilterCategory/>
           <FilterPriceCategory/>
        </Grid>
    )
}

export default SidebarCategoryPage