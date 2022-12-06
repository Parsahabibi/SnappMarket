import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { dataCard } from '../../../Data/DataCardProductSwiperV1/DataCardProductSwiperV1'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";


const CardProductSwiper = ({title,image,Price,Weight,priceReduction,Discount}:dataCardSliderType) => {
  return (
    <Grid display='flex' gap={2} width={'400px'} >
      {/* {datamap(card => */}
        <Grid bgcolor={'common.white'} borderRadius={'0.5rem'} width={234} height={'100%'} px={2}>
          <Grid display='flex' justifyContent={'center'} my={1}>
            <Image src={image} alt={title} width={170} height={170} />
          </Grid>
          <Grid height={60}> <Typography variant='h3' fontSize={'1rem'}>{title}</Typography></Grid>
          <Typography variant='subtitle1' fontSize={'0.8rem'}>{Weight}</Typography>
          <Grid display='flex' alignItems={'center'} gap={1} py={1}>
            <Typography sx={{ bgcolor: 'secondary.main', color: 'common.white', borderRadius: 1, p: '2px 4px' }}>{Discount}</Typography>
            <Typography sx={{ textDecoration: 'line-through', fontSize: '12px', fontWeight: '500' }} color={'info.main'}>{priceReduction}</Typography>
          </Grid>
          <Grid display='flex' justifyContent={'space-between'} >
            <Typography pt={1.2} sx={{ fontSize: '12px' }} color={'common.black'} pb={5}>{Price}تومان</Typography>
            <ButtonProductCardSwiper />
          </Grid>
        </Grid>
      {/* )} */}
    </Grid>
  )
}

export default CardProductSwiper