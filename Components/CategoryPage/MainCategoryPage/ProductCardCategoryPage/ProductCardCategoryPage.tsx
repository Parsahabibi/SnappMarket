import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { dataCard } from '../../../../Data/DataCardProductCtegoryPage/DataCardProductCtegoryPage'
import CardProductSwiper from '../../../ProductSwiper Version1/CardProductSwiper/CardProductSwiper'

type Props = {}

const ProductCardCategoryPage = (props: Props) => {
  const hoverStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  }

  const normalStyle = {
  }
  return (
    <Grid display={'flex'} flexWrap={'wrap'}>
      {
        dataCard.map(item => (
          <Grid>
            <CardProductSwiper hoverStyle={hoverStyle} normalStyle={normalStyle} bottom={'15%'} left={'50%'} heightImage={170} widthImage={170} titleBtn={'افزودن به سبد'} width='232.5px' title={item.title} image={item.image} Price={item.Price} Weight={item.Weight} priceReduction={item.priceReduction} Discount={item.Discount} id={0}  />
          </Grid>
        ))
      }
    </Grid>

  )
}

export default ProductCardCategoryPage