import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import image13 from '../../assets/Images/ImageBanner/image13.jpg'
type Props = {}

const EggBanner = (props: Props) => {
    return (
        <Grid display={{ xs: 'flex', sm: 'none' }}>
            <Container>
                <Grid my={1} >
                    <Image src={image13} alt={'logo'} style={{ width: '100%', height: '144px', borderRadius: '0.5rem' }} />
                </Grid>
            </Container>
        </Grid>
    )
}

export default EggBanner