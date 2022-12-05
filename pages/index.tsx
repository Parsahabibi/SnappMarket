import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "../Components/ProductSwiper Version1/Slider/Slider";
import { dataSlider } from "../Data/DataSlider/DataSlider";



export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine/>
        {dataSlider.map(item=>(
          <Slider color={item.color} title={item.title}/>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
