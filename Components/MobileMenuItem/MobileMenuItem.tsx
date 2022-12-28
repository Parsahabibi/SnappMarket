import React from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';

type Props = {
    page: string
}

const MobileMenuItem = ({ page }: Props) => {
    return (
        <Grid>
            <Grid bgcolor={'common.white'} container justifyContent={"space-around"} position={'fixed'} bottom={0} left={0} right={0} pr={2}>
                <Grid pt={1}>
                    <Link href={""}>
                        {
                            page === 'home' ?
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={'primary.main'}>
                                    <HomeOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography color={"primary.main"} variant='subtitle2'>خانه</Typography>
                                </Grid>
                                :
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"common.black"}>
                                    <HomeOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography variant='subtitle2'>خانه</Typography>
                                </Grid>
                        }
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={"/"}>
                        {
                            page === "category" ?
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"primary.main"}>
                                    <QrCodeOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography color={"primary.main"} variant='subtitle2'>دسته بندی</Typography>
                                </Grid>
                                :
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"common.black"}>
                                    <QrCodeOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography variant='subtitle2'>دسته بندی</Typography>
                                </Grid>
                        }
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={""}>
                        {
                            page === "basket" ?
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"primary.main"}>
                                    <ShoppingCartOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography variant='subtitle2'>سبد خرید</Typography>
                                </Grid>
                                :
                                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                                    <ShoppingCartOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    <Typography variant='subtitle2'>سبد خرید</Typography>
                                </Grid>
                        }
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileMenuItem