import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import { dataMobileMenuItem } from '../../Data/DataMobileMenuItem/DataMobileMenuItem';

type Props = {
    Id: number
}

const MobileMenuItem = ({ Id }: Props) => {

    const [active, setActive] = useState(Id);
    const handleActive = (id: number) => {
        setActive(id)
    }
    console.log(active)
    return (
        <Grid>
            <Grid bgcolor={'common.white'} container justifyContent={"space-around"} zIndex={1000} position={'fixed'} bottom={0} left={0} right={0} pr={2}>
                <Grid pt={1} display={'flex'} justifyContent={'space-around'} width={'100%'}>
                    {dataMobileMenuItem.map(item => (
                        <Link href={item.href} onClick={() => handleActive(item.id)}>
                            {
                                active === item.id ?
                                    <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={'primary.main'}>
                                        {item.icon}
                                        <Typography color={"primary.main"} variant='subtitle2'>{item.title}</Typography>
                                    </Grid>
                                    :
                                    <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} color={"common.black"}>
                                        {item.icon}
                                        <Typography variant='subtitle2'>{item.title}</Typography>
                                    </Grid>
                            }
                        </Link>
                    ))}
                </Grid>

            </Grid>
        </Grid>
    )
}

export default React.memo(MobileMenuItem) 