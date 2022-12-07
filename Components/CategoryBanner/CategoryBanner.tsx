import { Grid,Container } from '@mui/material'
import React from 'react'
import { dataCategoryBannerCard } from '../../Data/DataCategoryBannerCard/DataCategoryBannerCard'
import CategoryBannerCard from './CategoryBannerCard/CategoryBannerCard'

type Props = {}

const CategoryBanner = (props: Props) => {
  return (
    <Container>
      <Grid display={'flex'} justifyContent={'space-between'} gap={{md:'10px',lg:'0px'}} >
        {dataCategoryBannerCard.map(item => (<CategoryBannerCard key={item.id} image={item.image} title={item.title} priceReduction={item.priceReduction} />))}
      </Grid>
    </Container>
  )
}

export default CategoryBanner