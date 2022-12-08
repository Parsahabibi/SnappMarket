import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BottomFooter from './BottomFooter/BottomFooter'
import SendGoodsFooter from './SendGoodsFooter/SendGoodsFooter'
import ApplicationFooter from './WebsiteApplicationFooter/ApplicationFooter'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
type Props = {}

const DesktopFooter = (props: Props) => {
    return (
       <Grid display={{xs:'none',md:'flex'}}>
         <Container>
            <SendGoodsFooter />
            <ApplicationFooter />
            <BottomFooter />
            <Grid mb={3} pr={40} display={'flex'}  justifyContent={'center'} gap={4} color={'rgb(117,117,117)'} alignItems={'center'}>
                <InstagramIcon />
                <TwitterIcon />
                <Typography sx={{fontSize:'0.8rem'}}>
                    {'info@snapp.market'}
                </Typography>
            </Grid>
        </Container>
       </Grid>
    )
}

export default DesktopFooter