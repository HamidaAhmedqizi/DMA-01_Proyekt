import React from 'react'
import CommentsItem from '../CommentsItem/index'
import comments from '../../Data/CommetData'
import './style.css'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CommentsC = () => {
  return (
    <section className='comment'>
      <div className='comment_container'>
        <div className="comment_top">
          <div className="comments-top_container_left">
            <h2 className='com-h2'>Dinləyicilərimizin rəyləri</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mus cras lacus tellus morbi viverra
              suspendisse ornare. Sit volutpat, volutpat ut
              netus malesuada enim penatibus non aliquet.y
            </p>
          </div>

        </div>
   

          <div className="comments_container_items">
            <div className="comments_container-bottom">
              <Swiper className='swipper' navigation={true} modules={[Navigation]}
                spaceBetween={60}
                slidesPerView={3}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >

                {
                  comments.map(({id,image,name,desc}) => {
                    return (
                      <SwiperSlide key={id}>
                        <CommentsItem id={id} image={image} name={name} desc={desc} />
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>


            </div>

          </div>

        </div>

    
    </section>

  )
}

export default CommentsC