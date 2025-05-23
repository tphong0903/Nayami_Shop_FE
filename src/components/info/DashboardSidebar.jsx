import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getEmailFromToken } from '~/utils/TokenUtil';

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
  const [userInformation, setUserInformation] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const email = getEmailFromToken(token);
    if (!email) return;
    try {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/api/users/email/${email}`)
        .then((response) => {
          const user1 = response.data;
          setUserInformation(user1)
        })
    } catch (error) {
      console.error('Error fetching user:', error);
    }
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
          <img
            src="/assets/images/inner-page/cover-img.jpg"
            className="img-fluid blur-up lazyload"
            alt=""
          />
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
            <h3>{userInformation?.userName || 'Loading...'}</h3>
            <h6 className="text-content">
              {userInformation?.email || 'No email found'}
            </h6>
          </div>
        </div>
      </div>

      <ul className="nav user-nav-pills">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <i data-feather="home"></i> Trang chủ
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <i data-feather="shopping-bag"></i> Đơn hàng
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/vouchers"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <i data-feather="gift"></i> Ví Mã Giảm Giá
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard/addresses"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <i data-feather="map-pin"></i> Địa chỉ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
