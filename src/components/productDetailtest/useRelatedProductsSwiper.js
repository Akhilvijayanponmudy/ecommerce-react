import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Style from './useRelatedProductsSwiper.module.css';
const SwiperCarouselSildes = ({ slides }) => {
    return (
        <Swiper spaceBetween={50} slidesPerView={2} className={Style.relatedswiperWrap}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.imageUrl}>
                    <figure className={Style.relatedProductWrap}>
                        <img src={slide.imageUrl} alt={slide.caption || 'Slide Image'} />
                    </figure>
                    {slide.caption && <p className={Style.pTitle}>{slide.caption}</p>}
                    {slide.Rate && <p className={Style.pRate}>Rs. {slide.Rate}</p>}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCarouselSildes;
