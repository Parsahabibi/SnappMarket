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
        minWidth: "10rem",
        ml: {sm:'0px',lg:'20px'},
        alignself: "center",
        background: "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ":hover": {
          color: "rgb(220, 220, 220)",
        },
      }}
      onClick={onClick}
    >
      <Person2OutlinedIcon
        sx={{
          ml: "5px",
          width: "3rem",
          height: "2.5rem",
          display: "flex",
        }}
      />
      <Typography
        sx={{
          fontSize: "1.5rem",
          alignSelf: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          
        }}
        maxWidth={{xs:'0rem' ,sm:'8rem',md:'10rem',lg:'8rem'}}
      >
        mohammad sohrabi
      </Typography>
    </ButtonBase>
  );
};

export default ProfileButtonHeader;
