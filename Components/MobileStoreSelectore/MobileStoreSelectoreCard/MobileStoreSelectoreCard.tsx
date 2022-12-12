import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
type Props = {
  title: string,
  image: string | any,
  Discount: string,
  dis: string,
  bgcolor: string,
  bgcolor2: string,
  backgroundimage: string | any
}

const MobileStoreSelectoreCard = ({ title, image, dis, Discount, bgcolor, bgcolor2, backgroundimage }: Props) => {
  const styling = {
    backgroundImage: `url('${backgroundimage.src}')`,
    width: "100%",
    backgroundSize: '70px',
    backgroundRepeat: 'no-repeat',

  }

  return (
    <Grid style={styling} display={'flex'}   px={0.8} justifyContent={'space-between'} borderRadius={'1rem'} alignItems={'center'} mb={13} bgcolor={bgcolor} height={103}>
      <Grid display={'flex'} gap={1.3} >
        <Grid mt={1}>
          <Image src={image} alt={title} width={40} height={40} style={{ borderRadius: '50%' }} />
        </Grid>
        <Grid color={'common.white'} >
          <Typography fontSize={'1.7rem'} fontWeight={'bold'} mb={'0.8rem'}>{title}</Typography>
          <Typography fontSize={'1.4rem'} fontWeight={'normal'} mb={'0.8rem'}>{dis}</Typography>
        </Grid>
      </Grid>
      <Grid borderRadius={'0.4rem'} bgcolor={bgcolor2} mb={'3rem'}>
        <Typography fontSize={'1.3rem'} fontWeight={500} p={'0px 0.8rem'} color={'common.white'}>{Discount}</Typography>
      </Grid>
    </Grid>

  )
}

export default MobileStoreSelectoreCard