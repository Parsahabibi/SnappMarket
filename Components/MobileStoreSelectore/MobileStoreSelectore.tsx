import React from 'react'
import MobileStoreSelectoreCard from './MobileStoreSelectoreCard/MobileStoreSelectoreCard'
import { Divider, Grid, Typography } from '@mui/material'
import { dataStoreSelectoreCard, dataStoreSelectoreSendCard } from '../../Data/DataMobileStoreSelectoreCard/DataMobileStoreSelectoreCard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/system';
import ButtonProductCardSwiper from '../ButtonProductCardSwiper/ButtonProductCardSwiper';
import CardStore from './MobileStoreSelectoreCard/CardStore';
type Props = {}

const MobileStoreSelectore = (props: Props) => {

  return (
    <Grid display={{xs:'flex' ,sm:'none'}} flexDirection={'column'}>
      <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} m={'1.5rem 0px 0.9rem'} px={'2.4rem'}>
        <Grid display={'flex'} gap={0.5} m={'0px 0.4rem 0px 0rem'} justifyContent={'center'} alignItems={'center'} >
          <Typography maxWidth={'13.4rem'} fontSize={'1.4rem'} fontWeight={500}>{'اطراف شما'}</Typography>
          <Typography><KeyboardArrowDownIcon sx={{ width: '30px', height: '30px' }} /> </Typography>
        </Grid>
        <Grid>
          <CloseIcon sx={{ width: '25px', height: '25px' }} />
        </Grid>
      </Grid>
      <Divider />
      <Typography px={'2.4rem'} fontSize={'1.6rem'} mt={3.1} mb={4.5} fontWeight={500}>{'فروشگاه خود را انتخاب نمایید'}</Typography>
      <Grid>
        <Grid px={'2.4rem'}>
          <Grid position={'relative'}>
            <Grid zIndex={1000} mx={0.8}>
              {dataStoreSelectoreCard.map(item => (
                <MobileStoreSelectoreCard key={item.id} title={item.title} image={item.image} dis={item.dis} Discount={item.Discount} bgcolor={item.bgcolor} bgcolor2={item.bgcolor2} backgroundimage={item.backgroundimage}/>
              ))}
            </Grid>
            {dataStoreSelectoreSendCard.slice(0,1).map(item => (
              <CardStore title={item.title} dis={item.dis} top={'200px'}bgcolor={item.bgcolor}/>
            ))}
            {dataStoreSelectoreSendCard.slice(1, 2).map(item => (
               <CardStore title={item.title} dis={item.dis} top={'400px'}bgcolor={item.bgcolor}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default MobileStoreSelectore