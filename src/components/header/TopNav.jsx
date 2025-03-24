
import { Link } from 'react-router-dom'
import LogoShop from '../../assets/images/logo/1.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hearing, ShoppingCartOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
export default function TopNav() {
const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  const checkIfTokenExist = () =>
  {
    const token = localStorage.getItem('access_token')
    return token ? token : false;
  }

  useEffect(()=>{
    console.log(checkIfTokenExist());
  })

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
                <Link to="/" className="web-logo nav-logo">
                  <img
                    src={LogoShop}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </Link>
                <div className="middle-box">

                  <div className="search-box">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="I'm searching for..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="btn" type="button" id="button-addon2" onClick={handleSearch}>
                        <SearchIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rightside-box">
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <SearchIcon />
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
                          <PermPhoneMsgOutlinedIcon style={{ color: 'black' }} />
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
                        <FavoriteBorderIcon />
                      </a>
                    </li>
                    <li className="right-side">
                      <div className="onhover-dropdown header-badge">
                        <button
                          type="button"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <ShoppingCartOutlined />
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
                                  href=""
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
                            <Link to="/cart" className="btn btn-sm cart-button">
                              View Cart
                            </Link>
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
                          <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                        </div>
                      </div>
                      { checkIfTokenExist() == false ? (
                      <div className="onhover-div onhover-div-login">
                        <ul className="user-box-name">
                          <li className="product-box-contain">
                            <i />
                            <a href="/login">Log In</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="/register">Register</a>
                          </li>
                          <li className="product-box-contain">
                            <a href="/forgot-password">Forgot Password</a>
                          </li>
                        </ul>
                      </div>
                      ) : (
                        <div className="delivery-detail">
                          <h6>Hello,</h6>
                          <h5>My Account</h5>
                          <div className="onhover-div onhover-div-login">
                            <ul className="user-box-name">
                              <li className="product-box-contain">
                                <a href="/logout">Log out</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )
                      }
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
