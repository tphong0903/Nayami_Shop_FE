import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
  // Function to handle profile image upload
  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updateImg = document.querySelector('.update_img');
        if (updateImg) {
          updateImg.src = e.target.result;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

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
            <div className="position-relative">
              <img src="../assets/images/inner-page/user/1.jpg" className="blur-up lazyload update_img" alt="" />
              <div className="cover-icon">
                <i className="fa-solid fa-pen">
                  <input type="file" onChange={(e) => readURL(e)} />
                </i>
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
            <i data-feather="home"></i> Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <i data-feather="shopping-bag"></i> Orders
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