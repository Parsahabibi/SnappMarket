import { Grid, Modal } from "@mui/material";
import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

type Props = {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const ProfileModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Grid
        mb="20px"
        width="240px"
        borderRadius="0 0 10px 10px"
        bgcolor="white"
        position="absolute"
        top={90}
        right={1350}
      >
        <Grid>
          <Grid bgcolor="rgb(250,250,250)" p="10px 10px 0 0" fontSize="14px">
            ahmad mohtadi
          </Grid>
          <Grid
            p="0px 10px 10px 0"
            marginTop="20px"
            borderBottom="1px solid rgb(238,238,238)"
            display="flex"
            alignItems="center"
          >
            اعتبار:
            <Grid
              borderRadius="20px"
              mr="5px"
              alignSelf="center"
              padding="10px"
              bgcolor="rgb(253,160,89)"
            >
              0 تومان
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{ cursor: "pointer" }}
          p="10px"
          display="flex"
          color="rgb(151,151,151)"
        >
          <Person2OutlinedIcon sx={{ ml: "5px" }} />
          حساب کاربری
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          p="10px"
          display="flex"
          color="rgb(151,151,151)"
        >
          <PaidOutlinedIcon sx={{ ml: "5px" }} />
          افزایش اعتبار
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          p="10px"
          display="flex"
          color="rgb(151,151,151)"
        >
          <AddShoppingCartOutlinedIcon sx={{ ml: "5px" }} />
          لیست سفارش‌ها
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          p="10px"
          display="flex"
          color="rgb(151,151,151)"
        >
          <ExitToAppOutlinedIcon sx={{ ml: "5px" }} />
          خروج{" "}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ProfileModal;
