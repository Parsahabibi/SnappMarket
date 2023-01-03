import { Grid } from '@mui/material'
import React from 'react'
import CategoryPage from '../../Components/CategoryPage/CategoryPage'
import DekstopHeader from '../../Components/Header/DekstopHeader'
import MobileCategoryPage from '../../Components/MobileCategoryPage/MobileCategoryPage'
import Header from '../../Components/MobileMenuHeader/Header'


type Props = {}

const categories = (props: Props) => {
  return (
    <Grid>
      <DekstopHeader />
      {/* <Header /> */}
      <CategoryPage />
      <MobileCategoryPage/>
    </Grid>
  )
}

export default categories