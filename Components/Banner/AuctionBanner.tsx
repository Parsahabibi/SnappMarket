import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image1 from '../../assets/Images/ImageBanner/image1.png'

type Props = {}

const AuctionBanner = (props: Props) => {
    return (
        <Grid display={{xs:'none',sm:'flex'}}>
            <Container>
                <Grid mt={5} mb={4}>
                    <Image src={image1} alt={'logo'} style={{ width: '100%', height: '100px', borderRadius: '0.5rem' }} />
                </Grid>
            </Container>
        </Grid>
    )
}

export default AuctionBanner