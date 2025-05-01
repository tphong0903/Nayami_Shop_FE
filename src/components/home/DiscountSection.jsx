import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import DealTimer from '../product/DealTimer';
import { formatCurrency } from '~/utils/formatCurrency';

export default function DiscountSection({ ref }) {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [listDiscountProducts, setListDiscountProducts] = useState([]);

  function getSlidesToShow() {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 3;
    } else {
      return 3;
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
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/products/discounts`)
      .then((response) => {
        setListDiscountProducts(response.data.data.sort((a, b) => b.discount - a.discount).slice(0, 6));
        if (slidesToShow > listDiscountProducts.length)
          setSlidesToShow(listDiscountProducts.length)
      })
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <section className="deal-section" ref={ref}>
      <div className="container-fluid-lg">
        <div className="title">
          <h2>Khuyến mãi</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="three-slider-1 arrow-slider product-wrapper">
              <Slider {...settings}>
                {listDiscountProducts.map(v => (
                  <div key={v.id}>
                    <div className="deal-box wow fadeInUp" >
                      <Link
                        to={`/product-detail/${v.id}`}
                        className="category-image order-sm-2"
                      >
                        <img
                          src={v.listImage[0]}
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="deal-detail order-sm-1 product-section">
                        <button className="buy-box btn theme-bg-color text-white btn-cart">
                          <i className="iconly-Buy icli m-0" />
                        </button>
                        <div className="hot-deal">
                          <span>Hot Deals</span>
                        </div>
                        <ul className="rating">
                          <Rating name="read-only" value={v?.ratingAvg ?? 0} readOnly />
                        </ul>
                        <Link to={`/product-detail/${v.id}`} className="text-title">
                          <h5 style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                          }}>{v.name}</h5>
                        </Link>
                        <h3 className="theme-color price right-box-contain" style={{ textAlign: 'left' }}>

                          <div>
                            <del className="text-content">{formatCurrency(v.unitPrice)}</del>
                            <h6 className="offer-top">{v?.discountDTO.percentage}% Off</h6>
                          </div>
                          {formatCurrency(v.unitPrice * (100 - (v?.discountDTO?.percentage || 0)) / 100)}
                        </h3>
                        <DealTimer product={v} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
