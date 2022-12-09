import React, { useState } from "react";
import CategorySelectorButton from "../CategorySelectorButton/CategorySelectorButton";
import Grid from "@mui/material/Grid";
import CategoryModal from "../CategoryModal/CategoryModal";

type Props = {};

const HeaderCategoryLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <Grid>
      <CategorySelectorButton onClick={handleModalOpen} />
      <CategoryModal onClose={handleModalClose} open={open} />
    </Grid>
  );
};

export default HeaderCategoryLayout;
