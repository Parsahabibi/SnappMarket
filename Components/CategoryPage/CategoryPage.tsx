import { Grid } from '@mui/material'
import React from 'react'
import MainCategoryPage from './MainCategoryPage/MainCategoryPage'
import SidebarCategoryPage from './SidebarCategoryPage/SidebarCategoryPage'

type Props = {}

const CategoryPage = (props: Props) => {
    return (
        <Grid display={'flex'} justifyContent={'space-around'}  item xs={12} >
            <Grid height={'100vh'}width={'25%'} >
                <SidebarCategoryPage/>
            </Grid>
            <Grid height={'100vh'} width={'70%'}>
                <MainCategoryPage/>
            </Grid>
        </Grid>
    )
}

export default CategoryPage