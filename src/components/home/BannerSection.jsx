import Hinh1 from '~/assets/images/cake/banner/11.jpg'

export default function BannerSection({ promotion }) {
  return (
    <section>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="home-contain"
              style={{
                backgroundImage: { Hinh1 },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'block'
              }}>
              <a href="#">
                <img
                  src={promotion[Math.floor(Math.random() * promotion.length)]?.promotionImages[0]?.url}
                  className="bg-img lazyload"
                  alt=""
                  width="100%"
                  style={{ WebkitFilter: 'blur(2px) !important' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
