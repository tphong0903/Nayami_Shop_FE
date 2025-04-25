import { Outlet } from 'react-router-dom';
import AdminHeader from '~/components/Admin/header/AdminHeader'
import SideBar from '~/components/Admin/sidebar/SideBar'
import '~/assets/AdminCss.css'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const setSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
