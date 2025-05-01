import { Rating } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '~/apis/addtoCart';
import { formatCurrency } from '~/utils/formatCurrency';


export default function TopSellerSection() {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  const [dateRange, setDateRange] = useState([startOfMonth, endOfMonth]);
  const [listProductsTopSelling, setListProductsTopSelling] = useState([]);

  const getBestSellingByTime = (startDate, endDate) => {
    const dashboardDateDTO = {
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
    };

    axios
      .get('/api/products/displayStatus/1', {
        params: dashboardDateDTO,
      })
      .then((response) => {
        setListProductsTopSelling(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể lấy dữ liệu.', 'error');
      });
  };
  useEffect(() => {
    getBestSellingByTime(dateRange[0], dateRange[1]);
  }, [dateRange]);

  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantity({
      ...quantity,
      [productId]: value
    });
  };

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
                              onClick={() => handleQuantityChange(v.id, Math.max(1, (quantity[v.id] || 1) - 1))}
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              style={{ padding: '0' }}
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value={quantity[v.id] || 1}
                              onChange={(e) => handleQuantityChange(v.id, parseInt(e.target.value) || 1)}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                              onClick={() => handleQuantityChange(v.id, (quantity[v.id] || 1) + 1)}
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button className="buy-button buy-button-2 btn btn-cart"
                          onClick={() => addToCart(v.id, quantity[v.id] || 1)}>

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
