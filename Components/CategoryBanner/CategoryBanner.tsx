import { Grid, Container, Typography } from '@mui/material'
import React from 'react'
import { dataCategoryBannerCard } from '../../Data/DataCategoryBannerCard/DataCategoryBannerCard'
import CategoryBannerCard from './CategoryBannerCard/CategoryBannerCard'

type Props = {}

const CategoryBanner = (props: Props) => {
  return (
    <Container>
      <Grid  item container display={'flex'}  alignItems={'center'} >
        <Grid item xs={3}sm={4} md={5} sx={{ borderTop: '0.1rem solid rgba(163, 163, 163, 0.25)' }}/>
        <Grid  item xs={6}sm={4} md={2} display={'flex'} justifyContent={'center'}mt={3.5}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
            {'دسته بندی ها'}
          </Typography>
        </Grid>
        <Grid item xs={3}sm={4} md={5} sx={{ borderTop: '0.1rem solid rgba(163, 163, 163, 0.25)' }}/>
      </Grid>
      <Grid item display={'flex'} justifyContent={'space-between'}  gap={{ md: '10px', lg: '0px' }} >
        {dataCategoryBannerCard.map(item => (<CategoryBannerCard key={item.id} image={item.image} title={item.title} priceReduction={item.priceReduction} />))}
      </Grid>
    </Container>
  )
}

export default CategoryBanner