import {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`dashboard-left-sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="close-button d-flex d-lg-none">
        <button className="close-sidebar" onClick={toggleSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="profile-box">
        <div className="cover-image">
          <img src="../assets/images/inner-page/cover-img.jpg" className="img-fluid blur-up lazyload" alt="" />
        </div>

        <div className="profile-contain">
          <div className="profile-image">
            <div className="profile-image mb-4 mb-md-0 position-relative">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                style={{
                  width: '150px',
                  height: '150px',
                  border: '4px solid #fff',
                  background: '#f0f0f0',
                  fontSize: '4rem',
                  fontWeight: '500',
                  color: '#666',
                  margin: '0 auto',
                }}
              >
                {'A'}
              </div>
            </div>
          </div>

          <div className="profile-name">
            <h3>Vicki E. Pope</h3>
            <h6 className="text-content">vicki.pope@gmail.com</h6>
          </div>
        </div>
      </div>

      <ul className="nav user-nav-pills">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            <i data-feather="home"></i> Trang chủ
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="shopping-bag"></i> Đơn hàng
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="heart"></i> Wishlist
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/cards"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="credit-card"></i> Saved Cards
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/addresses"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="map-pin"></i> Addresses
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="user"></i> Profile
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/privacy"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="shield"></i> Privacy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;