import LogoShop from '~/assets/images/mainLogoMauTrang.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

export default function SideBar({ value, setSidebarOpen }) {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isStaffsOpen, setIsStaffsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isPromotionOpen, setIsPromotionOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isCouponsOpen, setIsCouponsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);


  const toggleMenu = (menuSetter) => {
    menuSetter(prevState => !prevState);
  };
  const toggleSidebar = () => {
    setSidebarOpen();
  };

  useEffect(() => {
    const sidebarElement = document.getElementById('simple-bar');
    if (sidebarElement) {
      new SimpleBar(sidebarElement);
    }
    const script = document.createElement('script');
    script.src = '/src/assets/Admin/js/sidebareffect.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sidebar-wrapper" style={{ display: value ? 'block' : 'none' }}>
      <div id="sidebarEffect"></div>
      <div>
        <div className="logo-wrapper logo-wrapper-center">
          <Link to="/admin">
            <img className="img-fluid for-white" src={LogoShop} alt="logo" />
          </Link>
          <div className="back-btn" onClick={toggleSidebar}>
            <i className="fa fa-angle-left" />
          </div>
          <div className="toggle-sidebar" >
            <i className="ri-apps-line status_toggle middle sidebar-toggle" />
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <Link>
            <img className="img-fluid main-logo main-white" src="/src/assets/Admin/images/logo/logo.png" alt="logo" />
            <img className="img-fluid main-logo main-dark" src="/src/assets/Admin/images/logo/logo-white.png" alt="logo" />
          </Link>
        </div>
        <nav className="sidebar-main">
          <div className="left-arrow" id="left-arrow">
            <i data-feather="arrow-left" />
          </div>
          <div id="sidebar-menu">
            <ul className="sidebar-links" id="simple-bar">
              <li className="sidebar-list">
                <Link className="sidebar-link sidebar-title link-nav" to='/admin'>
                  <i className="ri-home-line" />
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* Product Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsProductOpen)}>
                  <i className="ri-store-3-line" />
                  <span>Sản phẩm</span>
                  <i className={`ri-arrow-${isProductOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isProductOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/products">Danh sách sản phẩm</Link></li>
                    <li><Link to="/admin/add-new-product">Thêm sản phẩm</Link></li>
                  </ul>
                )}
              </li>

              {/* Category Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsCategoryOpen)}>
                  <i className="ri-list-check-2" />
                  <span>Danh mục</span>
                  <i className={`ri-arrow-${isCategoryOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isCategoryOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/categories">Danh sách danh mục</Link></li>
                    <li><Link to="/admin/add-new-category">Thêm danh mục</Link></li>
                  </ul>
                )}
              </li>

              {/* Brands Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsBrandsOpen)}>
                  <i className="ri-list-settings-line" />
                  <span>Thương hiệu</span>
                  <i className={`ri-arrow-${isBrandsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isBrandsOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/brands">Danh sách thương hiệu</Link></li>
                    <li><Link to="/admin/add-new-brand">Thêm thương hiệu</Link></li>
                  </ul>
                )}
              </li>

              {/* Customer Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsUsersOpen)}>
                  <i className="ri-user-3-line" />
                  <span>Khách hàng</span>
                  <i className={`ri-arrow-${isUsersOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isUsersOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/users">Khách hàng</Link></li>
                    <li><Link to="/admin/add-new-user">Thêm khách hàng</Link></li>
                  </ul>
                )}
              </li>
              {/* Staff Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsStaffsOpen)}>
                  <i className="ri-user-3-line" />
                  <span>Nhân viên</span>
                  <i className={`ri-arrow-${isStaffsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isStaffsOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/staffs">Nhân viên</Link></li>
                    <li><Link to="/admin/add-new-staff">Thêm nhân viên</Link></li>
                  </ul>
                )}
              </li>

              {/* Orders Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsOrdersOpen)}>
                  <i className="ri-archive-line" />
                  <span>Đơn hàng</span>
                  <i className={`ri-arrow-${isOrdersOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isOrdersOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/orders">Danh sách đơn hàng</Link></li>
                  </ul>
                )}
              </li>
              {/* Localization Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsPromotionOpen)}>
                  <i className="ri-focus-3-line" />
                  <span>Quảng cáo</span>
                  <i className={`ri-arrow-${isPromotionOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isPromotionOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/promotions">Danh sách quảng cáo</Link></li>
                    <li><Link to="/admin/add-new-promotion">Thêm quảng cáo</Link></li>
                  </ul>
                )}
              </li>
              {/* Comment Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsCommentOpen)}>
                  <i className="ri-archive-line" />
                  <span>Đánh giá</span>
                  <i className={`ri-arrow-${isCommentOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isCommentOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/comments">Danh sách đánh giá</Link></li>
                  </ul>
                )}
              </li>

              {/* Coupons Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="#" onClick={() => toggleMenu(setIsCouponsOpen)}>
                  <i className="ri-price-tag-3-line" />
                  <span>Khuyến mãi</span>
                  <i className={`ri-arrow-${isCouponsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isCouponsOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/discounts">Danh sách khuyến mãi</Link></li>
                    <li><Link to="/admin/add-discounts">Tạo khuyến mãi</Link></li>
                    <li><Link to="/admin/coupons">Danh sách mã giảm giá</Link></li>
                    <li><Link to="/admin/add-new-coupon">Tạo mã giảm giá</Link></li>
                  </ul>
                )}
              </li>

              {/* Settings Menu */}
              <li className="sidebar-list">
                <Link className="linear-icon-link sidebar-link sidebar-title" to={'/admin/information'}>
                  <i className="ri-settings-line" />
                  <span>Thông tin cá nhân</span>
                  <i className={`ri-arrow-${isSettingsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </Link>
              </li>
              {/* logout */}
              <li className="sidebar-list">
                <Link
                  className="linear-icon-link sidebar-link sidebar-title"
                  to={'/logout'}
                  onClick={() => toggleMenu(setIsSettingsOpen)}
                >
                  <i className="ri-logout-box-r-line" />
                  <span>Đăng xuất</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-arrow" id="right-arrow">
            <i data-feather="arrow-right" />
          </div>
        </nav>
      </div>
    </div>
  );
}
