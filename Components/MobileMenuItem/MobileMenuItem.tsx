import React from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';

type Props = {}

const MobileMenuItem = (props: Props) => {
    return (
        <Grid>
            <Grid bgcolor={'common.white'} container justifyContent={"space-around"} position={'fixed'} bottom={0} left={0} right={0}>
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"primary.main"}>
                            <HomeOutlinedIcon style={{width:"25px" , height:"25px"}}/>
                            <Typography color={"primary.main"} variant='subtitle2'>خانه</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                            <QrCodeOutlinedIcon style={{width:"25px" , height:"25px"}} />
                            <Typography variant='subtitle2'>دسته بندی ها</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                            <ShoppingCartOutlinedIcon style={{width:"25px" , height:"25px"}} />
                            <Typography variant='subtitle2'>سبد خرید</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileMenuItem