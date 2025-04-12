import axios from 'axios'
import { useEffect, useState } from 'react'
import HinhBanner from '~/assets/images/fashion/home-banner/1.jpg'
export default function HomeSection() {

  const [promotion, SetPromotions] = useState()

  useEffect(() => {

    axios.get("/api/promotions")
      .then(response => {
        console.log(response.data.data)
        SetPromotions(response.data.data[0])
      })

  }, [])

  useEffect(() => {
    console.log(promotion)
  }, [promotion])

  return (
    <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="slider-animate">
              <div>
                <div className="home-contain rounded-0 p-0">
                  <img
                    src={promotion?.promotionImages[0].url}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""
                  />
                  <div style={{ position: 'absolute !important' }} className="home-detail home-big-space p-center-left home-overlay ">
                    <div className="container-fluid-lg">
                      <div>
                        <h6 className="ls-expanded text-uppercase text-danger">
                          {/* Weekend Special offer */}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
