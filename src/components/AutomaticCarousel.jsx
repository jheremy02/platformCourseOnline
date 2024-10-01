import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import CommentCard from './CommentCard';
function AutomaticCarousel() {
    return (
        <div className="w-full py-14 flex justify-center dark:bg-slate-800 ">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 0, // No delay
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // Pausa al pasar el mouse por encima
                }}
                speed={3000} // Velocidad del carrusel
                loop={true} // Carrusel infinito
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CommentCard></CommentCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CommentCard></CommentCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CommentCard></CommentCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CommentCard></CommentCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CommentCard></CommentCard>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AutomaticCarousel