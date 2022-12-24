import { TextField, styled, Button } from "@mui/material";
import React from "react";

type Props = {};
const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "4rem",
  background: "white",
  borderRadius: "30px",
  "& label": {
    ...theme.typography["body1"],
    color: "rgb(141,141,141)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    height: "4rem",
    fontSize: "1.3rem",
  },
}));

const SearchBar = (props: Props) => {
  return (
    <StyledTextField
      placeholder="جست و جوی برند یا محصول"
      fullWidth
      sx={{
        display: "flex",
        position: "relative",
        alignSelf: "center",
        mt: "5px",
      }}
    ></StyledTextField>
  );
};

export default SearchBar;
