import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import EasyLife from "../../assets/Images/image6.jpg";
import Image from "next/image";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";

type Props = {};

const ProductBasketCard = (props: Props) => {
  return (
    <Grid
      display="flex"
      height="13rem"
      p="20px"
      sx={{
        cursor: "pointer",
        ":hover": {
          borderBottom: "1px solid rgb(244,244,244)",
        },
      }}
    >
      <Grid display="flex" justifyItems="center" alignItems="center">
        <Image
          alt=""
          style={{ height: "7rem", width: "7rem" }}
          src={EasyLife}
        />
      </Grid>
      <Grid display="flex" flexDirection="column" mr="20px">
        <Grid>
          <Typography variant="subtitle1" sx={{ fontSize: "1.3rem" }}>
            برنج هندی خوشپخت لوکس
          </Typography>
        </Grid>
        <Grid display="flex" mt="20px">
          <Grid display="flex" flexDirection="column" minWidth="18rem">
            <Grid display="flex">
              <Grid
                bgcolor="secondary.main"
                color="white"
                width="2.9rem"
                fontSize="1.4rem"
                borderRadius="4px"
                display="flex"
                justifyContent="center"
              >
                %13
              </Grid>
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                mr="5px"
                color="rgb(111,113,117)"
                fontSize="1.4rem"
                sx={{ textDecorationLine: "line-through" }}
              >
                29,99
              </Grid>
            </Grid>
            <Grid mt="5px" sx={{ fontSize: "1.3rem" }}>
              399,000 هزار تومان
            </Grid>
          </Grid>
          <Grid display="flex">
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="32px"
              height="32px"
              borderRadius="100%"
              color="primary.main"
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <DeleteOutlinedIcon sx={{ width: "20px", height: "20px" }} />
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              width="32px"
              height="32px"
              color="primary.main"
              m="3px"
              fontSize="2rem"
              flexGrow="1"
            >
              1
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3.2rem"
              height="3.2rem"
              borderRadius="50%"
              border="0.1px solid rgb(233,237,254)"
              color="primary.main"
              fontSize="1.2rem"
              sx={{
                cursor: "pointer",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <AddIcon sx={{ width: "20px", height: "20px" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductBasketCard;
