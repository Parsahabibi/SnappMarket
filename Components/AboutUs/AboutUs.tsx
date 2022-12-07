import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <Container>
            <Grid item display={{xs:'none',md:'flex'}} flexDirection={'column'} sx={{direction:'rtl',border:'1px solid rgba(163, 163, 163, 0.25)',padding:'30px 15px 30px 10px'}} bgcolor={'common.white'} borderRadius={1} >
                <Typography variant='h1'sx={{lineHeight:1.5,fontSize:'1.2rem',color:'rgb(117, 117, 117)',fontWeight:'bold'}}>
                    {'سوپرمارکت اینترنتی اسنپ مارکت'}
                </Typography>
                <Typography  my={2} sx={{lineHeight:1.5,fontSize:'0.98rem',color:'rgb(117, 117, 117)'}}>
                    {'اسنپ‌مارکت جهت تسریع و تسهیل فرایند خرید اینترنتی و خدمت‌رسانی به هم‌وطنان عزیز، همکاری خود با مجموعه فروشگاه‌های زنجیره‌ای هایپراستار، سوپرمارکت‌ها و فروشگاه‌های لوازم آرایشی و بهداشتی مایلی را آغاز کرده و در زمینه فروش آنلاین کالاهای سوپرمارکتی و سایر مایحتاج روزمره و کالاهای آرایشی و بهداشتی مشغول به خدمت‌رسانی به هم‌میهنان عزیز در برخی از کلان‌شهرهای ایران است.'}
                </Typography>
                <Typography my={2} sx={{lineHeight:1.5,fontSize:'0.98rem',color:'rgb(117, 117, 117)'}}>
                    {'هدف اسنپ‌مارکت بر این است تا با ارائه کالاهای باکیفیت و در عین حال با قیمت مناسب، امکان خرید را برای کلیه اقشار جامعه مهیا سازد.'}
                </Typography>
                <Typography sx={{lineHeight:1.5,fontSize:'0.98rem',color:'rgb(117, 117, 117)'}}>
                    {'سوپرمارکت اینترنتی اسنپ‌مارکت بیش از ۵۰۰۰ کالای متنوع در دسته‌بند‌ی‌های گوناگون نظیر لبنیات، خواربار، میوه و سبزیجات تازه، نان، مواد پروتئینی، لوازم بهداشتی و آرایشی ... را به صورت آنلاین عرضه می‌کند و گستردگی این محصولات این امکان را به کاربران می‌دهد که تمامی اجناس مورد نیاز خود را به صورت یکباره تهیه کرده و با توجه به موقعیت جغرافیایی ثبت شده در اپلیکیشن و یا وب‌سایت، اجناس خریداری شده را در زمانی کوتاه و از نزدیکترین شعبه هایپراستار، درب منزل خود تحویل بگیرند.'}
                </Typography>
            </Grid>
        </Container>
    )
}

export default AboutUs