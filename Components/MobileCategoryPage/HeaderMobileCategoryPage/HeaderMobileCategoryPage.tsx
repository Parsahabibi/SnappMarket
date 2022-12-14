import { Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Divider from '@mui/material/Divider';
import NavbarMobileCategoryPage from './NavbarMobileCategoryPage';
type Props = {}

const HeaderMobileCategoryPage = (props: Props) => {
    return (
        <Grid>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} bgcolor={'common.white'} p={'0rem 2.4rem 0px'} height={'5.6rem'}>
                <ArrowForwardSharpIcon style={{width:'25px', height:"25px"}}/>
                <Typography borderRadius={'1.45rem'} m={'0 0 0 0.2rem'} fontSize={'1.6rem'} fontWeight={500} sx={{transition:'background 180ms ease-in-out 0s, color 180ms ease-in-out 0s'}} bgcolor={'primary.main'} color={'common.white'} p={'0.3rem 1.6rem'}>{'آرایشی و بهداشتی'}</Typography>
                <Typography color={'info.dark'} m={'0 0 0 0.2rem'} p={'0.3rem 0px'}fontSize={'1.6rem'} fontWeight={500}>{'خانه '}</Typography>
                <SearchSharpIcon style={{width:'30px', height:"30px"}}/>
            </Grid>
            <Divider/>
            <NavbarMobileCategoryPage/>
            <Divider/>
        </Grid>
    )
}

export default HeaderMobileCategoryPage