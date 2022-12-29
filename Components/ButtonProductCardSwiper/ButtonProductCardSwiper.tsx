import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
type Props = {
  title: string;
  icon: any;
  bgcolor: string;
  value: string;
  left:string;
  bottom:string
};

const ButtonProductCardSwiper = ({ title, icon, bgcolor, value,left,bottom }: Props) => {
  return (
    <Grid>
      <Button
        variant="outlined"
        sx={{
          color: bgcolor,
          cursor: "pointer",
          fontSize: "1.2rem",

          lineHeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          letterSpacing: "normal",
        }}
      >
        {title} {icon} {value}
      </Button>
    </Grid>
  );
};

export default ButtonProductCardSwiper;
