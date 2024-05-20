import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Optional: Import core Swiper styles
import 'swiper/css/navigation'; // Optional: Import navigation styles
import 'swiper/css/pagination'; // Optional: Import pagination styles
import styles from './Homebanner.module.css'; // Import custom styles (optional)

const mobileBannerImages = [
    { id: 1, url: '/images/mobile/image1.jpg', altText: 'Mobile Banner Image 1' },
    { id: 2, url: '/images/mobile/image2.jpg', altText: 'Mobile Banner Image 2' },
];


const desktopBannerImages = [
    { id: 1, url: '/images/desktop/image1.jpg', altText: 'Desktop Banner Image 1' },
    { id: 2, url: '/images/desktop/image2.jpg', altText: 'Desktop Banner Image 2' },
];

const HomeBanner = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [bannerImages, setBannerImages] = useState([]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth <= 768) {
            setBannerImages(mobileBannerImages);
        } else {
            setBannerImages(desktopBannerImages);
        }
    }, [windowWidth]);

    const swiperOptions = {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        effect: 'slide',
    };

    return (
            <Swiper {...swiperOptions} >

                {bannerImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className={styles.imageWrap}>
                            <img src={image.url} alt={image.altText} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default HomeBanner;