
import Newsletter from './Newsletter'
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DiscountIcon from '@mui/icons-material/Discount';
export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="section-t-space">
        <div className="container-fluid-lg">
          <div className="service-section">
            <div className="row g-3">
              <div className="col-12">
                <div className="service-contain">
                  <div className="service-box">
                    <div className="service-image">
                      <StoreIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Every Fresh Products</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <LocalShippingOutlinedIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Free Delivery For Order Over $50</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <DiscountIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <PriceCheckIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Best Price On The Market</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer section-b-space section-t-space">
            <div className="row g-md-4 g-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-logo">
                  <div className="theme-logo">
                    <a href="index.html">
                      <img
                        src="../assets/images/logo/1.png"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="footer-logo-contain">
                    <p>
                      We are a friendly bar serving a variety of cocktails, wines and
                      beers. Our bar is a perfect place for a couple.
                    </p>
                    <ul className="address">
                      <li>
                        <i data-feather="home" />
                        <a href="javascript:void(0)">
                          1418 Riverwood Drive, CA 96052, US
                        </a>
                      </li>
                      <li>
                        <i data-feather="mail" />
                        <a href="javascript:void(0)">support@fastkart.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                  <h4>Categories</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Vegetables &amp; Fruit
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Beverages
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Meats &amp; Seafood
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Frozen Foods
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Biscuits &amp; Snacks
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Grocery &amp; Staples
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Useful Links</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="index.html" className="text-content">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html" className="text-content">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="about-us.html" className="text-content">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html" className="text-content">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html" className="text-content">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                  <h4>Help Center</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <a href="order-success.html" className="text-content">
                        Your Order
                      </a>
                    </li>
                    <li>
                      <a href="user-dashboard.html" className="text-content">
                        Your Account
                      </a>
                    </li>
                    <li>
                      <a href="order-tracking.html" className="text-content">
                        Track Order
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html" className="text-content">
                        Your Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="search.html" className="text-content">
                        Search
                      </a>
                    </li>
                    <li>
                      <a href="faq.html" className="text-content">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <div className="footer-number">
                        <i data-feather="phone" />
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="footer-number">
                        <i data-feather="mail" />
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>fastkart@hotmail.com</h5>
                        </div>
                      </div>
                    </li>
                    <li className="social-app mb-0">
                      <h5 className="mb-2 text-content">Download App :</h5>
                      <ul>
                        <li className="mb-0">
                          <a
                            href="https://play.google.com/store/apps"
                            target="_blank"
                          >
                            <img
                              src="../assets/images/playstore.svg"
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="mb-0">
                          <a
                            href="https://www.apple.com/in/app-store/"
                            target="_blank"
                          >
                            <img
                              src="../assets/images/appstore.svg"
                              className="blur-up lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer section-small-space">
            <div className="reserve">
              <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
            </div>
            <div className="payment">
              <img
                src="../assets/images/payment/1.png"
                className="blur-up lazyload"
                alt=""
              />
            </div>
            <div className="social-link">
              <h6 className="text-content">Stay connected :</h6>
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/" target="_blank">
                    <i className="fa-brands fa-pinterest-p" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
