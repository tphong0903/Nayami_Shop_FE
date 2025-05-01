import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Swal from 'sweetalert2'
import { Rating } from '@mui/material';
import { formatCurrency } from '~/utils/formatCurrency';
import { addToCart } from '~/apis/addtoCart';
// var settings = {
//   dots: true,
//   infinite: true,
//   arrows: false,
//   speed: 500,
//   slidesToShow: 6,
//   slidesToScroll: 1
// };


export default function ReletedProductSection({ product }) {
  const [listRalatedProduct, setListRalatedProduct] = useState([]);
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
  useEffect(() => {
    if (!product) {
      return;
    }
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/products/categories/${product.categoryDTO.id}`)
      .then((response) => {
        setListRalatedProduct(response.data.data.slice(0, 10))
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải sản phẩm.', 'error')
      })
  }, [product]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Releted Product Section Start */}
      <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Các sản phẩm liên quan</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-6_1  arrow-slider product-wrapper">
                <Slider {...settings} >
                  {listRalatedProduct.length > 0 && listRalatedProduct.map((v, index) => (
                    <div key={index}>
                      <div className="product-box-3 wow fadeInUp" >
                        <div className="product-header" >
                          <div className="product-image">
                            <Link to={`/product-detail/${v.id}`}>
                              <img
                                src={v.listImage[0]}
                                className="img-fluid  lazyload"
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="product-footer">
                          <div className="product-detail" >
                            <Link to={`/product-detail/${v.id}`}>
                              <h5 className="name">{v.name}</h5>
                            </Link>
                            <div className=" mt-2">
                              <Rating name="read-only" size='small' value={v.ratingAvg} readOnly />
                            </div>
                            <h5 className="price">
                              {v?.discountDTO && (
                                <>
                                  <del>{formatCurrency(v.unitPrice)}</del>
                                  <br />
                                </>
                              )}
                              <span className="theme-color"> {formatCurrency(v.unitPrice * (100 - (v?.discountDTO?.percentage || 0)) / 100)}</span>
                            </h5>
                            <br />
                            <button
                              onClick={() => addToCart(v.id, 1)}
                              className="btn btn-animation btn-md fw-bold mend-auto cart-button w-100"
                            >
                              Giỏ hàng <i className="fa-solid fa-arrow-right icon" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div >
      </section >
      {/* Releted Product Section End */}
    </>
  );
}
