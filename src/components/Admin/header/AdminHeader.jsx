import { Inventory2Outlined, LogoutOutlined, PeopleAltOutlined, PermPhoneMsgOutlined, TuneOutlined } from '@mui/icons-material';

export default function AdminHeader({ setSidebarOpen }) {
  const toggleSidebar = () => {
    setSidebarOpen();
  };

  return (
    <div className="page-header">
      <div className="header-wrapper m-0">
        <div className="header-logo-wrapper p-0">
          <div className="logo-wrapper">
            <a href="index.html">
              <img
                className="img-fluid main-logo"
                src="/src/assets/Admin//images/logo/1.png"
                alt="logo"
              />
              <img
                className="img-fluid white-logo"
                src="/src/assets/Admin//images/logo/1-white.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="toggle-sidebar" onClick={toggleSidebar}>
            <i
              className="status_toggle middle sidebar-toggle"
              onClick={toggleSidebar}
              data-feather="align-center"
            />
          </div>
        </div>
        <form
          className="form-inline search-full"
          action="javascript:void(0)"
          method="get"
        >
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative">
                <input
                  className="demo-input Typeahead-input form-control-plaintext w-100"
                  type="text"
                  placeholder="Search Fastkart .."
                  name="q"
                  title=""
                  autoFocus
                />
                <i className="close-search" data-feather="x" />
                <div className="spinner-border Typeahead-spinner" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="Typeahead-menu" />
            </div>
          </div>
        </form>
        <div className="nav-right col-6 pull-right right-header p-0">
          <ul className="nav-menus">
            <li>
              <span className="header-search">
                <i className="ri-search-line" />
              </span>
            </li>
            <li className="onhover-dropdown">
              <div className="notification-box">
                <i className="ri-notification-line" />
                <span className="badge rounded-pill badge-theme">4</span>
              </div>
              <ul className="notification-dropdown onhover-show-div">
                <li style={{ display: 'block' }}>
                  <i className="ri-notification-line" />
                  <h6 className="f-18 mb-0">Notitications</h6>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-primary" />
                    Delivery processing <span className="pull-right">10 min.</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-success" />
                    Order Complete<span className="pull-right">1 hr</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-info" />
                    Tickets Generated<span className="pull-right">3 hr</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-circle me-2 font-danger" />
                    Delivery Complete<span className="pull-right">6 hr</span>
                  </p>
                </li>
                <li>
                  <a className="btn btn-primary" href="javascript:void(0)">
                    Check all notification
                  </a>
                </li>
              </ul>
            </li>

            <li className="profile-nav onhover-dropdown pe-0 me-0">
              <div className="media profile-media">
                <img
                  className="user-profile rounded-circle"
                  src="/src/assets/Admin/images/users/4.jpg"
                  alt=""
                />
                <div className="user-name-hide media-body">
                  <span>Emay Walter</span>
                  <p className="mb-0 font-roboto">
                    Admin
                    <i className="middle ri-arrow-down-s-line" />
                  </p>
                </div>
              </div>
              <ul className="profile-dropdown onhover-show-div">
                <li style={{ display: 'block', width: '100%' }}>
                  <a href="all-users.html">
                    <PeopleAltOutlined />
                    <span>Users</span>
                  </a>
                </li>
                <li style={{ display: 'block', width: '100%' }}>
                  <a href="order-list.html">
                    <Inventory2Outlined />
                    <span>Orders</span>
                  </a>
                </li>
                <li style={{ display: 'block', width: '100%' }}>
                  <a href="support-ticket.html">
                    <PermPhoneMsgOutlined />
                    <span>Support Tickets</span>
                  </a>
                </li>
                <li style={{ display: 'block', width: '100%' }}>
                  <a href="profile-setting.html">
                    <TuneOutlined />
                    <span>Settings</span>
                  </a>
                </li>
                <li style={{ display: 'block', width: '100%' }}>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="/logout"
                  >
                    <LogoutOutlined />
                    <span>Log out</span>
                  </a>
                </li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}
