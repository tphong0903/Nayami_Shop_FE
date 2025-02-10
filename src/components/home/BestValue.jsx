import Hinh from '~/assets/images/veg-3/value/1.png'

export default function BestValue() {
  return (
    <section>
      <div className="container-fluid-lg">
        <div className="title">
          <h2>Best Value</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="three-slider arrow-slider ratio_65">
              <div>
                <div className="offer-banner hover-effect">
                  <img
                    src={Hinh}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""
                  />
                  <div className="banner-detail">
                    <h5 className="theme-color">Buy more, Save more</h5>
                    <h6>Fresh Vegetable</h6>
                  </div>
                  <div className="offer-box">
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn-category btn theme-bg-color text-white"
                    >
                      View Offer
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="offer-banner hover-effect">
                  <img
                    src={Hinh}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""
                  />
                  <div className="banner-detail">
                    <h5 className="theme-color">Save More!</h5>
                    <h6>Organic Vegetable</h6>
                  </div>
                  <div className="offer-box">
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn-category btn theme-bg-color text-white"
                    >
                      View Offer
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="offer-banner hover-effect">
                  <img
                    src={Hinh}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""
                  />
                  <div className="banner-detail">
                    <h5 className="theme-color">Hot Deals!</h5>
                    <h6>Fruita &amp; Vagerables</h6>
                  </div>
                  <div className="offer-box">
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn-category btn theme-bg-color text-white"
                    >
                      View Offer
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="offer-banner hover-effect">
                  <img
                    src={Hinh}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""
                  />
                  <div className="banner-detail">
                    <h5 className="theme-color">Buy more, Save more</h5>
                    <h6>Fruita &amp; Vagerables</h6>
                  </div>
                  <div className="offer-box">
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn-category btn theme-bg-color text-white"
                    >
                      View Offer
                    </button>
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
