import React from 'react';
import images1 from '../../Images/Podcast Available On.png';
import images2 from '../../Images/Apple Podcast.png';
import images3 from '../../Images/Spotify.png';
import images4 from '../../Images/Sound Cloud.png';
import images5 from '../../Images/Google Podcast.png';
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Brands = () => {
  const images = [images1, images2, images3, images4, images5];

  return (

    <div className='containerBrands'>
      <div className='Image'>
        <Swiper
           spaceBetween={100}
          loop
          slidesPerView={5}
          autoplay={{
            delay: 500
          }}
          modules={[Autoplay]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            610: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            968: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
          }}
        >
          {images.map((image, index) => (

            <SwiperSlide key={index}>
              <article>
                <img src={image} alt={`Gallery Image ${index}`} />
              </article>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brands;
