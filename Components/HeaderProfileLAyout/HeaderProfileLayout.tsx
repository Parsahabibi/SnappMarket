import { Grid } from "@mui/material";
import React, { useState } from "react";
import ProfileButtonHeader from "../ProfileButtonHeader/ProfileButtonHeader";
import ProfileModal from "../ProfileModal/ProfileModal";

type Props = {};

const HeaderProfileLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  return (
    <Grid position={'relative'}>
      <ProfileButtonHeader onClick={handleModalOpen} />
      <ProfileModal open={open} onClose={handleModalClose} />
    </Grid>
  );
};

export default HeaderProfileLayout;
