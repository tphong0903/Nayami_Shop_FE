import { Inventory2Outlined, LogoutOutlined, PeopleAltOutlined, PermPhoneMsgOutlined, TuneOutlined } from '@mui/icons-material';
import LogoShop from '~/assets/images/mainImage.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function AdminHeader({ setSidebarOpen }) {
  const toggleSidebar = () => {
    setSidebarOpen();
  };

  return (
    <div className="page-header">
      <div className="header-wrapper m-0">
        <div className="header-logo-wrapper p-0">
          <div className="logo-wrapper">
            <Link to={'/admin'}>
              <img
                className="img-fluid main-logo"
                src={LogoShop}
                alt="logo"
              />
            </Link>
          </div>
          <div className="toggle-sidebar" onClick={toggleSidebar}>
            <MenuIcon style={{ fontSize: '24px', cursor: 'pointer' }} />
            <Link to={'/admin'}>
              <img
                className="img-fluid main-logo"
                src={LogoShop}
                alt="logo"
              />
            </Link>
          </div>
          <div className="toggle-sidebar" onClick={toggleSidebar}>
            <i
              className="status_toggle middle sidebar-toggle"
              onClick={toggleSidebar}
              data-feather="align-center"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
