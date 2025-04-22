import classNames from 'classnames/bind';
import styles from './SlideHome.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const cx = classNames.bind(styles);

const images = ['/banner1.png', '/banner2.png', '/banner3.png', '/banner4.png', '/banner5.png'];

function SlideHome() {
    return (
        <div className={cx('wrapper')}>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideHome;
