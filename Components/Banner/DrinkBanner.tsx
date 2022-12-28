import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image4 from '../../assets/Images/ImageBanner/image4.jpg'
type Props = {}

const DrinkBanner = (props: Props) => {
    return (
        <Grid display={{ xs: 'none', sm: 'flex' }}>
            <Container>
                <Grid my={3} >
                    <Image src={image4} alt={'logo'} style={{ width: '100%', height: '100px', borderRadius: '0.5rem' }} />
                </Grid>
            </Container>
        </Grid>
    )
}

export default DrinkBanner