import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import DashboardLayout from '~/components/info/DashboardLayout';
import { getEmailFromToken } from '~/utils/TokenUtil.js';
import axios from 'axios';

export default function UserDashboard() {
  const [informUser, setInformUser] = useState(false)
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');
      const email = getEmailFromToken(token);
      console.log(email);
      if (!email) return;
      try {
        console.log('Call API to get user information by email');
        const response = await axios.get(`/api/users/email/${email}`);
        const user = response.data;
        console.log(user);
        localStorage.setItem('user_information', JSON.stringify(user));
        setInformUser(true);
        console.log('Call API user successfully');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    console.log('Fetch user');
    if(localStorage.getItem('user_information') == null) {
      fetchUserData();
    }
  },[]);
  return (
    <>
      <Header />
      <BreadCrumb title='Dashboard' page='Dashboard' />
      <DashboardLayout/>
      <Footer />
    </>
  );
}