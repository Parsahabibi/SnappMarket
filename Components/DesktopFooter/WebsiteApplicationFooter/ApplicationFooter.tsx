import { Grid, Typography } from '@mui/material'
import { padding, style } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { dataApplicationFooter } from '../../../Data/DataSendGoodsFooter'

type Props = {}

const ApplicationFooter = (props: Props) => {
    return (
        <Grid marginY={2} borderBottom={1} sx={{ direction: 'rtl' , borderBottomColor:'rgb(238, 238, 238)' }} container>
            <Grid display={'flex'} item container xs={12}>
                <Grid item container xs={12}sm={8} md={6} lg={8} display={'flex'} flexDirection={'column'} justifyContent={'center'} pl={10}>
                    <Grid display={'flex'} flexDirection={'column'}>
                        <Typography sx={{fontSize:'17px',fontWeight:'bold'}}>{'دانلود اپلیکیشن'}</Typography>
                        <Typography py={2} sx={{fontSize:'14px',color:'rgb(117, 117, 117)'}}>{'اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید'}</Typography>
                    </Grid>
                    <Grid display={'flex'}flexWrap={'wrap'} gap={1.5}>
                        {dataApplicationFooter.slice(0, 4).map(item => (
                            <Image key={item.id} src={item.image} alt={item.title} width={item.width} height={item.height} />
                        ))}
                    </Grid>
                   
                </Grid>
                <Grid item xs={12} sm={4} md={6}lg={4} display={'flex'}>
                    {dataApplicationFooter.slice(4, 7).map(item => (
                        <Image key={item.id} src={item.image} alt={item.title} width={250}/>
                    ))}
                   
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ApplicationFooter