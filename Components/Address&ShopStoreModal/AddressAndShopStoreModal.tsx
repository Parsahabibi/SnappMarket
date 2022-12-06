import { Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ButtonBase from "@mui/material/ButtonBase";
import BackgroundHeaderImage from "../../assets/Images/headerbg.jpg";
import BackgroundHeaderImageSecond from "../../assets/Images/backgroundSecond.png";
import Image from "next/image";
import Hyperstorelogo from "../../assets/Images/hyperlogo.jpg";

type Props = {};
const styled2 = {
  backgroundImage: `url('${BackgroundHeaderImageSecond.src}')`,
  backgroundSize: "cover",
  borderRadius: "5px 5px 0 0",
  bgColor: "rgba(1,1,1,0.1)",
};

const styled = {
  backgroundImage: `url('${BackgroundHeaderImage.src}')`,
  backgroundSize: "cover",
  borderRadius: "5px 5px 0 0",
  bgColor: "rgba(1,1,1,0.1)",
};

const AddressAndShopStoreModal = (props: Props) => {
  return (
    <Grid
      sx={{
        width: "calc(100% - 45rem) !important",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        bgcolor: "white",
      }}
    >
      <Grid sx={{ display: "flex", width: "100%", padding: "10px" }}>
        <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid sx={{ display: "flex" }}>
              <LocationOnOutlinedIcon
                sx={{
                  color: "primary.main",
                  width: "20px",
                  height: "20px",
                  ml: "8px",
                }}
              />
              <Typography sx={{ color: "primary.main" }}>
                انتخاب آدرس تحویل
              </Typography>
            </Grid>
            <KeyboardArrowDownOutlinedIcon />
          </Grid>
          <Grid
            sx={{
              justifyContent: "space-between",
              display: "flex",
              bgcolor: "rgb(242,247,255)",
              alignItems: "center",
              padding: "15px",
              borderRadius: "10px",
              mt: "10px",
            }}
          >
            <Typography variant="subtitle2">
              تهران، دانشگاه تهران، کارگر شمالی، 16 آذر، پارسی تقاطع مهر،
              خوابگاه 16 آذر پلاک 23 واحد 22
            </Typography>
            <Grid sx={{ display: "flex", alignSelf: "center" }}>
              <ModeEditOutlineOutlinedIcon
                sx={{
                  color: "rgb(179,181,185)",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                }}
              />
              <DeleteOutlinedIcon
                sx={{
                  color: "rgb(179,181,185)",
                  cursor: "pointer",
                  mr: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              mt: "10px",
              fontSize: "0.9rem",
              color: "primary.main",
              cursor: "pointer",
            }}
          >
            + افزودن آدرس
          </Grid>
          <Grid
            sx={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid rgb(238,238,238)",
              justifyContent: "space-between",
            }}
          >
            <Grid sx={{ display: "flex", mt: "20px", color: "primary.main" }}>
              <ShoppingCartOutlinedIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  ml: "5px",
                }}
              />
              انتخاب فروشگاه
            </Grid>
            <Grid sx={{ alignSelf: "center", mt: "20px" }}>
              <ButtonBase
                sx={{
                  width: "70px",
                  height: "30px",
                  borderRadius: "20px",
                  ":hover": {
                    bgcolor: "rgb(242,247,255)",
                    ml: "5px",
                  },
                }}
              >
                <Typography variant="subtitle2"> هایپر استار</Typography>
              </ButtonBase>
              <ButtonBase
                sx={{
                  width: "70px",
                  height: "30px",
                  borderRadius: "20px",
                  ":hover": {
                    bgcolor: "rgb(242,247,255)",
                    mr: "7px",
                  },
                }}
              >
                <Typography variant="subtitle2"> مایلی</Typography>
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid sx={{ mt: "10px", display: "flex" }}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "22rem",
                height: "14rem",
                ml: "20px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid rgb(238,238,238)",
              }}
            >
              <Grid
                sx={{
                  height: "80%",
                  borderBottom: "1px solid black",
                  padding: "10px",
                }}
                style={styled2}
              >
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  height="50px"
                >
                  <Image
                    alt=""
                    style={{
                      marginLeft: "10px",
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    src={Hyperstorelogo}
                  />
                  <Grid
                    sx={{
                      alignSelf: "center",
                      color: "primary.main",
                      borderRadius: "20px",
                      bgcolor: "white",

                      padding: "5px",
                    }}
                  >
                    20% تخفیف ویژه
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                display="flex"
                justifyContent="space-evenly"
                color="primary.main"
                position="relative"
                top={7}
              >
                <Typography sx={{ alignSelf: "center", fontSize: "0.9rem" }}>
                  تحویل از امروز ساعت 21:00
                </Typography>
                <Typography sx={{ alignSelf: "center", fontSize: "0.9rem" }}>
                  تحویل از امروز ساعت 21:00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "22rem",
                height: "14rem",
                mr: "20px",
                borderRadius: "5px",
                mb: "20px",
                cursor: "pointer",
                border: "1px solid rgb(238,238,238)",
              }}
            >
              <Grid
                sx={{
                  height: "80%",
                  borderBottom: "1px solid black",
                  p: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                style={styled}
              >
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  height="50px"
                >
                  <Image
                    alt=""
                    style={{
                      marginLeft: "10px",
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    src={Hyperstorelogo}
                  />
                  <Grid
                    sx={{
                      alignSelf: "center",
                      color: "primary.main",
                      borderRadius: "20px",
                      bgcolor: "white",
                      padding: "5px",
                    }}
                  >
                    20% تخفیف ویژه
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                display="flex"
                justifyContent="space-evenly"
                color="primary.main"
                position="relative"
                top={7}
              >
                <Typography sx={{ alignSelf: "center", fontSize: "0.9rem" }}>
                  تحویل از امروز ساعت 21:00
                </Typography>
                <Typography sx={{ alignSelf: "center", fontSize: "0.9rem" }}>
                  تحویل از امروز ساعت 21:00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddressAndShopStoreModal;
