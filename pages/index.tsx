import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../Theme/Theme";
import MobileCardSwiper from "../components/MobileProuductSwiper/MobileCardSwiper/MobileCardSwiper";


export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <Grid>
                <CssBaseLine/>
                <MobileCardSwiper/>
            </Grid>
        </ThemeProvider>
    );
}
