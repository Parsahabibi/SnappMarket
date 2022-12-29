import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';



const CardProductSwiper = ({
    bottom,
    left,
    title,
    image,
    Price,
    Weight,
    priceReduction,
    Discount,
    width,
    titleBtn,
    heightImage,
    widthImage
}: dataCardSliderType) => {
    const styling = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '200px'
    }
    return (
        <Grid bgcolor={'common.white'} sx={{ cursor: 'pointer', position: 'relative' }} borderRadius={'0.5rem'} height={"max-content"} width={width}
            px={2}>
            <Grid display='flex' justifyContent={'center'} my={1}>
                <Image src={image} alt={title} width={widthImage} height={heightImage} />
            </Grid>
            <Grid height={20} sx={styling}>
                <Typography display={{ xs: 'none', sm: 'flex' }} variant={'h3'} >{title}</Typography>
                <Typography variant={'h3'} sx={{ fontSize: '12px' }} display={{ xs: 'block', lg: 'none', sm: 'none' }}>{title}</Typography>
            </Grid>
            <Typography mt={3} variant='subtitle1'>{Weight}</Typography>
            <Grid display='flex' alignItems={'center'} gap={1} py={1.5}>
                <Typography variant='body2'>{Discount}</Typography>
                <Typography sx={{ textDecoration: 'line-through', fontSize: '1.2rem', fontWeight: '500' }}
                    color={'info.main'}>{priceReduction}</Typography>
            </Grid>
            <Grid display={{ xs: 'none', lg: 'flex', sm: 'flex' }} justifyContent={'space-between'}>
                <Typography display={{ xs: 'none' }} pt={1.2} sx={{ fontSize: '1.6rem' }} color={'common.black'} pb={2}>{Price}تومان</Typography>
                <ButtonProductCardSwiper title={titleBtn} icon={undefined} bgcolor={''} value={''} bottom={bottom}
                    left={left} />
            </Grid>
            <Box bgcolor={'common.'}
                color={'primary.main'}
                border={0.5}
                borderRadius={50}
                padding={1}
                sx={{
                    position: 'absolute',
                    width: 30,
                    height: 30,
                    cursor: 'pointer',
                    left: left, top: bottom,
                }}
                display={{ xs: 'flex', lg: 'none', sm: 'none' }}
                alignItems={'center'} justifyContent={'center'} >
                <AddIcon sx={{ width: 20, height: 20 }} />
            </Box>

        </Grid>
    )
}

export default CardProductSwiper