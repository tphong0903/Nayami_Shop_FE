import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

export default function SideBar() {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isRolesOpen, setIsRolesOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isLocalizationOpen, setIsLocalizationOpen] = useState(false);
  const [isCouponsOpen, setIsCouponsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleMenu = (menuSetter) => {
    menuSetter(prevState => !prevState);
  };

  useEffect(() => {
    const sidebarElement = document.getElementById('simple-bar');
    if (sidebarElement) {
      new SimpleBar(sidebarElement);
    }
  }, []);

  return (
    <div className="sidebar-wrapper">
      <div id="sidebarEffect"></div>
      <div>
        <div className="logo-wrapper logo-wrapper-center">
          <a href="index.html">
            <img className="img-fluid for-white" src="/src/assets/Admin/images/logo/full-white.png" alt="logo" />
          </a>
          <div className="back-btn">
            <i className="fa fa-angle-left" />
          </div>
          <div className="toggle-sidebar">
            <i className="ri-apps-line status_toggle middle sidebar-toggle" />
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <a href="index.html">
            <img className="img-fluid main-logo main-white" src="/src/assets/Admin/images/logo/logo.png" alt="logo" />
            <img className="img-fluid main-logo main-dark" src="/src/assets/Admin/images/logo/logo-white.png" alt="logo" />
          </a>
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
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsProductOpen)}>
                  <i className="ri-store-3-line" />
                  <span>Product</span>
                  <i className={`ri-arrow-${isProductOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isProductOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/products">Products</Link></li>
                    <li><Link to="/admin/add-new-product">Add New Products</Link></li>
                  </ul>
                )}
              </li>

              {/* Category Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsCategoryOpen)}>
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
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsBrandsOpen)}>
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

              {/* Users Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsUsersOpen)}>
                  <i className="ri-user-3-line" />
                  <span>Users</span>
                  <i className={`ri-arrow-${isUsersOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isUsersOpen && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/admin/users">All Users</Link></li>
                    <li><Link to="/admin/add-new-user">Add New User</Link></li>
                  </ul>
                )}
              </li>

              {/* Roles Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsRolesOpen)}>
                  <i className="ri-user-3-line" />
                  <span>Roles</span>
                  <i className={`ri-arrow-${isRolesOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isRolesOpen && (
                  <ul className="sidebar-submenu">
                    <li><a href="role.html">All Roles</a></li>
                    <li><a href="create-role.html">Create Role</a></li>
                  </ul>
                )}
              </li>

              {/* Orders Menu */}
              <li className="sidebar-list">
                <a className="sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsOrdersOpen)}>
                  <i className="ri-archive-line" />
                  <span>Orders</span>
                  <i className={`ri-arrow-${isOrdersOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isOrdersOpen && (
                  <ul className="sidebar-submenu">
                    <li><a href="order-list.html">Order List</a></li>
                    <li><a href="order-detail.html">Order Detail</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                  </ul>
                )}
              </li>

              {/* Localization Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsLocalizationOpen)}>
                  <i className="ri-focus-3-line" />
                  <span>Localization</span>
                  <i className={`ri-arrow-${isLocalizationOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isLocalizationOpen && (
                  <ul className="sidebar-submenu">
                    <li><a href="translation.html">Translation</a></li>
                    <li><a href="currency-rates.html">Currency Rates</a></li>
                  </ul>
                )}
              </li>

              {/* Coupons Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsCouponsOpen)}>
                  <i className="ri-price-tag-3-line" />
                  <span>Coupons</span>
                  <i className={`ri-arrow-${isCouponsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isCouponsOpen && (
                  <ul className="sidebar-submenu">
                    <li><a href="coupon-list.html">Coupon List</a></li>
                    <li><a href="create-coupon.html">Create Coupon</a></li>
                  </ul>
                )}
              </li>

              {/* Settings Menu */}
              <li className="sidebar-list">
                <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)" onClick={() => toggleMenu(setIsSettingsOpen)}>
                  <i className="ri-settings-line" />
                  <span>Settings</span>
                  <i className={`ri-arrow-${isSettingsOpen ? 'down' : 'right'}-s-line`} style={{ marginLeft: 'auto' }} />
                </a>
                {isSettingsOpen && (
                  <ul className="sidebar-submenu">
                    <li><a href="profile-setting.html">Profile Setting</a></li>
                  </ul>
                )}
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
