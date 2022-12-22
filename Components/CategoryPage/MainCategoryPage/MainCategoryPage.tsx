import { Grid } from '@mui/material'
import React from 'react'
import ProductCardCategoryPage from './ProductCardCategoryPage/ProductCardCategoryPage'
import TopBarMainCategoryPage from './TopBarMainCategoryPage/TopBarMainCategoryPage'
import TopFilter from './TopFilter/TopFilter'

type Props = {}

const MainCategoryPage = (props: Props) => {
  return (
    <Grid>
      <TopBarMainCategoryPage/>
      <TopFilter id={1}/>
      <ProductCardCategoryPage/>
    </Grid>
  )
}

export default MainCategoryPage