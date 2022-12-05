import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type Props = {};

const AddressButton = (props: Props) => {
  return (
    <ButtonBase>
      <LocationOnOutlinedIcon
        sx={{ color: "white", width: "20px", height: "20px", ml: "8px" }}
      />
      <Typography variant="subtitle2" sx={{ color: "white" }}>
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
