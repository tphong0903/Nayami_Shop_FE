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
    // Initialize feather icons
    console.log('Feather');
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, [location.pathname]);


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