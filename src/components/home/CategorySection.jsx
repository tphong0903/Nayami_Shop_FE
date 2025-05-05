import { useEffect, useState } from 'react'

import Slider from 'react-slick';
import Laptop from '~/assets/ImageCategoris/laptop.png';
import DienThoai from '~/assets/ImageCategoris/iphone-16-pro-max.png';
import ManHinh from '~/assets/ImageCategoris/man-hinh-removebg-preview.png';
import BanPhim from '~/assets/ImageCategoris/ban-phim-removebg-preview.png';
import Chuot from '~/assets/ImageCategoris/chuot-removebg-preview.png';
import TaiNghe from '~/assets/ImageCategoris/tai-nghe-removebg-preview.png';
import Loa from '~/assets/ImageCategoris/loa-removebg-preview.png';
import Camera from '~/assets/ImageCategoris/camera-removebg-preview.png';
import { Link, useNavigate } from 'react-router-dom';
export default function CategorySection() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  function getSlidesToShow() {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 3;
    } else {
      return 6;
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

  const navigate = useNavigate();

  const handleShopClick = (id, name) => {
    const Id = id;
    const Name = name;
    navigate(`/shop?categoryId=${Id}&categoryName=${encodeURIComponent(Name)}`);
  };
  return (
    <section className="category-section-3">
      <div className="container-fluid-lg">
        <div className="title">
          <h2>Danh mục</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="category-slider-1 arrow-slider wow fadeInUp product-wrapper">
              <Slider {...settings}>
                <div className="category-box-list">
                  <Link to={`/shop?categoryId=1&categoryName=${encodeURIComponent('Laptop')}`} className="category-name">
                    <h4>Laptop</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=1&categoryName=${encodeURIComponent('Laptop')}`}>
                      <img
                        src={Laptop}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </Link>
                    <button onClick={() => handleShopClick(1, 'Laptop')}
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
                <div className="category-box-list">
                  <Link to={`/shop?categoryId=2&categoryName=${encodeURIComponent('Điện thoại')}`} className="category-name">
                    <h4>Điện thoại</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=2&categoryName=${encodeURIComponent('Điện thoại')}`}>
                      <img
                        src={DienThoai}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </Link>
                    <button onClick={() => handleShopClick(2, 'Điện thoại')}
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
                <div className="category-box-list">
                  <Link to={`/shop?categoryId=3&categoryName=${encodeURIComponent('Màn hình')}`} className="category-name">
                    <h4>Màn hình</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=3&categoryName=${encodeURIComponent('Màn hình')}`}>
                      <img src={ManHinh} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(3, 'Màn hình')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>

                <div className="category-box-list">
                  <Link to={`/shop?categoryId=4&categoryName=${encodeURIComponent('Bàn phím')}`} className="category-name">
                    <h4>Bàn phím</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=4&categoryName=${encodeURIComponent('Bàn phím')}`}>
                      <img src={BanPhim} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(4, 'Bàn phím')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>

                <div className="category-box-list">
                  <Link to={`/shop?categoryId=5&categoryName=${encodeURIComponent('Chuột')}`} className="category-name">
                    <h4>Chuột</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=5&categoryName=${encodeURIComponent('Chuột')}`}>
                      <img src={Chuot} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(5, 'Chuột')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>

                <div className="category-box-list">
                  <Link to={`/shop?categoryId=6&categoryName=${encodeURIComponent('Tai nghe')}`} className="category-name">
                    <h4>Tai nghe</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=6&categoryName=${encodeURIComponent('Tai nghe')}`}>
                      <img src={TaiNghe} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(6, 'Tai nghe')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>

                <div className="category-box-list">
                  <Link to={`/shop?categoryId=7&categoryName=${encodeURIComponent('Loa')}`} className="category-name">
                    <h4>Loa</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=7&categoryName=${encodeURIComponent('Loa')}`}>
                      <img src={Loa} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(7, 'Loa')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>

                <div className="category-box-list">
                  <Link to={`/shop?categoryId=8&categoryName=${encodeURIComponent('Camera')}`} className="category-name">
                    <h4>Camera</h4>
                  </Link>
                  <div className="category-box-view">
                    <Link to={`/shop?categoryId=8&categoryName=${encodeURIComponent('Camera')}`}>
                      <img src={Camera} className="img-fluid lazyload" alt="" />
                    </Link>
                    <button
                      className="btn shop-button"
                      onClick={() => handleShopClick(8, 'Camera')}
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
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
