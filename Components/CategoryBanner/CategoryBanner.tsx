import { Grid, Container, Typography } from '@mui/material'
import React from 'react'
import { dataCategoryBannerCard } from '../../Data/DataCategoryBannerCard/DataCategoryBannerCard'
import { dataCard } from '../../Data/DataCategoryCard/DataCategoryCard'
import AccordionCardCategory from './AccordionCardCategory/AccordionCardCategory'
import CategoryBannerCard from './CategoryBannerCard/CategoryBannerCard'
import CategoryCard from './CategoryCard/CategoryCard'

type Props = {}

const CategoryBanner = (props: Props) => {
  return (
    <Container>
      <Grid display={{xs:'none',sm:'flex'}} flexDirection={'column'}>
        <Grid item container display={'flex'} alignItems={'center'}>
          <Grid item xs={3} sm={4.5} md={5}  sx={{ borderTop: '0.1rem solid rgba(163, 163, 163, 0.25)' }} />
          <Grid item xs={6} sm={3} md={2} mb={3} display={'flex'} justifyContent={'center'} mt={3.5}>
            <Typography fontSize={'1.9rem'} fontWeight={'bold'}>
              {'دسته بندی ها'}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={4.5} md={5} sx={{ borderTop: '0.1rem solid rgba(163, 163, 163, 0.25)' }} />
        </Grid>
        <Grid item display={'flex'} justifyContent={'space-between'} gap={{ md: '10px', lg: '0px' }} >
          {dataCategoryBannerCard.map(item => (<CategoryBannerCard key={item.id} image={item.image} title={item.title} priceReduction={item.priceReduction} />))}
        </Grid>
        <Grid item xs={12} display={'flex'}  gap={{ xs: '10px', lg: '10px' }} >
          {dataCard.slice(0, 4).map(item => (
            <Grid  key={item.id} width={{xs:'23.5%',sm:'25.2%',md:'25%'}} height={'80px'} my={3}>
              <CategoryCard title={item.title} image={item.image} priceReduction={item.priceReduction} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} gap={{ xs: '18px', lg: '0px' }}>
          <AccordionCardCategory />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryBanner
