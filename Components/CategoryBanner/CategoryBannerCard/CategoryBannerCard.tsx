import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {
  id:number,
  image:any|string,
  title:string,
  priceReduction:string
}

const CategoryBannerCard = ({image,title,priceReduction}: Props) => {
  return (
    <Grid  item container xs={3} sx={{border:' 0.1rem solid rgba(255, 203, 150, 0.43)',borderRadius:'0.5rem'}} bgcolor={'rgba(255, 203, 150, 0.27)'} display={'flex'} justifyContent={'space-between'}>
      <Grid item xs={2}>
        <Image src={image} alt={title} width={120} height={120} />
      </Grid>
      <Grid item xs={5} display={'flex'}flexDirection={'column'}justifyContent={'space-evenly'} alignItems={'center'}>
        <Typography>
          {title}
        </Typography>
        <Typography>
          {priceReduction}
        </Typography>
      </Grid>
      <Grid item xs={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <ArrowBackIosNewIcon />
      </Grid>
    </Grid>
  )
}

export default CategoryBannerCard