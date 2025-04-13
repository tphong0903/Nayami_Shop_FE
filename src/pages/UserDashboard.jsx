import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import DashboardLayout from '~/components/info/DashboardLayout';

export default function UserDashboard() {
  return (
    <>
      <Header />
      <BreadCrumb title='Dashboard' page='Dashboard' />
      <DashboardLayout>
      </DashboardLayout>
      <Footer />
    </>
  );
}