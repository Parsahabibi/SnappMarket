import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image2 from '../../assets/Images/ImageBanner/image2.jpg'

type Props = {}

const HealthBanner = (props: Props) => {
    return (
        <Grid display={{ xs: 'none', sm: 'flex' }}>
            <Container>
                <Grid mt={5} mb={1}>
                    <Image src={image2} alt={'logo'} style={{ width: '100%', height: '100px', borderRadius: '0.5rem' }} />
                </Grid>
            </Container>
        </Grid>
    )
}

export default HealthBanner