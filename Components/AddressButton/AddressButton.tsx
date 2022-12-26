import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddressButton = ({ onClick }: Props) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{ ":hover": { color: "rgb(220, 220, 220)" } }}
    >
      <LocationOnOutlinedIcon
        sx={{ color: "white", width: "20px", height: "20px", ml: "8px" }}
      />
      <Typography
        sx={{
          fontSize: "1.2rem",
          color: "white",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "22rem",
          ":hover": { color: "rgb(220, 220, 220)" },
        }}
      >
        تهران، دانشگاه تهران، کارگر شمالی، 16 آذر، پارسی تقاطع مهر، خوابگاه 16
        آذر پلاک 23 واحد 22
      </Typography>
      <KeyboardArrowDownOutlinedIcon
        sx={{ width: "30px", height: "30px", color: "white" }}
      />
    </ButtonBase>
  );
};

export default AddressButton;
