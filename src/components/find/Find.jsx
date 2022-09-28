import React from 'react';
import styles from './Find.module.css';
import Card from './Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
            <p>
                <span>Explore the world's largest car sharing marketplace</span>
            </p>
        </div>
      </div>
      <div className={styles.slider}>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <Card 
                image='https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&
                        ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                make='Audi' />
            
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
    </Swiper>
      </div>
    </div>
  )
}

export default Find;
