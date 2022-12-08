import React from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QrCodeIcon from '@mui/icons-material/QrCode';

type Props = {}

const MobileMenuItem = (props: Props) => {
    return (
        <Grid>
            <Grid bgcolor={'common.white'} container justifyContent={"space-around"} position={'fixed'} bottom={0} left={0} right={0} borderTop={1} borderColor="rgb(255, 255, 255)">
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                            <HomeIcon />
                            <Typography fontSize={'12px'}>خانه</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                            <QrCodeIcon />
                            <Typography fontSize={'12px'}>دسته بندی ها</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid pt={1}>
                    <Link href={""}>
                        <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"rgb(26, 28, 35)"}>
                            <ShoppingCartIcon />
                            <Typography fontSize={'12px'}>سبد خرید</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileMenuItem