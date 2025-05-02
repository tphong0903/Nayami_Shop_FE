import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatCurrency } from '~/utils/formatCurrency';
import axios from 'axios';

const token = localStorage.getItem('access_token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const storedUser = JSON.parse(localStorage.getItem('user_information'));

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
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'badge bg-success';
      case 'unpaid':
        return 'badge bg-danger';
      case 'shipping':
        return 'badge bg-primary';
      case 'shipped':
        return 'badge bg-info';
      case 'cancelled':
        return 'badge bg-danger';
      case 'pending':
        return 'badge bg-warning';
      case 'guarantee':
        return 'badge bg-secondary';
      default:
        return 'badge bg-light text-dark';
    }
  };
  const getStatusText = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'Hoàn thành';
      case 'unpaid':
        return 'Chờ thanh toán';
      case 'confrimed':
        return 'Đang chờ vận chuyển';
      case 'shipping':
        return 'Đang giao hàng';
      case 'shipped':
        return 'Đã giao';
      case 'cancelled':
        return 'Đã hủy';
      case 'pending':
        return 'Chờ xác nhận';
      case 'guarantee':
        return 'Bảo hành';
      default:
        return status;
    }
  };
  const [activeTab, setActiveTab] = useState('profile');
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/bills/history`);
        const orderHistory = response.data.data || [];
        const totalOrders = orderHistory.length;
        const pendingOrders = orderHistory.filter(order => {
          const isUnpaid = order.paymentMethod === 'ONLINE_BANKING' && order.paymentStatus === 'PENDING';
          return order.status === 'PENDING' && !isUnpaid;
        }).length;

        const totalSpent = orderHistory.reduce((total, order) => {
          if (order.status === 'COMPLETED') {
            return total + (order.totalPrice || 0);
          }
          return total;
        }, 0);

        const formattedOrders = response.data.data.map((order) => {
          let lowerStatus = order.status.toLowerCase();
          const isUnpaid =
            order.paymentMethod === 'ONLINE_BANKING' &&
            order.paymentStatus === 'PENDING';

          return {
            ...order,
            status: isUnpaid ? 'unpaid' : lowerStatus,
            originalStatus: lowerStatus,
          };
        });
        const recentOrders = formattedOrders
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3)
          .map((order) => ({
            id: order.id,
            createdAt: order.createdAt,
            totalAmount: order.totalPrice,
            status: order.status,
          }));
        const fullName = storedUser.userName
        const email = storedUser.email
        const phone = storedUser.phoneNumber
        setUserData({
          fullName,
          email,
          phone,
          totalOrders,
          pendingOrders,
          totalSpent,
          recentOrders,
        });
      } catch (error) {
        console.error('Error fetching order history:', error);
        setUserData({
          userName: storedUser.userName,
          email: storedUser.email,
        });
      }
    };

    fetchOrders();
  }, [location.pathname]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'processing':
      case 'shipping':
        return 'info';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'danger';
      case 'shipped':
        return 'primary';
      default:
        return 'secondary';
    }
  };

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
            <use xlinkHref="/assets/svg/leaf.svg#leaf"></use>
          </svg>
        </span>
      </div>

      <div className="total-box mb-5">
        <div className="row g-sm-4 g-3">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="totle-contain">
              <img
                src="/assets/images/svg/order.svg"
                className="img-1 lazyload"
                alt="order icon"
              />
              <img
                src="/assets/images/svg/order.svg"
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
                src="/assets/images/svg/pending.svg"
                className="img-1 lazyload"
                alt="pending icon"
              />
              <img
                src="/assets/images/svg/pending.svg"
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
                src="/assets/images/svg/money.svg"
                className="img-1  lazyload"
                alt="money icon"
              />
              <img
                src="/assets/images/svg/money.svg"
                className=" lazyload"
                alt="money icon"
              />
              <div className="totle-detail">
                <h5>Tổng chi tiêu</h5>
                <h3 title={formatCurrency(userData.totalSpent)}>
                  {userData.totalSpent > 999999999
                    ? formatCurrency(userData.totalSpent).substring(0, 10) +
                    '...'
                    : formatCurrency(userData.totalSpent)}
                </h3>
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
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Profile Tab */}
        <div
          className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''
            }`}
        >
          <div className="row">
            <div className="col-12">
              <div className="dashboard-profile">
                <div className="dashboard-bg-box profile-section p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 text-center">
                      <div className="profile-image mb-4 mb-md-0 position-relative">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                          style={{
                            width: '150px',
                            height: '150px',
                            border: '4px solid #fff',
                            background: '#f0f0f0',
                            fontSize: '4rem',
                            fontWeight: '500',
                            color: '#666',
                            margin: '0 auto',
                          }}
                        >
                          {userData.fullName?.charAt(0).toUpperCase() || 'A'}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-8">
                      <div className="profile-detail ps-md-4">
                        <h2 className="mb-1">{userData.fullName}</h2>
                        <p className="text-content mb-3">{userData.email}</p>

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
          className={`tab-pane fade ${activeTab === 'orders' ? 'show active' : ''
            }`}
        >
          <div className="dashboard-bg-box p-4">
            <div className="dashboard-title mb-4">
              <h3>Đơn hàng gần đây</h3>
            </div>

            {userData.recentOrders && userData.recentOrders.length > 0 ? (
              <div className="table-responsive">
                <table className="table order-table" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ padding: '10px' }}>Mã đơn hàng</th>
                      <th scope="col" style={{ padding: '10px' }}>Ngày đặt</th>
                      <th scope="col" style={{ padding: '10px' }}>Tổng tiền</th>
                      <th scope="col" style={{ padding: '10px' }}>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.recentOrders.map((order) => (
                      <tr key={order.id} className="table-row" style={{ height: '50px' }}>
                        <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                          {order.id}
                        </td>
                        <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                          {formatDate(order.createdAt)}
                        </td>
                        <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                          {formatCurrency(order.totalAmount)}
                        </td>
                        <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                          <span className={getStatusBadgeClass(order.status)}>
                            {getStatusText(order.status)}
                          </span>
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
                    src="..~/assets/images/svg/order.svg"
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

      </div>
    </div>
  );
};

export default DashboardHome;
