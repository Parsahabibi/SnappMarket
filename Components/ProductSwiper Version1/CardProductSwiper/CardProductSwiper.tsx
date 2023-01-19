import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ButtonProductCardSwiper from "../../ButtonProductCardSwiper/ButtonProductCardSwiper";
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../redux/Slice/Slice";
type Props = {
  title: string;
  image: any | string;
  Weight: number | string;
  Discount: number | string;
  price: string | number;
  priceReduction: number | string | undefined;
  width: string;
  titleBtn: string | any;
  widthImage: number;
  heightImage: number;
  bottom: string;
  left: string;
  hoverStyle: {};
  normalStyle: {};
  id: number | any;
  onClick: any | number
};

const CardProductSwiper = ({
  bottom,
  left,
  title,
  image,
  price,
  Weight,
  priceReduction,
  Discount,
  width,
  titleBtn,
  heightImage,
  widthImage,
  normalStyle,
  hoverStyle,
  onClick
}: Props) => {

  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Grid
      display="flex"
      gap={2}
      width={width}
      height={'max-content'}
      sx={{ cursor: "pointer" }}
      style={hover ? hoverStyle : normalStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Grid
        position={"relative"}
        bgcolor={"common.white"}
        borderRadius={"0.5rem"}
        width={234}
        px={2}
      >
        <Grid display="flex" justifyContent={"center"} my={1}>
          <Image
            src={image}
            alt={title}
            width={widthImage}
            height={heightImage}
          />
        </Grid>
        <Grid height={30}>
          {" "}
          <Typography
            variant="h3"
            fontSize={"1.4rem"}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "10rem",
              fontStretch: "normal",
              letterSpacing: "normal",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Typography variant="subtitle1" fontSize={"1.2rem"}>
          {Weight === ''? <Grid height={15}></Grid>:<Typography>{Weight}</Typography>}
        </Typography>
        <Grid display="flex" alignItems={"center"} gap={1} py={1}>
          {Discount === '' ? <Grid height={25}></Grid> :
            <Typography
              sx={{
                bgcolor: "secondary.main",
                color: "common.white",
                borderRadius: 1,
                p: "2px 4px",
                fontSize: "1.4rem",
              }}
            >
              {Discount}
            </Typography>}
          <Grid>
            {Discount === '' ? <Grid></Grid> :
              <Typography
                sx={{
                  textDecoration: "line-through",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}
                color={"info.main"}
              >
                {priceReduction}
              </Typography>}
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent={"space-between"}>
          <Typography
            pt={1.2}
            sx={{ fontSize: "1.2rem" }}
            color={"common.black"}
            pb={2}
          >
            {price}تومان
          </Typography>
          <Grid position={"absolute"} sx={{ bottom: bottom, left: left }}>
            <Grid display={{ xs: "none", sm: "flex" }}>
              {" "}
              <ButtonProductCardSwiper
                title={titleBtn}
                bgcolor={""}
                value={""}
                icon={""} left={""} bottom={""} onClick={() => dispatch(onClick)} />
            </Grid>
            <Button
              onClick={() => dispatch(onClick)}
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                display: { xs: "flex", sm: "none" },
              }}
            >
              <Typography
                border={"0.1rem solid rgba(35, 71, 251, 0.24)"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"3rem"}
                height={"3rem"}
                boxShadow={1}
                borderRadius={"50%"}
              >
                {titleBtn}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardProductSwiper;
