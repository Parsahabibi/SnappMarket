import { TextField, styled, Button } from "@mui/material";
import React from "react";

type Props = {};
const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "45px",
  background: "white",
  borderRadius: "30px",
  "& label": {
    ...theme.typography["body1"],
    color: "rgb(141,141,141)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    height: "45px",
  },
}));

const SearchBar = (props: Props) => {
  return (
    <StyledTextField
      placeholder="جست و جوی برند یا محصول"
      fullWidth
      sx={{ position: "relative", alignSelf: "center", mt: "5px" }}
    ></StyledTextField>
  );
};

export default SearchBar;
