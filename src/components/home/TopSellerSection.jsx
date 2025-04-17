import { Rating } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '~/utils/formatCurrency';


export default function TopSellerSection() {
  const [listProductsTopSelling, setListProductsTopSelling] = useState([]);
  useEffect(() => {
    axios
      .get('/api/products/')
      .then((response) => {
        setListProductsTopSelling(response.data.data.slice(0, 12));
      })
  }, []);
  return (
    <section className="product-section">
      <div className="container-fluid-lg">
        <div className="title title-flex-2">
          <h2>Sản phẩm bán chạy</h2>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="row g-8">
              {listProductsTopSelling.map(v => (
                <div key={v.id} className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                  <div className="product-box-4" style={{ minHeight: '400px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <div className="product-image">
                      <div className="label-flex">
                        <div className='discount'>
                          <label>50%</label>
                        </div>
                      </div>
                      <Link to={`/product-detail/${v.id}`}>
                        <img
                          src={v.listImage[0]}
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-detail">
                      <Link to={`/product-detail/${v.id}`}>
                        <h5 className="name" style={{ width: '100%' }}>{v.name}</h5>
                      </Link>
                      <ul className="rating">
                        <Rating size='small' name="read-only" value={v?.ratingAvg ?? 0} readOnly />
                      </ul>
                      <div>
                        {v?.discountDTO ? (
                          <h5 >
                            <del className="text-content">{formatCurrency(v.unitPrice)}</del>
                          </h5>
                        ) : (<h5>&nbsp; </h5>)}
                        <h5 className="price theme-color">

                          {formatCurrency(v.unitPrice * (100 - (v?.discountDTO?.percentage || 0)) / 100)}
                        </h5>
                      </div>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button className="buy-button buy-button-2 btn btn-cart">
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >

  )
}
