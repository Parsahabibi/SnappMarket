import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Header from "../Components/MobileMenuHeader/Header";
import MobileMenuItem from "../Components/MobileMenuItem/MobileMenuItem";
import Category from "../Components/CategotyMobileMenu/Category";
import Account from "../Components/AccountMobileMenu/Account";
import Basket from "../Components/BasketMobileMenu/Basket";
import Search from "../Components/SearchMobileMenu/SearchPage";



export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine/>
        {/* <Header/>
        <MobileMenuItem page={'home'}/> */}
        <Category/>
        {/* <Account /> */}
        {/* <Basket /> */}
        {/* <Search /> */}
      </Grid>
    </ThemeProvider>
  );
}
