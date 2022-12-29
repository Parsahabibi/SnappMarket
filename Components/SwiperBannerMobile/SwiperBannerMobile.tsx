import { Grid } from '@mui/material'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

// import images
import image10 from '../../assets/Images/ImageBanner/image10.jpg'
import image11 from '../../assets/Images/ImageBanner/image11.jpg'
import image12 from '../../assets/Images/ImageBanner/image12.jpg'
import Image from 'next/image';
type Props = {}

const SwiperBannerMobile = (props: Props) => {
    return (
        <Grid display={{xs:'flex',sm:'none'}}>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1.3
                    },
                    375: {
                        slidesPerView: 1.5
                    },
                    425: {
                        slidesPerView: 1.7
                    },
                }}
                
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                
             
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Scrollbar, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <Grid width={236}>
                        <Image src={image10} alt={'logo'} style={{ width: '100%', height: 120, borderRadius: '1rem' }} />
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid width={236}>
                        <Image src={image11} alt={'logo'} style={{ width: '100%', height: 120, borderRadius: '1rem' }} />
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid width={236}>
                        <Image src={image12} alt={'logo'} style={{ width: '100%', height: 120, borderRadius: '1rem' }} />
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}

export default SwiperBannerMobile