import Hinh1 from '~/assets/images/cake/banner/11.jpg'

export default function BannerSection() {
  return (
    <section>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="home-contain hover-effect"
              style={{
                backgroundImage: { Hinh1 },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'block'
              }}>
              <img
                src={Hinh1}
                className="bg-img blur-up lazyload"
                alt=""
                style={{ WebkitFilter: 'blur(2px) !important' }}
              />
              <div style={{ position: 'absolute !important' }} className="home-detail p-center  text-center">
                <div>
                  <h3 className="text-danger text-uppercase fw-bold mb-0">
                    limited Time Offer
                  </h3>
                  <h2 className="theme-color text-pacifico fw-normal mb-0 super-sale text-center">
                    Super
                  </h2>
                  <h2 className="home-name text-uppercase">sale</h2>
                  <h3 className="text-pacifico fw-normal text-content text-center">
                    www.fastkart.com
                  </h3>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >


  )
}
