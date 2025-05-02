
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Logo from '~/assets/images/mainImage.jpg'
export default function Footer() {
  const [listCategorys, setCategorys] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/categories/active/brands`)
      .then((response) => {
        setCategorys(response.data.data);
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách Danh mục.', 'error');
      });
  }, []);
  return (
    <>
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
                      <h5>Cung cấp sản phẩm chính hãng</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <LocalShippingOutlinedIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Giao hàng toàn quốc</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <DiscountIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Khuyến mãi ưu đãi lớn</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <PriceCheckIcon />
                    </div>
                    <div className="service-detail">
                      <h5>Giá cả hợp lý</h5>
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
                    <Link href="/">
                      <img
                        src={Logo}
                        className=" lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-logo-contain">
                    <p>
                      Chúng tôi là cửa hàng công nghệ thân thiện, chuyên cung cấp đa dạng các dòng điện thoại, laptop và phụ kiện. Đây là địa điểm lý tưởng dành cho những tín đồ công nghệ và khách hàng yêu thích sự hiện đại.
                    </p>
                    <ul className="address">
                      <li>
                        <i data-feather="home" />
                        <Link>
                          số XX, đường Võ Văn Ngân, Thành phố Thủ Đức
                        </Link>
                      </li>
                      <li>
                        <i data-feather="mail" />
                        <Link>support@nayamishop.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                  <h4>Danh mục</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    {listCategorys?.length > 0 && listCategorys.map(v => (
                      <li key={v.id}>
                        <a href="shop-left-sidebar.html" className="text-content">
                          {v.categoryName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Các Trang Chính</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <Link to="/" className="text-content">
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Sản phẩm
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="text-content">
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-content">
                        Đăng nhập
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="text-content">
                        Đăng ký
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                  <h4>Khách hàng</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <Link to="/dashboard/orders" className="text-content">
                        Đơn hàng của bạn
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" className="text-content">
                        Thông tin cá nhân
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                  <h4>Thông tin liên hệhệ</h4>
                </div>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <div className="footer-number">
                        <i data-feather="phone" />
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>+84 0815xxxxxx</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="footer-number">
                        <i data-feather="mail" />
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>nayamiShop@hotmail.com</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
