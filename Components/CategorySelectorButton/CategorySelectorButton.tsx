import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Typography } from "@mui/material";

type CategorySelectorProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CategorySelectorButton = ({ onClick }: CategorySelectorProps) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        borderRadius: "10px",
        width: "7rem",
        height: "2.4rem",
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        p: "5px",
        mt: "10px",
        ml: "20px",
      }}
    >
      <WidgetsOutlinedIcon
        sx={{ ml: "5px", width: "20px", color: "rgb(141,141,141)" }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          color: "rgb(141,141,141)",
          alignSelf: "center",
          fontSize: "0.9rem",
        }}
      >
        دسته بندی
      </Typography>
    </ButtonBase>
  );
};

export default CategorySelectorButton;
