import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Grid, Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

type ProfileButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ProfileButtonHeader = ({ onClick }: ProfileButtonProps) => {
  return (
    <ButtonBase
      sx={{
        ml: "20px",
        alignself: "center",
        background: "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
        ":hover": {
          color: "rgb(220, 220, 220)",
        },
      }}
      onClick={onClick}
    >
      <Person2OutlinedIcon sx={{ ml: "5px" }} />
      <Typography>ahmad mohtadi</Typography>
    </ButtonBase>
  );
};

export default ProfileButtonHeader;
