import axios from 'axios'
import { useEffect, useState } from 'react'
import HinhBanner from '~/assets/images/fashion/home-banner/1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomeSection({ promotion }) {

  const swiperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }

  return (
    <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
      <div className="container p-0">
        <div className="row">
          <div className="col-12">
            {promotion?.length > 0 && (<Swiper
              style={swiperStyle}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={promotion.length > 1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {
                promotion?.length > 0
                  ?
                  promotion.map((item, index) => {
                    return <SwiperSlide key={index}>
                      <div className="home-contain rounded-0 p-0">
                        <img
                          width="100%"
                          src={item?.promotionImages[0]?.url}
                          style={{ height: '670px', width: '100%', objectFit: 'cover' }}
                          className="img-fluid bg-img lazyload"
                          alt="Empty"
                        />
                        <div style={{ position: 'absolute !important' }} className="home-detail home-big-space p-center-left home-overlay ">
                          <div className="container-fluid-lg">
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })
                  : <></>
              }

            </Swiper>)}
          </div>
        </div>
      </div>
    </section>


  )
}
