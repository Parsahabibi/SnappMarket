import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image3 from '../../assets/Images/ImageBanner/image3.jpg'

type Props = {}

const ShampooBanner = (props: Props) => {
  return (
    <Grid display={{ xs: 'none', sm: 'flex' }}>
    <Container>
        <Grid mt={2} mb={3}>
            <Image src={image3} alt={'logo'} style={{ width: '100%', height: '100px', borderRadius: '0.5rem' }} />
        </Grid>
    </Container>
</Grid>
  )
}

export default ShampooBanner