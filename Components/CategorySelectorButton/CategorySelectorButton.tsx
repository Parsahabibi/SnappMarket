import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Typography } from "@mui/material";

type CategorySelectorProps = {
  handleModalOpen: React.MouseEventHandler<HTMLButtonElement>;
  borderRadius:string
};

const CategorySelectorButton = ({ handleModalOpen,borderRadius }: CategorySelectorProps) => {
  console.log(handleModalOpen)
  return (
    <ButtonBase
      onClick={handleModalOpen}
      sx={{
        borderRadius: borderRadius,
        width: "12.5rem",
        height: "4rem",
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        p: "5px",
        ml: "10px",
      }}
    >
      <WidgetsOutlinedIcon
        sx={{
          ml: "5px",
          width: "1.8rem",
          height: "1.8rem",
          color: "rgb(41,41,41)",
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          color: "rgb(41,41,41)",
          alignSelf: "center",
          fontSize: "1.3rem",
        }}
      >
        دسته بندی ها
      </Typography>
    </ButtonBase>
  );
};

export default CategorySelectorButton;
