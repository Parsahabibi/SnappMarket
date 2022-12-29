import { Container, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';



import dataCategory from "./DataCategoryMobileMenu"
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem';
interface Props {
  position:string|any,
  display:string,
  bgcolor:string|any,
  pb:number|string,
  ptop:number|string,
}

const Category = ({position, display,bgcolor,pb,ptop}: Props) => {
    // const padding = useMediaPredicate("(max-width: 321px)");
    return (
        <Grid display={{xs:'flex',sm:'none'}} flexDirection={'column'}>
            <Grid zIndex={99} container position={position} bgcolor={bgcolor} pt={2} pb={pb}>
                <Grid sx={{ display: display, alignItems: "center", justifyContent: "center" , position:"absolute" }} pr={2.5}>
                    <ArrowForwardIcon style={{ width: 20, height: 20 }} />
                </Grid>
                <Grid pr={"37.5%"} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center"}} variant='h3'>دسته بندی ها</Typography>
                </Grid>
            </Grid>
            <Container>
                <Grid container justifyContent={"center"} pt={ptop} pb={9.5} zIndex={0}>
                    {
                        dataCategory.map(item =>
                            <Grid container item xs={4} key={item.id}>
                                <Grid container alignItems={"center"} justifyContent={"center"}>
                                    <Image style={{ position: "relative" }} width={100} height={100} src={item.image} alt={"labaniat"} />
                                    <Grid mt={'-50px'} container width={"90%"} >
                                        <Grid container alignItems={"center"} justifyContent={"center"} pt={3.9} width={'100%'} height={'8.2rem'} borderRadius={'1.6rem'} bgcolor={'rgb(255,255,255)'}>
                                            <Typography>{item.title}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
            <MobileMenuItem page='category'/>
        </Grid>

    )
}

export default Category
