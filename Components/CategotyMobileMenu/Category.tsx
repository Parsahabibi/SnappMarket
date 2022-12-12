import { Container, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Image from 'next/image';

import dataCategory from "./DataCategoryMobileMenu"
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem';

interface Props {

}

const Category = (props: Props) => {
    return (
        <Grid>
            <Grid width={'100%'} container sx={{ position: "fixed" }} bgcolor={'rgb(255,255,255)'}>
                <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} pr={2.5}>
                    <ArrowForwardIcon style={{ width: 20, height: 20 }} />
                </Grid>
                <Grid pr={9.5}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} variant='h3'>دسته بندی ها</Typography>
                </Grid>
            </Grid>
            <Container>
                <Grid container justifyContent={"center"} pt={7} pb={9.5}>
                    {
                        dataCategory.map(item =>
                            <Grid container item xs={4} key={item.id}>
                                <Grid>
                                    <Image width={100} height={100} src={item.image} alt={"labaniat"} />
                                </Grid>
                                <Grid container width={"90%"} >
                                    <Grid container alignItems={"center"} justifyContent={"center"} pt={3.9} width={'100%'} height={'8.2rem'} borderRadius={'1.6rem'} bgcolor={'rgb(255,255,255)'}>
                                        <Typography>{item.title}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
            <MobileMenuItem />
        </Grid>

    )
}

export default Category
