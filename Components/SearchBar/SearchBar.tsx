import { TextField, styled } from "@mui/material";
import React from "react";

type Props = {};
const StyledTextField = styled(TextField)(({ theme }) => ({
  height: "40px",
  background: "white",
  borderRadius: "30px",
  "& label": {
    ...theme.typography["body1"],
    color: "rgb(141,141,141)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    height: "40px",
  },
}));

const SearchBar = (props: Props) => {
  return <StyledTextField fullWidth sx={{ alignSelf: "center", mt: "5px" }} />;
};

export default SearchBar;
