import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

type Props = {
    title: string;
    icon: any;
    bgcolor: string;
    value: string;
    left: string;
    bottom: string;
    onClick:any
};

const ButtonProductCardSwiper = ({title, icon, bgcolor, value, left, bottom,onClick}: Props) => {
  
    return (
        <Grid>
            <Button
            onClick={onClick}
                variant="outlined"
                sx={{
                    color: bgcolor,
                    position: 'absolute',
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    width:'max-content',
                    left:left,
                    top:bottom,
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
