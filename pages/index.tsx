import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../Theme/Theme";
import SecondarySwiperCard from "../components/SecondarySwiper/SecondarySwiperCard/SecondarySwiperCard";



export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <Grid>
                <CssBaseLine/>
                <SecondarySwiperCard/>
            </Grid>
        </ThemeProvider>
    );
}
