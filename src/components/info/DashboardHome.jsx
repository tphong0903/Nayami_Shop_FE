import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '~/utils/formatCurrency';

// Mock data to use instead of API calls
const MOCK_USER_DATA = {
  fullName: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  phone: '0987654321',
  avatar: '../assets/images/inner-page/user/1.jpg',
  totalOrders: 8,
  pendingOrders: 2,
  totalWishlist: 12,
  totalSpent: 5600000,
  recentOrders: [
    {
      id: '1001',
      orderCode: 'DH1001',
      createdAt: '2025-03-15T08:30:00.000Z',
      totalAmount: 1500000,
      status: 'Completed',
    },
    {
      id: '1002',
      orderCode: 'DH1002',
      createdAt: '2025-03-28T10:15:00.000Z',
      totalAmount: 2800000,
      status: 'Processing',
    },
    {
      id: '1003',
      orderCode: 'DH1003',
      createdAt: '2025-04-05T14:22:00.000Z',
      totalAmount: 1300000,
      status: 'Pending',
    },
  ],
  billingAddress: {
    name: 'Nguyễn Văn A',
    street: '123 Đường ABC',
    city: 'Hồ Chí Minh',
    state: 'Quận 1',
    zipCode: '70000',
    phone: '0987654321',
  },
  shippingAddress: {
    name: 'Nguyễn Văn A',
    street: '123 Đường ABC',
    city: 'Hồ Chí Minh',
    state: 'Quận 1',
    zipCode: '70000',
    phone: '0987654321',
  },
};

const DashboardHome = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    avatar: '',
    totalOrders: 0,
    pendingOrders: 0,
    totalWishlist: 0,
    recentOrders: [],
    billingAddress: null,
    shippingAddress: null,
    totalSpent: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  // Load mock data instead of making API calls
  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      // Get user name and email from localStorage if available
      const userEmail = localStorage.getItem('userEmail');
      const userName = localStorage.getItem('userName');

      // If we have localStorage data, use it to override the mock data
      const userData = {
        ...MOCK_USER_DATA,
        fullName: userName || MOCK_USER_DATA.fullName,
        email: userEmail || MOCK_USER_DATA.email,
        contactInfo: {
          name: userName || MOCK_USER_DATA.fullName,
          email: userEmail || MOCK_USER_DATA.email,
        },
      };

      setUserData(userData);
      setIsLoading(false);
    }, 800); // Simulate network delay

    return () => clearTimeout(timer);
  }, []);

  // Initialize feather icons after component renders
  useEffect(() => {
    if (typeof window !== 'undefined' && window.feather) {
      window.feather.replace();
    }
  }, [isLoading, activeTab]);

  // Get order status badge color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
    case 'completed':
      return 'success';
    case 'processing':
      return 'info';
    case 'pending':
      return 'warning';
    case 'cancelled':
      return 'danger';
    default:
      return 'secondary';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };


  return (
    <div className="dashboard-home">
      <div className="title">
        <h2>Bảng điều khiển</h2>
        <span className="title-leaf">
          <svg className="icon-width bg-gray">
            <use xlinkHref="../src/assets/svg/leaf.svg#leaf"></use>
          </svg>
        </span>
      </div>

      <div className="total-box mb-5">
        <div className="row g-sm-4 g-3">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="totle-contain">
              <img
                src="src/assets/images/svg/order.svg"
                className="img-1 lazyload"
                alt="order icon"
              />
              <img
                src="../src/assets/images/svg/order.svg"
                className=" lazyload"
                alt="order icon"
              />
              <div className="totle-detail">
                <h5>Tổng đơn hàng</h5>
                <h3>{userData.totalOrders.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="totle-contain">
              <img
                src="../src/assets/images/svg/pending.svg"
                className="img-1 lazyload"
                alt="pending icon"
              />
              <img
                src="../src/assets/images/svg/pending.svg"
                className=" lazyload"
                alt="pending icon"
              />
              <div className="totle-detail">
                <h5>Đơn hàng đang xử lý</h5>
                <h3>{userData.pendingOrders.toLocaleString()}</h3>
              </div>
            </div>
          </div>


          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="totle-contain">
              <img
                src="../src/assets/images/svg/money.svg"
                className="img-1  lazyload"
                alt="money icon"
              />
              <img
                src="../src/assets/images/svg/money.svg"
                className=" lazyload"
                alt="money icon"
              />
              <div className="totle-detail">
                <h5>Tổng chi tiêu</h5>
                <h3>{formatCurrency(userData.totalSpent)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="dashboard-tabs mb-4">
        <ul className="nav nav-tabs custom-nav" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <i data-feather="user" className="me-2"></i> Thông tin cá nhân
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <i data-feather="shopping-bag" className="me-2"></i> Đơn hàng gần
              đây
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === 'addresses' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('addresses')}
            >
              <i data-feather="map-pin" className="me-2"></i> Địa chỉ
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Profile Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === 'profile' ? 'show active' : ''
          }`}
        >
          <div className="row">
            <div className="col-12">
              <div className="dashboard-profile">
                <div className="dashboard-bg-box profile-section p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 text-center">
                      <div className="profile-image mb-4 mb-md-0 position-relative">
                        {userData.avatar ? (
                          <img
                            src={userData.avatar}
                            className="rounded-circle img-fluid shadow-sm"
                            alt="User profile"
                            style={{
                              width: '150px',
                              height: '150px',
                              objectFit: 'cover',
                              border: '4px solid #fff',
                            }}
                          />
                        ) : (
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                            style={{
                              width: '150px',
                              height: '150px',
                              border: '4px solid #fff',
                              background:
                                'linear-gradient(45deg, #f3f3f3, #e6e6e6)',
                              fontSize: '3rem',
                              color: '#666',
                              margin: '0 auto',
                            }}
                          >
                            {userData.fullName?.charAt(0).toUpperCase() || 'U'}
                          </div>
                        )}

                        <Link
                          to="/dashboard/profile"
                          className="edit-icon position-absolute bottom-0 end-0 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <i
                            data-feather="edit-2"
                            style={{ width: '18px', height: '18px' }}
                          ></i>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-8">
                      <div className="profile-detail ps-md-4">
                        <h2 className="mb-1">{userData.fullName}</h2>
                        <p className="text-content mb-3">
                          {userData.email}
                        </p>

                        <div className="status-box">
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="status-box-item">
                                <i
                                  data-feather="smartphone"
                                  className="me-2 text-primary"
                                ></i>
                                <span className="text-content">
                                  Điện thoại:
                                </span>{' '}
                                {userData.phone || 'Chưa cập nhật'}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="status-box-item">
                                <i
                                  data-feather="mail"
                                  className="me-2 text-primary"
                                ></i>
                                <span className="text-content">Email:</span>{' '}
                                {userData.email}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="status-box-item">
                                <i
                                  data-feather="shopping-bag"
                                  className="me-2 text-primary"
                                ></i>
                                <span className="text-content">
                                  Tổng đơn hàng:
                                </span>{' '}
                                {userData.totalOrders}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="status-box-item">
                                <i
                                  data-feather="credit-card"
                                  className="me-2 text-primary"
                                ></i>
                                <span className="text-content">
                                  Tổng chi tiêu:
                                </span>{' '}
                                {formatCurrency(userData.totalSpent)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link
                            to="/dashboard/profile"
                            className="btn theme-bg-color text-white me-3"
                          >
                            <i
                              data-feather="edit-2"
                              className="me-2"
                              style={{ width: '16px', height: '16px' }}
                            ></i>{' '}
                            Chỉnh sửa hồ sơ
                          </Link>
                          <Link
                            to="/dashboard/password"
                            className="btn btn-outline-dark"
                          >
                            <i
                              data-feather="lock"
                              className="me-2"
                              style={{ width: '16px', height: '16px' }}
                            ></i>{' '}
                            Đổi mật khẩu
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === 'orders' ? 'show active' : ''
          }`}
        >
          <div className="dashboard-bg-box p-4">
            <div className="dashboard-title mb-4">
              <h3>Đơn hàng gần đây</h3>
            </div>

            {userData.recentOrders && userData.recentOrders.length > 0 ? (
              <div className="table-responsive">
                <table className="table order-table">
                  <thead>
                    <tr>
                      <th scope="col">Mã đơn hàng</th>
                      <th scope="col">Ngày đặt</th>
                      <th scope="col">Tổng tiền</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.recentOrders.map((order) => (
                      <tr key={order.id} className="table-row">
                        <td>#{order.orderCode || order.id}</td>
                        <td>{formatDate(order.createdAt)}</td>
                        <td>{formatCurrency(order.totalAmount)}</td>
                        <td>
                          <span
                            className={`badge bg-${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <Link
                            to={`/dashboard/orders/${order.id}`}
                            className="btn btn-sm theme-bg-color text-white"
                          >
                            <i
                              data-feather="eye"
                              style={{ width: '14px', height: '14px' }}
                            ></i>
                            <span className="ms-1">Chi tiết</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center mt-3">
                  <Link to="/dashboard/orders" className="btn btn-outline-dark">
                    Xem tất cả đơn hàng{' '}
                    <i
                      data-feather="arrow-right"
                      style={{ width: '16px', height: '16px' }}
                    ></i>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center p-4 empty-box">
                <div className="mb-3">
                  <img
                    src="../assets/images/svg/order.svg"
                    alt="No Orders"
                    className="img-fluid"
                    style={{ width: '80px', opacity: '0.5' }}
                  />
                </div>
                <h5 className="mb-2">Bạn chưa có đơn hàng nào</h5>
                <p className="mb-3">
                  Hãy khám phá các sản phẩm của chúng tôi và đặt đơn hàng đầu
                  tiên ngay!
                </p>
                <Link to="/shop" className="btn theme-bg-color text-white">
                  Bắt đầu mua sắm
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Addresses Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === 'addresses' ? 'show active' : ''
          }`}
        >
          <div className="row">
            {/* Shipping Address */}
            <div className="col-lg-6 col-md-6">
              <div className="dashboard-bg-box h-100 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold mb-0">Địa chỉ giao hàng</h4>
                  <Link
                    to="/dashboard/addresses"
                    className="btn btn-sm theme-bg-color text-white"
                  >
                    <i
                      data-feather="edit-2"
                      className="me-1"
                      style={{ width: '14px', height: '14px' }}
                    ></i>{' '}
                    Sửa
                  </Link>
                </div>

                {userData.shippingAddress ? (
                  <div className="address-detail">
                    <div className="address-icon">
                      <i data-feather="map-pin"></i>
                    </div>
                    <div className="address-content">
                      <h6 className="fw-bold">
                        {userData.shippingAddress.name}
                      </h6>
                      <p className="mb-2">{userData.shippingAddress.street}</p>
                      <p className="mb-2">
                        {userData.shippingAddress.city},{' '}
                        {userData.shippingAddress.state}{' '}
                        {userData.shippingAddress.zipCode}
                      </p>
                      <p>
                        <span className="fw-medium">Điện thoại:</span>{' '}
                        {userData.shippingAddress.phone}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-4 empty-box">
                    <div className="mb-3">
                      <i
                        data-feather="map"
                        className="text-muted"
                        style={{ width: '40px', height: '40px' }}
                      ></i>
                    </div>
                    <h6 className="mb-2">
                      Bạn chưa thiết lập địa chỉ giao hàng
                    </h6>
                    <Link
                      to="/dashboard/addresses"
                      className="btn btn-outline-primary mt-2"
                    >
                      <i
                        data-feather="plus"
                        className="me-1"
                        style={{ width: '14px', height: '14px' }}
                      ></i>{' '}
                      Thêm địa chỉ
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Billing Address */}
            <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
              <div className="dashboard-bg-box h-100 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold mb-0">Địa chỉ thanh toán</h4>
                  <Link
                    to="/dashboard/addresses"
                    className="btn btn-sm theme-bg-color text-white"
                  >
                    <i
                      data-feather="edit-2"
                      className="me-1"
                      style={{ width: '14px', height: '14px' }}
                    ></i>{' '}
                    Sửa
                  </Link>
                </div>

                {userData.billingAddress ? (
                  <div className="address-detail">
                    <div className="address-icon">
                      <i data-feather="home"></i>
                    </div>
                    <div className="address-content">
                      <h6 className="fw-bold">
                        {userData.billingAddress.name}
                      </h6>
                      <p className="mb-2">{userData.billingAddress.street}</p>
                      <p className="mb-2">
                        {userData.billingAddress.city},{' '}
                        {userData.billingAddress.state}{' '}
                        {userData.billingAddress.zipCode}
                      </p>
                      <p>
                        <span className="fw-medium">Điện thoại:</span>{' '}
                        {userData.billingAddress.phone}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-4 empty-box">
                    <div className="mb-3">
                      <i
                        data-feather="file-text"
                        className="text-muted"
                        style={{ width: '40px', height: '40px' }}
                      ></i>
                    </div>
                    <h6 className="mb-2">
                      Bạn chưa thiết lập địa chỉ thanh toán
                    </h6>
                    <Link
                      to="/dashboard/addresses"
                      className="btn btn-outline-primary mt-2"
                    >
                      <i
                        data-feather="plus"
                        className="me-1"
                        style={{ width: '14px', height: '14px' }}
                      ></i>{' '}
                      Thêm địa chỉ
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
