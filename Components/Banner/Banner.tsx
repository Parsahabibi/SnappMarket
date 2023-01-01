import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image11 from '../../assets/Images/ImageBanner/image11.jpg'
import image12 from '../../assets/Images/ImageBanner/image12.jpg'
import image13 from '../../assets/Images/ImageBanner/image13.jpg'
type Props = {}

const Banner = (props: Props) => {
  return (
    <Container>
        <Grid width={'100%'} display={{xs:'none',sm:'flex'}} gap={1.5}>
            <Image src={image11}alt={'banner'}style={{width:'33%',height:'156px',borderRadius:'0.5rem'}}/>
            <Image src={image12}alt={'banner'}style={{width:'33%',height:'156px',borderRadius:'0.5rem'}}/>
            <Image src={image13}alt={'banner'}style={{width:'33%',height:'156px',borderRadius:'0.5rem'}}/>
        </Grid>
    </Container>
  )
}

export default Banner