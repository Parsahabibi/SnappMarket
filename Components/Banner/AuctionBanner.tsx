import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image1 from '../../assets/Images/ImageBanner/image9.jpg'

type Props = {}

const AuctionBanner = (props: Props) => {
    return (
        <Grid display={{sm:'flex'}} mt={{xs:26}}>
            <Container>
                <Grid mt={{xs:2,sm:5}} mb={{xs:2,sm:4}} height={{xs:'60px',sm:'110px'}}>
                    <Image src={image1} alt={'logo'} style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }} />
                </Grid>
            </Container>
        </Grid>
    )
}

export default AuctionBanner