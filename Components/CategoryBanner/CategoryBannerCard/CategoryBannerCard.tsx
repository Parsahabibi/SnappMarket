
import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {
  image: any | string,
  title: string,
  priceReduction: string
}

const CategoryBannerCard = ({ image, title, priceReduction }: Props) => {
  return (
    <Grid sx={{cursor:'pointer'}}>
      <Grid item container xs={11} md={12} sx={{ border: ' 0.1rem solid rgba(255, 203, 150, 0.43)', borderRadius: '0.5rem' }} bgcolor={'rgba(255, 203, 150, 0.27)'} display={'flex'}width={{lg:'375px'}}height={{lg:'150px'}} >
        <Grid item xs={12} md={4} height={{xs:'100px',sm:'220px',md:'140px'}} width={{xs:'100px',sm:'245px',md:'200px'}} >
          <Image src={image} alt={title} style={{ width: '100%', height: '100%' }} />
        </Grid>
        <Grid item xs={6} display={{ xs: 'none', md: 'flex' }} flexDirection={'column'} justifyContent={'center'} alignItems={'start'} paddingRight={{ md: '1.5rem', lg: '1rem' }}>
          <Typography pb={2} fontSize={'1.8rem'} color={'rgb(66,66,66)'}>
            {title}
          </Typography>
          <Typography sx={{transform:'skew(-15deg)',width:'11.5rem'}} bgcolor={'rgb(67, 203, 78)'} color={'common.white'} p={'7px 0.9rem '} borderRadius={"0.5rem"} height={'3rem'}fontSize={'1.6rem'}>
            {priceReduction}
          </Typography>
        </Grid>
        <Grid item xs={2} display={{ xs: 'none', md: 'flex' }} alignItems={'center'} justifyContent={'center'}>
          <ArrowBackIosNewIcon sx={{width:'21px',height:'21px',color:'rgb(66,66,66)'}} />
        </Grid>
      </Grid>
      <Grid display={{ xs: 'flex', md: 'none' }} justifyContent={'center'} pt={2}>
        <Typography sx={{ fontSize: '1.4rem',color:'rgb(66 66 66)' }}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CategoryBannerCard