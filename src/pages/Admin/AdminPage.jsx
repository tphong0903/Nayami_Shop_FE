import { Outlet } from 'react-router-dom';
import AdminHeader from '~/components/Admin/header/AdminHeader'
import SideBar from '~/components/Admin/sidebar/SideBar'
import '~/assets/AdminCss.css'
import { useEffect, useState } from 'react'
import {getRoleFromToken} from "~/utils/TokenUtil.js";
import SideBarStaff from "~/components/Admin/sidebar/SideBarStaff.jsx";

export default function AdminPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [role,setRole] = useState('');


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

    // ✨ get role từ token
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);
    const roleFromToken = getRoleFromToken(token);
    console.log('Role:', roleFromToken);
    setRole(roleFromToken);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <AdminHeader value={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="page-body-wrapper">
          {role === 'ADMIN' && <SideBar value={isSidebarOpen} setSidebarOpen={setSidebarOpen} />}
          {role === 'STAFF' && <SideBarStaff value={isSidebarOpen} setSidebarOpen={setSidebarOpen} />}
          <Outlet />
        </div>
      </div>
    </>
  )
}
