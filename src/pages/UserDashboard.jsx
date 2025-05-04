import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import DashboardLayout from '~/components/info/DashboardLayout';
import { getEmailFromToken } from '~/utils/TokenUtil.js';
import axios from 'axios';

export default function UserDashboard() {
  return (
    <>
      <Header />
      <BreadCrumb title='Dashboard' page='Dashboard' />
      <DashboardLayout />
      <Footer />
    </>
  );
}