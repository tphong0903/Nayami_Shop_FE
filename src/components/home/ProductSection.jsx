import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { formatCurrency } from '~/utils/formatCurrency';
import { Link } from 'react-router-dom';
import { addToCart } from '~/apis/addtoCart';

export default function ProductSection() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProductbyCategory('Laptop')
  }, []);

  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantity({
      ...quantity,
      [productId]: value,
    });
  };

  const getProductbyCategory = (name) => {
    let url = `${import.meta.env.VITE_API_BASE_URL}/api/products/filter`;
    let params = [];
    params.push(`categories=${encodeURIComponent(name)}`);
    params.push('pageSize=12')
    if (params.length > 0) {
      url += '?' + params.join('&');
    }
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data.content;
        const slicedData = Array.isArray(data) ? data.slice(0, 12) : [];
        setFilteredProducts(slicedData);
      })
      .catch((error) => {
        console.error('Lỗi khi lọc sản phẩm theo danh mục:', error);
        setFilteredProducts([]);
      });
  }
  return (
    <section className="product-section">
      <div className="container-fluid-lg">
        <div className="title title-flex-2">
          <h2>Sản phẩm</h2>
          <div
            style={{
              overflowX: 'auto',
              whiteSpace: 'nowra',
            }}
          >
            <ul
              className="nav nav-tabs tab-style-color-2 tab-style-color"
              id="myTab"
              style={{ display: 'flex', flexWrap: 'nowrap' }}
            >
              <li className="nav-item">
                <button
                  className="nav-link btn active"
                  id="cooking-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cooking"
                  type="button"
                  onClick={() => getProductbyCategory('Laptop')}
                >
                  {' '}
                  Laptop
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="fruits-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fruits"
                  type="button"
                  onClick={() => getProductbyCategory('Điện thoại')}
                >
                  Điện thoại
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="beverage-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#beverage"
                  type="button"
                  onClick={() => getProductbyCategory('Bàn phím')}
                >
                  Bàn phím
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="dairy-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dairy"
                  type="button"
                  onClick={() => getProductbyCategory('Tai nghe')}
                >
                  Tai nghe
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="row g-8">
              {filteredProducts.map((v) => (
                <div
                  key={v.id}
                  className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                >
                  <div
                    className="product-box-4"
                    style={{
                      minHeight: '400px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <div className="product-image">
                      {v?.discountDTO && (
                        <div className="label-flex">
                          <div className="discount">
                            <label>{v.discountDTO.percentage}%</label>
                          </div>
                        </div>
                      )}
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
                        <h5 className="name" style={{ width: '100%' }}>
                          {v.name}
                        </h5>
                      </Link>
                      <ul className="rating">
                        <Rating
                          size="small"
                          name="read-only"
                          value={v?.ratingAvg ?? 0}
                          readOnly
                        />
                      </ul>
                      <div>
                        {v?.discountDTO ? (
                          <h5>
                            <del className="text-content">
                              {formatCurrency(v.unitPrice)}
                            </del>
                          </h5>
                        ) : (
                          <h5>&nbsp; </h5>
                        )}
                        <h5 className="price theme-color">
                          {formatCurrency(
                            (v.unitPrice *
                              (100 - (v?.discountDTO?.percentage || 0))) /
                            100
                          )}
                        </h5>
                      </div>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                              onClick={() =>
                                handleQuantityChange(
                                  v.id,
                                  Math.max(1, (quantity[v.id] || 1) - 1)
                                )
                              }
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              style={{ padding: '0' }}
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              value={quantity[v.id] || 1}
                              onChange={(e) =>
                                handleQuantityChange(
                                  v.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                              onClick={() =>
                                handleQuantityChange(
                                  v.id,
                                  (quantity[v.id] || 1) + 1
                                )
                              }
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          onClick={() => addToCart(v.id, quantity[v.id] || 1)}
                        >
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
    </section>
  );
}
