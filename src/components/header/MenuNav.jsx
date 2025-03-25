import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function MenuNav() {
  const [listCategorys, setCategorys] = useState([]);

  useEffect(() => {
    axios
      .get('/api/categories/brands')
      .then((response) => {
        setCategorys(response.data.data);
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách Danh mục.', 'error');
      });
  }, []);

  return (
    <>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left">
                <button className="dropdown-category">
                  <MenuIcon />
                  <span>Danh mục</span>
                </button>
                <div className="category-dropdown">
                  <div className="category-title">
                    <h5>Categories</h5>
                    <button
                      type="button"
                      className="btn p-0 close-button text-content"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <ul className="category-list">
                    {listCategorys.map(v => (
                      <li className="onhover-category-list" key={v.id}>
                        <Link to={`/shop?categoryId=${v.id}&categoryName=${encodeURIComponent(v.categoryName)}`} className="category-name">
                          <h6>{v.categoryName}</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Thương Hiệu</h5>
                            </div>
                            <ul>
                              {v.brandDTOList.map(b => (
                                <li key={b.id}>
                                  <Link to={`/shop?categoryId=${v.id}&categoryName=${encodeURIComponent(v.categoryName)}&brandId=${b.id}&brandName=${encodeURIComponent(b.name)}&`}>{b.name}</Link>
                                </li>
                              ))
                              }
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              </div>
              <div className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Home
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="index.html">
                                Kartshop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-2.html">
                                Sweetshop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-3.html">
                                Organic
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-4.html">
                                Supershop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-5.html">
                                Classic shop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-6.html">
                                Furniture
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-7.html">
                                Search Oriented
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-8.html">
                                Category Focus
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-9.html">
                                Fashion
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Shop
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category-slider.html"
                              >
                                Shop Category Slider
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category.html"
                              >
                                Shop Category Sidebar
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-banner.html">
                                Shop Banner
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Shop Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="shop-list.html">
                                Shop List
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-right-sidebar.html"
                              >
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-top-filter.html"
                              >
                                Shop Top Filter
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Product
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="product-4-image.html"
                              >
                                Product 4 Image
                              </a>
                            </li>
                            <li className="sub-dropdown-hover">
                              <a
                                href="javascript:void(0)"
                                className="dropdown-item"
                              >
                                Product Thumbnail
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="product-left-thumbnail.html">
                                    Left Thumbnail
                                  </a>
                                </li>
                                <li>
                                  <a href="product-right-thumbnail.html">
                                    Right Thumbnail
                                  </a>
                                </li>
                                <li>
                                  <a href="product-bottom-thumbnail.html">
                                    Bottom Thumbnail
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                href="product-bundle.html"
                                className="dropdown-item"
                              >
                                Product Bundle
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-slider.html"
                                className="dropdown-item"
                              >
                                Product Slider
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-sticky.html"
                                className="dropdown-item"
                              >
                                Product Sticky
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Mega Menu
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row">
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">
                                  Daily Vegetables
                                </h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Beans &amp; Brinjals
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Cauliflower
                                </a>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="dropdown-item"
                                >
                                  Chilies, Garlic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Vegetables &amp; Salads
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Gourd, Cucumber
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Herbs &amp; Sprouts
                                </a>
                                <a
                                  href="demo-personal-portfolio.html"
                                  className="dropdown-item"
                                >
                                  Lettuce &amp; Leafy
                                </a>
                              </div>
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">Baby Tender</h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Beans &amp; Brinjals
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Cauliflower
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Chilies, Garlic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Vegetables &amp; Salads
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Gourd, Cucumber
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Potatoes &amp; Tomatoes
                                </a>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="dropdown-item"
                                >
                                  Peas &amp; Corn
                                </a>
                              </div>
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">
                                  Exotic Vegetables
                                </h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Asparagus &amp; Artichokes
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Avocados &amp; Peppers
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Zucchini
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Celery, Fennel &amp; Leeks
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Chilies &amp; Lime
                                </a>
                              </div>
                              <div className="dropdown-column dropdown-column-img col-3" />
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="blog-detail.html">
                                Blog Detail
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="blog-grid.html">
                                Blog Grid
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="blog-list.html">
                                Blog List
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown new-nav-item">
                          <label className="new-dropdown">New</label>
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li className="sub-dropdown-hover">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Email Template{' '}
                                <span className="new-text">
                                  <i className="fa-solid fa-bolt-lightning" />
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="../email-templete/abandonment-email.html">
                                    Abandonment
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/offer-template.html">
                                    Offer Template
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/order-success.html">
                                    Order Success
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/reset-password.html">
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/welcome.html">
                                    Welcome template
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub-dropdown-hover">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Invoice Template{' '}
                                <span className="new-text">
                                  <i className="fa-solid fa-bolt-lightning" />
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="../invoice/invoice-1.html">Invoice 1</a>
                                </li>
                                <li>
                                  <a href="../invoice/invoice-2.html">Invoice 2</a>
                                </li>
                                <li>
                                  <a href="../invoice/invoice-3.html">Invoice 3</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item" href="404.html">
                                404
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="about-us.html">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="cart.html">
                                Cart
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="contact-us.html">
                                Contact
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="checkout.html">
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="coming-soon.html">
                                Coming Soon
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="compare.html">
                                Compare
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="faq.html">
                                Faq
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-success.html"
                              >
                                Order Success
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-tracking.html"
                              >
                                Order Tracking
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="otp.html">
                                OTP
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="search.html">
                                Search
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="user-dashboard.html"
                              >
                                User Dashboard
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="wishlist.html">
                                Wishlist
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Seller
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-become.html"
                              >
                                Become a Seller
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-dashboard.html"
                              >
                                Seller Dashboard
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-detail.html"
                              >
                                Seller Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-detail-2.html"
                              >
                                Seller Detail 2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="seller-grid.html">
                                Seller Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-grid-2.html"
                              >
                                Seller Grid 2
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-right">
                <button
                  className="btn deal-button"
                  data-bs-toggle="modal"
                  data-bs-target="#deal-box"
                >
                  <i data-feather="zap" />
                  <span>Deal Today</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
