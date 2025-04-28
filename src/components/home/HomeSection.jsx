import axios from 'axios'
import { useEffect, useState } from 'react'
import HinhBanner from '~/assets/images/fashion/home-banner/1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
            <Swiper
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
                          className="img-fluid bg-img lazyload"
                          alt="Empty"
                        />
                        <div style={{ position: 'absolute !important' }} className="home-detail home-big-space p-center-left home-overlay ">
                          <div className="container-fluid-lg">
                            {/* <div>
                                <h6 className="ls-expanded text-uppercase text-danger">
                                  Weekend Special offer
                                </h6>
                                <h1 className="heding-2 text-danger">{promotion?.title}</h1>
                                <h5 className="text-content text-secondary">
                                  {promotion?.description}
                                </h5>
                                <button
                                  onclick="location.href = 'shop-left-sidebar.html';"
                                  className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                                >
                                  Shop Now <i className="fa-solid fa-arrow-right icon" />
                                </button>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })
                  // setTimeout(() => {

                  // }, 500)

                  : <></>
              }

            </Swiper>
            {/* <div className="slider-animate">
              <div>

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>


  )
}
