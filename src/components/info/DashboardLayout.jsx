import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import feather from 'feather-icons';
import { getEmailFromToken } from '~/utils/TokenUtil.js';
import axios from 'axios';

const DashboardLayout = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');
      const email = getEmailFromToken(token);
      if (!email) return;

      try {
        console.log('Call API to get user information by email');
        const response = await axios.get(`/api/users/email/${email}`);
        const user = response.data;
        setUser(user);
        localStorage.setItem('user_information', JSON.stringify(user));
        console.log('Call API user successfully');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserData();
  },[location.pathname]);

  return (
    <section className="user-dashboard-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-xxl-3 col-lg-4">
            <DashboardSidebar/>
          </div>

          <div className="col-xxl-9 col-lg-8">
            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">
              Show Menu
            </button>
            <div className="dashboard-right-sidebar">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;