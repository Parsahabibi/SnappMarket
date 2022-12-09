import { Button, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CardProductSwiper from '../CardProductSwiper/CardProductSwiper'
import { dataCard } from '../../../Data/DataCardProductSwiperV1/DataCardProductSwiperV1';
import backgroundImage from '../../../assets/Images/image15.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container } from '@mui/system';



// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);


type Props = {
  title:String,
  color:String
}

const Slider = ({title , color}: Props) => {

  const styling = {
    backgroundImage: `url('${backgroundImage.src}')`,
    width: "100%",
    height: "400px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  }
  const [page, setPage] = useState(0)
  const swiperRef = useRef<any>(null)

  const handleNextSlide = useCallback(() => {
    page === dataCard.length + 7 ? setPage(prev => 0) : setPage(prev => prev + 7)
  }, [page])
  const handlePrevSlide = useCallback(() => {
    page === 0 ? setPage(dataCard.length - 7) : setPage(prev => prev - 7)
  }, [page])
  useEffect(() => {
    swiperRef.current.swiper.slideTo(page)
  }, [page])
  return (
    <Container>
      <Grid marginY={3} style={styling} bgcolor={color} color={'common.white'} position={'relative'}>
        {page > 0 ?
          <Grid position={'absolute'} top={'45%'} right={15} display={'flex'} zIndex={99} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} color={'common.white'}>
            <Button sx={{ color: 'common.white' }} onClick={handlePrevSlide}><ArrowForwardIosIcon /></Button>
          </Grid>
          : ''}
        <Grid display={'flex'} justifyContent={'space-between'} >
          <Swiper
              breakpoints={{
                720: {
                  slidesPerView: 3
                },
                900: {
                  slidesPerView: 3.5
                },
                1024: {
                  slidesPerView: 4
                },
                1200: {
                  slidesPerView: 4.8
                },
                1440: {
                  slidesPerView: 4.8
                },
              }}
            ref={swiperRef}
            virtual
          >
            <SwiperSlide >
              <Typography height={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'} >{title}</Typography>
            </SwiperSlide>

            {dataCard.map(slide => (
              <SwiperSlide key={slide.id}>
                <Grid mt={1} display={'flex'} alignItems={'center'}> <CardProductSwiper title={slide.title} image={slide.image} Price={slide.Price} Weight={slide.Weight} priceReduction={slide.priceReduction} Discount={slide.Discount} id={0} /></Grid>
              </SwiperSlide>
            ))}

            <SwiperSlide >
              <Typography width={'95%'} bgcolor={'common.white'} mt={1} height={'380px'} display={'flex'} sx={{ borderRadius: '5px' , cursor:"pointer" }} justifyContent={'center'} alignItems={'center'} color={'secondary.main'} >{'مشاهده بیشتر'}</Typography>
            </SwiperSlide>

          </Swiper>
          {page < 2 ?
            <Grid position={'absolute'} top={'45%'} left={15} zIndex={99} display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} >
              <Button sx={{ color: 'common.white' }} onClick={handleNextSlide}><ArrowBackIosIcon /></Button>
            </Grid>
            : ''}
        </Grid>


      </Grid>
    </Container>
  )
}

export default Slider