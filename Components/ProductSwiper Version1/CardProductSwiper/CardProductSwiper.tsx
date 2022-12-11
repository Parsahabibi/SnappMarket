import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { dataCard } from '../../../Data/DataCardProductSwiperV1/DataCardProductSwiperV1'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";


const CardProductSwiper = ({ title, image, Price, Weight, priceReduction, Discount }: dataCardSliderType) => {
  return (
  
      <Grid bgcolor={'common.white'} borderRadius={'0.5rem'} width={'23.4rem'}  px={2}>
        <Grid display='flex' justifyContent={'center'} my={1}>
          <Image src={image} alt={title} width={170} height={170} />
        </Grid>
        <Grid height={50}>
          <Typography variant='h3' >{title}</Typography>
        </Grid>
        <Typography variant='subtitle1'>{Weight}</Typography>
        <Grid display='flex' alignItems={'center'} gap={1} py={1.5}>
          <Typography variant='body2'>{Discount}</Typography>
          <Typography sx={{ textDecoration: 'line-through', fontSize: '1.2rem', fontWeight: '500' }} color={'info.main'}>{priceReduction}</Typography>
        </Grid>
        <Grid display='flex' justifyContent={'space-between'} >
          <Typography pt={1.2} sx={{ fontSize: '1.6rem' }} color={'common.black'} pb={2}>{Price}تومان</Typography>
          <ButtonProductCardSwiper />
        </Grid>
      
    </Grid>
  )
}

export default CardProductSwiper