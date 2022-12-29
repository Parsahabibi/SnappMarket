import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BottomFooter from './BottomFooter/BottomFooter'
import SendGoodsFooter from './SendGoodsFooter/SendGoodsFooter'
import ApplicationFooter from './WebsiteApplicationFooter/ApplicationFooter'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box} from "@mui/system";

type Props = {}

const DesktopFooter = (props: Props) => {
    return (
       <Grid bgcolor={"common.white"} mt={3} display={{xs:'none',sm:'flex' , md:'flex'}}>
         <Container>
            <SendGoodsFooter />
            <ApplicationFooter />
            <BottomFooter />
            <Grid mb={3} pr={40}
                  display={'flex'} flexDirection={'row-reverse'}
                  justifyContent={'center'}
                  gap={3}
                  color={'rgb(117,117,117)'}
                  alignItems={'center'}>
             <Box width={"max-content"}
                  display={"flex"}
                  gap={2}
                  borderTop={1}
                  paddingTop={1}
                  paddingX={2}
                  sx={{borderTopColor: 'rgb(238, 238, 238)'}}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexDirection={"row-reverse"}>
                 <InstagramIcon style={{fontSize:'3rem'}}/>
                 <TwitterIcon style={{fontSize:'3rem'}}/>
                 <Typography sx={{fontSize:'1.5rem'}}>
                     {'info@snapp.market'}
                 </Typography>
             </Box>
            </Grid>
        </Container>
       </Grid>
    )
}

export default DesktopFooter