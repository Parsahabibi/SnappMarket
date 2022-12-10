import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material'
// import Button from "../../Components/ButtonProductCardSwiper/ButtonProductCardSwiper"
import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import Image from 'next/image';

import image from "../../assets/Images/hypermarket.jpg"


type Props = {}

const Header = (props: Props) => {

    const StyledTextField = styled(TextField)(({ theme }) => ({
        width: "100%",
        // height: "4.8rem",
        background: "rgb(248, 249, 253)",
        borderRadius: "0.8rem",
        // border:"0.1rem solid rgb(230, 230, 230)",

        "& label": {
            ...theme.typography["body1"],
            // color: "rgb(141,141,141)",
        },
        "& .MuiOutlinedInput-root": {
            fontSize: "16px",
            color: 'rgb(155, 158, 174)',
            borderRadius: "0.8rem",
            height: "52.5px",
        },
    }));
    return (
        <Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-around", alignItems: "stretch" }} borderBottom={0.5} borderColor={"info.main"} pt={2} pr={2} pl={2}>
                {/* color?? */}
                <Grid container pb={2}>
                    <Typography >اطراف شما</Typography>
                    <KeyboardArrowDownIcon />
                </Grid>
                <Grid>
                    <PersonOutlineOutlinedIcon />
                </Grid>
            </Grid>
            <Container>
                <Grid mb={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Grid pt={2}>
                        <Grid display={"flex"} border={1} borderRadius={"50%"}>
                            <Image style={{ borderRadius: "50%" }} width={50} src={image} alt={"hyper"} />
                        </Grid>
                    </Grid>
                    <Grid pt={1.75} pr={0.5}>
                        <Typography fontSize={'1.07rem'}>هایپر استار صبا</Typography>
                        <Typography fontSize={'0.8rem'} maxWidth={112}>ارسال رایگان بالای 200 هزار تومان</Typography>
                    </Grid>
                    <Grid>
                        <Button variant='outlined' sx={{ padding: '0 1rem', height: '2.25rem' , marginRight:'auto' }}>
                            <Grid container alignItems={"center"}>
                                <Typography fontSize={'12px'}>تغییر فروشگاه</Typography>
                                {/* Typography */}
                                <KeyboardArrowDownIcon />
                            </Grid>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container >
                    <StyledTextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue=" جست و جو در برند یا محصول"
                        InputProps={{
                            endAdornment: <SearchIcon style={{ margin: "0 10px" }} />
                        }}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default Header