import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../Theme/Theme";
import SecondarySwiper from "../components/V2Swiper/SecondarySwiper";


export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <Grid>
                <CssBaseLine/>
                <SecondarySwiper/>
            </Grid>
        </ThemeProvider>
    );
}
