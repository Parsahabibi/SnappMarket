import { Grid, Typography } from '@mui/material'
import React from 'react'
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
type Props = {}

const TopBarMainCategoryPage = (props: Props) => {
    return (
        <Grid display={'flex'}justifyContent={'space-between'} alignItems={'center'} p={'0px 1.6rem 0px 1rem'} mt={'0.5rem'} borderRadius={'0.5rem'} border={'0.1rem solid rgb(238, 238, 238)'} bgcolor={'common.white'}>
            <Grid display={'flex'} py={1.5}>
                <RoofingSharpIcon />
                <Typography>{'اسنپ مارکت'}</Typography>
                <ArrowBackIosNewSharpIcon style={{ padding: '0 2px', margin: '0 5px' }} />
                <Typography>{'لبنیات'}</Typography>
                <ArrowBackIosNewSharpIcon style={{ padding: '0 2px', margin: '0 5px' }} />
                <Typography>{'شیر'}</Typography>
            </Grid>
            <Grid>
                <Typography>{'125 کالا'}</Typography>
            </Grid>
        </Grid>
    )
}

export default TopBarMainCategoryPage