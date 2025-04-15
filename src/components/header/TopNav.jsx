
import { Link } from 'react-router-dom'
import LogoShop1 from '../../assets/images/logo/1.png'
import LogoShop from '../../assets/images/mainImage.jpg'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import cartObserver from '~/utils/CartObserver';
export default function TopNav() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };
  const fetchCartData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (token) {
        const response = await axios.get(`${window.location.origin}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data) {
          setCartItems(response.data.data || []);
          let totalPrice = 0;
          if (response.data.data && response.data.data.length > 0) {
            totalPrice = response.data.data.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
          }
          setCartTotal(totalPrice);
          setCartCount(response.data.data.length || 0);
        }
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
  const removeCartItem = async (cartId) => {
    try {
      const token = localStorage.getItem('access_token');
      if (token) {
        await axios.delete(`${window.location.origin}/api/cart/${cartId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        fetchCartData();
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const checkIfTokenExist = () => {
    const token = localStorage.getItem('access_token')
    return token ? token : false;
  }


  useEffect(() => {
    fetchCartData();

    //register observer
    const handleCartUpdate = () => {
      fetchCartData();
    };

    cartObserver.subscribe(handleCartUpdate);
    const interval = setInterval(fetchCartData, 60000);

    return () => {
      cartObserver.unsubscribe(handleCartUpdate);
      clearInterval(interval);
    };
  }, []);
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
                      <div className="onhover-dropdown header-badge">
                        <button
                          type="button"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <ShoppingCartOutlined />
                          <span className="position-absolute top-0 start-100 translate-middle badge">
                            {cartCount}
                            <span className="visually-hidden">items in cart</span>
                          </span>
                        </button>
                        <div className="onhover-div" style={{ width: '350px', maxWidth: '90vw' }}>
                          <ul className="cart-list">
                            {cartItems.length > 0 ? (
                              cartItems.map((item) => (
                                <li key={item.id} className="product-box-contain">
                                  <div className="drop-cart">
                                    <Link
                                      to={`/product/${item.id}`}
                                      className="drop-image"
                                    >
                                      <img
                                        src={item.listImage[0] || '../assets/images/placeholder.png'}
                                        alt={item.name}
                                      />
                                    </Link>
                                    <div className="drop-contain">
                                      <Link to={`/product/${item.productId}`}>
                                        <h5>{item.productName}</h5>
                                      </Link>
                                      {item.percentDiscount && item.percentDiscount > 0 ? (
                                        <h6>
                                          <span>{item.quantity} x</span>
                                          <span className="text-theme-color">{((item.unitPrice * (1 - item.percentDiscount / 100)) || 0).toLocaleString('vi-VN')}₫</span>
                                          <span className="text-muted text-decoration-line-through ms-1">{item.unitPrice?.toLocaleString('vi-VN')}₫</span>
                                        </h6>
                                      ) : (
                                        <h6>
                                          <span>{item.quantity} x</span> {item.unitPrice?.toLocaleString('vi-VN')}₫
                                        </h6>
                                      )}
                                      <button
                                        className="close-button close_button"
                                        onClick={() => removeCartItem(item.id)}
                                      >
                                        <i className="fa-solid fa-xmark" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <li className="text-center py-3">Giỏ hàng đang trống</li>
                            )}
                          </ul>
                          {cartItems.length > 0 && (
                            <>
                              <div className="price-box">
                                <h5>Tổng :</h5>
                                <h4 className="theme-color fw-bold">{cartTotal.toLocaleString('vi-VN')}₫</h4>
                              </div>
                              <div className="button-group">
                                <Link to="/cart" className="btn btn-sm cart-button theme-bg-color text-white w-100">
                                  Giỏ hàng
                                </Link>
                              </div>


                            </>
                          )}
                        </div>
                      </div>
                    </li>
                    <li className="right-side onhover-dropdown">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                        </div>
                      </div>
                      {checkIfTokenExist() == false ? (
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
                          <div className="onhover-div onhover-div-login">
                            <ul className="user-box-name">
                              <li className="product-box-contain">
                                <Link to="/dashboard">Dashboard</Link>
                              </li>
                              <li className="product-box-contain">
                                <Link to="/dashboard/orders">Order History</Link>
                              </li>
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
