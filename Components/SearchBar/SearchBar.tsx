import { TextField, styled, Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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
  return (
    <StyledTextField
      placeholder="جست و جوی برند یا محصول"
      fullWidth
      sx={{ position: "relative", alignSelf: "center", mt: "5px" }}
    >
      <Button sx={{ zIndex: "100" }}>hello</Button>
    </StyledTextField>
  );
};

export default SearchBar;
