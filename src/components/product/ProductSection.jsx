import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import DealTimer from './DealTimer';
import Slider from 'react-slick';
import { formatCurrency } from '~/utils/formatCurrency';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '~/apis/addtoCart';

var settings = {
  focusOnSelect: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  vertical: true,
  verticalSwiping: true,
  arrows: false
};

export default function ProductSection({ product, user, rate, purchaseCheck, setProductId }) {
  const params = useParams();
  const navigate = useNavigate();

  const [listImage, setListImage] = useState([]);
  const [listDiscountProducts, setListDiscountProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [submitInfo, setSubmitInfo] = useState({
    description: 'No description',
    rating: 0,
    userName: user?.userName ?? 'No name',
    userEmail: user?.email ?? '',
    productId: params.id
  })

  useEffect(() => {
    setSubmitInfo(prev => ({ ...prev, userName: user?.userName ?? 0, userEmail: user?.email ?? '' }))
  }, [user])

  useEffect(() => {
    if (!product) {
      return;
    }
    setListImage(product.listImage || []);
    if (listImage.length > 0) {
      setSelectedImage(listImage[0]);
    }
  }, [product, listImage]);

  useEffect(() => {
    axios
      .get('/api/products/discounts')
      .then((response) => {
        setListDiscountProducts(response.data.data.slice(0, 5))
      })
  }, []);

  const updateSubmitData = (e) => {
    const { name, value } = e.target;
    setSubmitInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submitReview = () => {
    axios.post('/api/comments', submitInfo)
      .then(res => {
        console.log(res.data)
      })
      .then(() => {
        window.location.reload()
      })
  }

  const formatDateTime = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).replace(/(\d+) (\w+), (\d+) (.*)/, '$1 $2, $3 at $4');
  }


  if (!product) {
    return <p>Đang tải sản phẩm...</p>;
  }
  return (
    <section className="product-section">
      <div className="container-fluid-lg">
        <div className="row">
          <div
            className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp"
          >
            <div className="row g-4">
              <div
                className="col-xl-6 wow fadeInUp"
              >
                <div className="product-left-box">
                  <div className="row g-2">
                    <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                      <div className="product-main-2 no-arrow">
                        <div>
                          <div className="slider-image">
                            <img
                              src={selectedImage}
                              id="img-1"
                              data-zoom-image={selectedImage}
                              className="img-fluid image_zoom_cls-0  lazyload"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
                      <div className="left-slider-image-2 left-slider ">
                        <Slider {...settings} slidesToShow={listImage.length} slidesToScroll={1} style={{ height: '100%' }}>
                          {listImage.length > 0 && listImage.map((v, index) => (
                            <div key={index}>
                              <div className="sidebar-image">
                                <img
                                  src={listImage[index]}
                                  onClick={() => setSelectedImage(listImage[index])}
                                  className="img-fluid  lazyload"
                                  alt=""
                                />
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: 'visible',
                  animationDelay: '0.1s',
                  animationName: 'fadeInUp'
                }}
              >
                <div className="right-box-contain">
                  <h2 className="name">{product?.name}</h2>
                  <div className="price-rating">
                    <h3 className="theme-color price">
                      {formatCurrency(product.unitPrice * (100 - (product?.discountDTO?.percentage || 0)) / 100)}

                      {product?.discountDTO && (
                        <div>
                          <del className="text-content">{formatCurrency(product.unitPrice)}</del>
                          <h6 className="offer-top">{product?.discountDTO.percentage}% Off</h6>
                        </div>
                      )}
                    </h3>

                  </div>
                  <div>
                    <Rating name="read-only" value={product?.ratingAvg ?? 0} readOnly />
                    <span className="review" style={{ margin: '10px', fontSize: '15px', }}>{rate?.length ?? 0} Customer Review</span>
                  </div>
                  {product && product?.discountDTO && (
                    <DealTimer product={product} />
                  )}
                  <div className="note-box product-packege">
                    <button
                      onClick={() => addToCart(product.id, 1)}

                      className="btn btn-animation btn-md fw-bold mend-auto cart-button w-100"
                    >
                      Giỏ hàng <i className="fa-solid fa-arrow-right icon" />
                    </button>
                  </div>
                  <div className="buy-box">


                  </div>
                  <div className="pickup-box">
                    <div className="product-title">
                      <h4>Store Information</h4>
                    </div>
                    <div className="product-info">
                      <ul className="product-info-list product-info-list-2">
                        <li>
                          Thương hiệu : <a href="javascript:void(0)">{product.brandDTO.name}</a>
                        </li>
                        <li>
                          Danh mục : <a href="javascript:void(0)">{product.categoryDTO.categoryName}</a>
                        </li>
                        <li>
                          MFG : <a href="javascript:void(0)">Jun 4, 2022</a>
                        </li>
                        <li>
                          Số lượng : <a href="javascript:void(0)">{product.quantity}</a>
                        </li>
                        <li>
                          Tình trạng : <a href="javascript:void(0)">{
                            product.productStatus == 'COMING_SOON' ? 'Sắp kinh doanh' :
                              product.productStatus == 'OUT_OF_STOCK' ? 'Hết hàng' :
                                product.productStatus == 'STOP_SELLING' ? 'Ngừng kinh doanh' : 'Đang bán'
                          }</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="product-section-box">
                  <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="info-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#info"
                        type="button"
                        role="tab"
                        aria-controls="info"
                        aria-selected="false"
                      >
                        Additional info
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#review"
                        type="button"
                        role="tab"
                        aria-controls="review"
                        aria-selected="false"
                      >
                        Review
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content custom-tab" id="myTabContent">
                    <div className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-description">
                        <div className="nav-desh" >
                          <Editor
                            initialValue={product.description}
                            initialEditType="wysiwyg"
                            previewStyle="vertical"
                            useCommandShortcut={true}
                            readOnly
                            hideModeSwitch={true}
                            toolbarItems={[]}
                            height="auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                    >
                      <div className="table-responsive">
                        <table className="table info-table">
                          <tbody>
                            {product.configDTO.listOtherConfigDTO.length > 0 && product.configDTO.listOtherConfigDTO.map((v) => (
                              <tr key={v.id}>
                                <td>{v.name}</td>
                                <td>{v.value}</td>
                              </tr>
                            ))
                            }

                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="review-box">
                        <div className="row g-4">
                          <div className="col-xl-6">
                            <div className="review-title">
                              <h4 className="fw-500">Customer reviews</h4>
                            </div>
                            <div className="d-flex">
                              <Rating defaultValue={product?.ratingAvg ?? 0} precision={1} size='medium' readOnly />
                              <h6 className="ms-3">{`${product?.ratingAvg ?? 0}`} Out Of 5</h6>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <div className="rating-list">
                                    <h5>5 Star</h5>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 5).length / rate?.length * 100 : 0)}%  ` }}
                                        // aria-valuenow={Math.ceil(rate.filter(val => val.rating == 5).length / rate?.length * 100)}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        {Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 5).length / rate?.length * 100 : 0)}%
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="rating-list">
                                    <h5>4 Star</h5>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 4).length / rate?.length * 100 : 0)}%  ` }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        {Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 4).length / rate?.length * 100 : 0)}%
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="rating-list">
                                    <h5>3 Star</h5>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 3).length / rate?.length * 100 : 0)}%  ` }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        {Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 3).length / rate?.length * 100 : 0)}%
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="rating-list">
                                    <h5>2 Star</h5>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 2).length / rate?.length * 100 : 0)}%  ` }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        {Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 2).length / rate?.length * 100 : 0)}%
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="rating-list">
                                    <h5>1 Star</h5>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 1).length / rate?.length * 100 : 0)}%  ` }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        {Math.ceil(rate?.length > 0 ? rate.filter(val => val.rating == 1).length / rate?.length * 100 : 0)}%
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="review-title">
                              <h4 className="fw-500">Add a review</h4>
                            </div>
                            <div className="row g-4">
                              <div className="col-md-6">
                                <div className="form-floating theme-form-floating">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={user ? user.userName : ''}
                                    placeholder="Name"
                                  />
                                  <label htmlFor="name">Your Name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating theme-form-floating">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email Address"
                                    value={user ? user.email : ''}
                                  />
                                  <label htmlFor="email">Email Address</label>
                                </div>
                              </div>
                              <div className="col-md-6 text-center">
                                <label htmlFor="review1">Review Title</label>
                              </div>
                              <div className="col-md-6">
                                <Rating name='rating' onChange={(e) => { updateSubmitData(e) }} />
                              </div>
                              <div className="col-12">
                                <div className="form-floating theme-form-floating">
                                  <textarea
                                    className="form-control"
                                    name='description'
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 150 }}
                                    defaultValue={''}
                                    onChange={(e) => { updateSubmitData(e) }}
                                  />
                                  <label htmlFor="floatingTextarea2">
                                    Write Your Comment
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                {(user && purchaseCheck == false) || !user || (rate?.length > 0 && rate.map(item => item.userEmail).includes(user?.email))
                                  ? <div className="btn btn-animation btn-md fw-bold disabled" onClick={submitReview}>Review</div>
                                  : <div className="btn btn-animation btn-md fw-bold" onClick={submitReview}>Review</div>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="review-title">
                              <h4 className="fw-500">
                                Customer questions &amp; answers
                              </h4>
                            </div>
                            <div className="review-people">
                              <ul className="review-list">
                                {
                                  rate?.length > 0
                                    ? rate.map((item, index) => {
                                      return (
                                        <>
                                          <li key={index}>
                                            <div className="people-box">
                                              <div>
                                                <div className="people-image">
                                                  <img
                                                    src="../assets/images/review/1.jpg"
                                                    className="img-fluid blur-up lazyload"
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                              <div className="people-comment">
                                                <a className="name" href="javascript:void(0)">
                                                  {item.userName}
                                                </a>
                                                <div className="date-time">
                                                  <h6 className="text-content">
                                                    {formatDateTime(item.createdAt)}
                                                  </h6>
                                                  <Rating defaultValue={item.rating} size='small' readOnly
                                                    sx={{
                                                      display: 'flex',
                                                      flexDirection: 'column'
                                                    }} />
                                                </div>
                                                <div className="reply">
                                                  <p>
                                                    {item.description}
                                                    <a href="javascript:void(0)">Reply</a>
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </>
                                      )
                                    })
                                    : <>No reviews</>
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp"
            style={{ visibility: 'visible', animationName: 'fadeInUp' }}
          >
            <div className="right-sidebar-box">
              {/* Trending Product */}
              <div className="pt-25">
                <div className="category-menu">
                  <h3>Trending Products</h3>
                  <ul className="product-list product-right-sidebar border-0 p-0">
                    {listDiscountProducts.map(v => (
                      <li key={v.id}>
                        <div className="offer-product">
                          <Link
                            to={`/product-detail/${v.id}`}
                            className="offer-image"
                          >
                            <img
                              src={v.listImage[0]}
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to={`/product-detail/${v.id}`}>
                                <h6 className="name">{v.name}</h6>
                              </Link>
                              {product?.discountDTO && (
                                <div>
                                  <del className="text-content">{formatCurrency(product.unitPrice)}</del>
                                </div>
                              )}
                              <h6 className="price theme-color">
                                {formatCurrency(parseInt(product.unitPrice * (100 - (product?.discountDTO?.percentage || 0)) / 100, 10))}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

  );
}