import { Outlet } from 'react-router-dom';
import AdminHeader from '~/components/Admin/header/AdminHeader'
import SideBar from '~/components/Admin/sidebar/SideBar'
import '~/assets/AdminCss.css'

export default function AdminPage() {
  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <AdminHeader />
        <div className="page-body-wrapper">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  )
}
