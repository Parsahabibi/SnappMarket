import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Grid, Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

type Props = {};

const ProfileButtonHeader = (props: Props) => {
  return (
    <ButtonBase
      sx={{
        ml: "20px",
        alignself: "center",
        background: "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>ahmad </Typography>
      <Person2OutlinedIcon sx={{ ml: "5px" }} />
    </ButtonBase>
  );
};

export default ProfileButtonHeader;
