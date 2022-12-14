import { Grid } from '@mui/material'
import React from 'react'
import { dataMobileCardCategory } from '../../Data/DataMobileCategoryCard/DataMobileCategoryCard'
import CardProductSwiper from '../ProductSwiper Version1/CardProductSwiper/CardProductSwiper'
import HeaderMobileCategoryPage from './HeaderMobileCategoryPage/HeaderMobileCategoryPage'
import AddIcon from '@mui/icons-material/Add';
import MobileTitleCategory from './MobileTitleCategory/MobileTitleCategory'

type Props = {}

const MobileCategoryPage = (props: Props) => {
    return (
        <Grid display={{xs:'flex',sm:'none'}} flexDirection={'column'}>
            <HeaderMobileCategoryPage />
            <MobileTitleCategory title={'محصولات آرایشی'} link={'/'} />
            <Grid  display={'flex'}  sx={{overflowX:'scroll'}} px={'1.1rem'}>
            {dataMobileCardCategory.slice(0,7).map(item => (
                <Grid ml={'1rem'} >
                    <CardProductSwiper bottom={'85%'} left={'-10%'} heightImage={100}widthImage={100} titleBtn={<AddIcon/>} width='130px' title={item.title} image={item.image} Price={item.Price} Weight={item.Weight} priceReduction={item.priceReduction} Discount={item.Discount}/>
                </Grid>
            ))}
            </Grid>
            <MobileTitleCategory title={'بهداشت ومراقبت صورت'} link={'/'} />
            <Grid  display={'flex'}  sx={{overflowX:'scroll'}}px={'1.1rem'}>
            {dataMobileCardCategory.slice(7,15).map(item => (
                <Grid ml={'1rem'} >
                    <CardProductSwiper bottom={'85%'} left={'-10%'} heightImage={100}widthImage={100} titleBtn={<AddIcon/>} width='130px' title={item.title} image={item.image} Price={item.Price} Weight={item.Weight} priceReduction={item.priceReduction} Discount={item.Discount}/>
                </Grid>
            ))}
            </Grid>
           
        </Grid>
    )
}

export default MobileCategoryPage