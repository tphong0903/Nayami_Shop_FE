
import Slider from 'react-slick';
import Phong from '~/assets/images/tphong.jpg';
import NDQ from '~/assets/images/ndq.jpg';
import HDQ from '~/assets/images/hdq.jpg';
import Bao from '~/assets/images/bao.jpg';
import { useEffect, useState } from 'react';
export default function TeamSection() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 4;
    } else {
      return 4;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <section className="team-section section-lg-space">
      <div className="container-fluid-lg">
        <div className="about-us-title text-center">
          <h4 className="text-content">Team Phát Triển</h4>
          <h2 className="center">Thành Viên Nayami Team</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="slider-user product-wrapper">
              <Slider {...settings}>
                <div>
                  <div className="team-box">
                    <div className="team-iamge">
                      <img
                        src={Phong}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                    <div className="team-name">
                      <h3>Lê Thanh Phong</h3>
                      <h5>Developer</h5>
                      <p></p>
                      <ul className="team-media">
                        <li>
                          <a href="https://www.facebook.com/thnhphng934" className="fb-bg">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/tphong0903" className="pint-bg">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/_p.hng/" className="insta-bg">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-box">
                    <div className="team-iamge">
                      <img
                        src={NDQ}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                    <div className="team-name">
                      <h3>Nguyễn Đăng Quang</h3>
                      <h5>Developer</h5>
                      <ul className="team-media">
                        <li>
                          <a href="https://www.facebook.com/quangdang1412" className="fb-bg">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/quangdang1412" className="pint-bg">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" className="insta-bg">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-box">
                    <div className="team-iamge">
                      <img
                        src={HDQ}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                    <div className="team-name">
                      <h3>Hà Đăng Quang</h3>
                      <h5>Developer</h5>
                      <ul className="team-media">
                        <li>
                          <a href="https://www.facebook.com/" className="fb-bg">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/quangdang48" className="pint-bg">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" className="insta-bg">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-box">
                    <div className="team-iamge">
                      <img
                        src={Bao}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                    <div className="team-name">
                      <h3>Trần Đinh Gia Bảo</h3>
                      <h5>Developer</h5>
                      <ul className="team-media">
                        <li>
                          <a href="https://www.facebook.com/baostar2712" className="fb-bg">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/BaoStar0990" className="pint-bg">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" className="insta-bg">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

