import { Outlet } from 'react-router-dom';
import AdminHeader from '~/components/Admin/header/AdminHeader'
import SideBar from '~/components/Admin/sidebar/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '~/assets/AdminCss.css'
import { useState } from 'react'

export default function AdminPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const setSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  };
  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <AdminHeader value={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="page-body-wrapper">
          <SideBar value={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </>
  )
}
