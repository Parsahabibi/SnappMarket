import { Button, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CardProductSwiper from '../CardProductSwiper/CardProductSwiper'
import { dataCard } from '../../../Data/DataCardProductSwiperV1/DataCardProductSwiperV1';
import backgroundImage from '../../../assets/Images/image15.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataBaseDairy } from '../../../DataBase/CategoryDairy/CategoryDairy'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container } from '@mui/system';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/Slice/Slice';


// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);


type Props = {
  title: string,
  color: string,
  x: number,
  y: number,
  Data:{}|[]|any
}

const Slider = ({ color, title, x, y,Data }: Props) => {
  const dispatch = useDispatch();
  const styling = {
    backgroundImage: `url('${backgroundImage.src}')`,
    width: "100%",
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
  const hoverStyle = {

  }

  const normalStyle = {
  }
  return (
    <Container>
      <Grid display={{ xs: 'none', sm: 'flex' }} flexDirection={'column'} style={styling} bgcolor={color} color={'common.white'} position={'relative'}>
        {page > 0 ?
          <Grid boxShadow={5} position={'absolute'} top={'45%'} right={15} display={'flex'} zIndex={99} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} color={'common.white'}>
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
            <SwiperSlide style={{ maxWidth: '30px' }}>
              <Grid height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Link href={'#'}>
                  <Typography variant='h2' color={'common.white'}>{title}</Typography>
                </Link>
              </Grid>
            </SwiperSlide>
            {Data.filter((item):any => (item.Discount != '')).slice(x, y).map((slide):any => (
              <SwiperSlide key={slide.id}>
                <Grid my={1} display={'flex'} alignItems={'flex-start'}> <CardProductSwiper title={slide.title} image={slide.image} price={slide.price} Weight={slide.Weight} priceReduction={slide.priceReduction} Discount={slide.Discount} id={slide.id} width={'23.4rem'} titleBtn={'افزودن به سبد'} widthImage={170} heightImage={170} bottom={'15%'} left={'50%'} hoverStyle={hoverStyle} normalStyle={normalStyle} {...slide} onClick={()=>dispatch(addItemToCart(slide))} /></Grid>
              </SwiperSlide>
            ))}
            <SwiperSlide >
              <Link href={'/categories'}>
                <Typography width={'95%'} bgcolor={'common.white'} mt={1} height={'31.5rem'} display={'flex'} sx={{ borderRadius: '5px', cursor: 'pointer' }} justifyContent={'center'} alignItems={'center'} color={'secondary.main'} >{'مشاهده بیشتر'}</Typography>
              </Link>
            </SwiperSlide>
          </Swiper>
          {page < 2 ?
            <Grid position={'absolute'} top={'45%'} left={15} zIndex={99} display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'primary.main'} borderRadius={'50%'} boxShadow={5} >
              <Button sx={{ color: 'common.white', pl: '13px' }} onClick={handleNextSlide}><ArrowBackIosIcon /></Button>
            </Grid>
            : ''}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Slider