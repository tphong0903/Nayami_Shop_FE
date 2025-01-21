import '../../assets/css/vendors/bootstrap.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/vendors/font-awesome.css'
import '../../assets/css/vendors/feather-icon.css'
import '../../assets/css/vendors/slick/slick.css'
import '../../assets/css/vendors/slick/slick-theme.css'
import '../../assets/css/bulk-style.css'
import '../../assets/css/vendors/animate.css'
import '../../assets/css/style.css'
import LogoShop from '../../assets/images/logo/1.png'
export default function TopNav() {
  return (
    <>
      <div className="top-nav top-header sticky-header">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button
                  className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#primaryMenu"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars" />
                  </span>
                </button>
                <a href="index.html" className="web-logo nav-logo">
                  <img
                    src={LogoShop}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </a>
                <div className="middle-box">
                  <div className="location-box">
                    <button
                      className="btn location-button"
                      data-bs-toggle="modal"
                      data-bs-target="#locationModal"
                    >
                      <span className="location-arrow">
                        <i data-feather="map-pin" />
                      </span>
                      <span className="locat-name">Your Location</span>
                      <i className="fa-solid fa-angle-down" />
                    </button>
                  </div>
                  <div className="search-box">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="I'm searching for..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button className="btn" type="button" id="button-addon2">
                        <i data-feather="search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rightside-box">
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light" />
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light" />
                      </span>
                    </div>
                  </div>
                  <ul className="right-side-menu">
                    <li className="right-side">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <div className="search-box">
                            <i data-feather="search" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side">
                      <a href="contact-us.html" className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="phone-call" />
                        </div>
                        <div className="delivery-detail">
                          <h6>24/7 Delivery</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </a>
                    </li>
                    <li className="right-side">
                      <a
                        href="wishlist.html"
                        className="btn p-0 position-relative header-wishlist"
                      >
                        <i data-feather="heart" />
                      </a>
                    </li>
                    <li className="right-side">
                      <div className="onhover-dropdown header-badge">
                        <button
                          type="button"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <i data-feather="shopping-cart" />
                          <span className="position-absolute top-0 start-100 translate-middle badge">
                            2
                            <span className="visually-hidden">unread messages</span>
                          </span>
                        </button>
                        <div className="onhover-div">
                          <ul className="cart-list">
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a
                                  href="product-left-thumbnail.html"
                                  className="drop-image"
                                >
                                  <img
                                    src="../assets/images/vegetable/product/1.png"
                                    className="blur-up lazyload"
                                    alt=""
                                  />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left-thumbnail.html">
                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                  </a>
                                  <h6>
                                    <span>1 x</span> $80.58
                                  </h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a
                                  href="product-left-thumbnail.html"
                                  className="drop-image"
                                >
                                  <img
                                    src="../assets/images/vegetable/product/2.png"
                                    className="blur-up lazyload"
                                    alt=""
                                  />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left-thumbnail.html">
                                    <h5>
                                      Peanut Butter Bite Premium Butter Cookies 600
                                      g
                                    </h5>
                                  </a>
                                  <h6>
                                    <span>1 x</span> $25.68
                                  </h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="price-box">
                            <h5>Total :</h5>
                            <h4 className="theme-color fw-bold">$106.58</h4>
                          </div>
                          <div className="button-group">
                            <a href="cart.html" className="btn btn-sm cart-button">
                              View Cart
                            </a>
                            <a
                              href="checkout.html"
                              className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side onhover-dropdown">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="user" />
                        </div>
                        <div className="delivery-detail">
                          <h6>Hello,</h6>
                          <h5>My Account</h5>
                        </div>
                      </div>
                      <div className="onhover-div onhover-div-login">
                        <ul className="user-box-name">
                          <li className="product-box-contain">
                            <i />
                            <a href="login.html">Log In</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="sign-up.html">Register</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="forgot.html">Forgot Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
