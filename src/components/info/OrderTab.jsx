import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OrderTab = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [timers, setTimers] = useState({});
  const [currentTime, setCurrentTime] = useState(Date.now());

  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/bills/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const formattedOrders = response.data.data.map((order) => {
        let lowerStatus = order.status.toLowerCase();
        const isUnpaid =
          order.paymentMethod === 'ONLINE_BANKING' && order.paymentStatus === 'PENDING';

        return {
          ...order,
          status: isUnpaid ? 'unpaid' : lowerStatus,
          originalStatus: lowerStatus,
        };
      });

      setOrders(formattedOrders);

      const newTimers = {};
      formattedOrders.forEach((order) => {
        if (
          order.paymentMethod === 'ONLINE_BANKING' &&
          order.paymentStatus === 'PENDING'
        ) {
          const orderTime = new Date(order.createdAt).getTime();
          const deadline = orderTime + 24 * 60 * 60 * 1000;
          newTimers[order.id] = deadline;
        }
      });
      setTimers(newTimers);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đơn hàng:', error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
  }, []);

  useEffect(() => {
    const now = new Date().getTime();

    let ordersUpdated = false;
    const updatedOrders = orders.map((order) => {
      if (
        order.paymentMethod === 'ONLINE_BANKING' &&
        order.paymentStatus === 'PENDING' &&
        timers[order.id] &&
        now > timers[order.id]
      ) {
        ordersUpdated = true;
        return { ...order, status: 'cancelled' };
      }
      return order;
    });

    if (ordersUpdated) {
      setOrders(updatedOrders);
    }
  }, [orders, timers, currentTime]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
    case 'confirmed':
      return 'badge bg-info';
    default:
      return 'badge bg-light text-dark';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
    case 'completed':
      return 'Hoàn thành';
    case 'unpaid':
      return 'Chờ thanh toán';
    case 'confirmed':
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

  const getPaymentMethodText = (method) => {
    switch (method) {
    case 'ONLINE_BANKING':
      return 'Chuyển khoản ngân hàng';
    case 'COD':
      return 'Thanh toán khi nhận hàng';
    default:
      return method;
    }
  };

  const formatTimeRemaining = (deadline) => {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
      return 'Hết thời gian';
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const filteredByTabOrders =
    activeTab === 'all'
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const filteredOrders = searchTerm
    ? filteredByTabOrders.filter((order) =>
      order.items.some((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    : filteredByTabOrders;
  const handlePayment = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2',
      },
      buttonsStyling: false,
    });
    const result = await swalWithBootstrapButtons.fire({
      title: 'Xác nhận thanh toán?',
      text: 'Bạn có chắc chắn muốn thanh toán đơn hàng này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý thanh toán',
      cancelButtonText: 'Không, giữ lại',
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/bills/payment/${id}`);
        window.location.href=response.data.data.paymentUrl;
        fetchOrders();
      } catch (error) {
        swalWithBootstrapButtons.fire(
          'Lỗi!',
          'Không thể thanh toán đơn hàng. Vui lòng thử lại sau.',
          'error'
        );
        console.error('Error processing payment:', error);
      }
    }
  };
  const cancelOrder = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2',
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: 'Xác nhận hủy đơn hàng?',
      text: 'Bạn có chắc chắn muốn hủy đơn hàng này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý hủy',
      cancelButtonText: 'Không, giữ lại',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/bills/cancel`, { billID: id });
        swalWithBootstrapButtons.fire(
          'Đã hủy!',
          'Đơn hàng đã được hủy thành công.',
          'success'
        );
        fetchOrders();
      } catch (error) {
        swalWithBootstrapButtons.fire(
          'Lỗi!',
          'Không thể hủy đơn hàng. Vui lòng thử lại sau.',
          'error'
        );
        console.error('Error canceling order:', error);
      }
    }
  };
  const requestGuarantee = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2',
      },
      buttonsStyling: false,
    });
    const result = await swalWithBootstrapButtons.fire({
      title: 'Yêu cầu bảo hành?',
      text: 'Bạn có chắc chắn muốn yêu cầu bảo hành sản phẩm này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý yêu cầu',
      cancelButtonText: 'Không, giữ lại',
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/bills/guarantee`, { billID: id });
        swalWithBootstrapButtons.fire(
          'Đã yêu cầu!',
          'Yêu cầu bảo hành đã được gửi thành công.',
          'success'
        );
        fetchOrders();
      } catch (error) {
        swalWithBootstrapButtons.fire(
          'Lỗi!',
          'Không thể yêu cầu bảo hành. Vui lòng thử lại sau.',
          'error'
        );
        console.error('Error requesting guarantee:', error);
      }
    }
  };
  const buyAgain = async (order) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        Swal.fire({
          title: 'Yêu cầu đăng nhập',
          text: 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng',
          icon: 'warning',
          confirmButtonText: 'Đồng ý',
        });
        return;
      }

      Swal.fire({
        title: 'Đang thêm sản phẩm vào giỏ hàng',
        text: 'Vui lòng đợi trong giây lát...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const addItemPromises = order.items.map((item) =>
        axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/cart`,
          {
            productId: item.productId,
            quantity: item.quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );

      await Promise.all(addItemPromises);

      Swal.fire({
        title: 'Thành công!',
        text: 'Đã thêm tất cả sản phẩm vào giỏ hàng',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });

      window.dispatchEvent(new CustomEvent('cart-updated'));
    } catch (error) {
      console.error('Lỗi khi thêm lại sản phẩm vào giỏ hàng:', error);
      Swal.fire({
        title: 'Lỗi',
        text: 'Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.',
        icon: 'error',
        confirmButtonText: 'Đồng ý',
      });
    }
  };

  return (
    <div className="dashboard-order">
      <div className="dashboard-title mb-4">
        <h3>Đơn hàng của tôi</h3>
      </div>
      {/* Search functionality */}
      <div className="search-box mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm theo tên sản phẩm..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchTerm('')}
            >
              <i className="fa fa-times"></i>
            </button>
          )}
        </div>
      </div>

      <div className="order-tabs mb-4">
        <ul className="nav nav-tabs" id="orderTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Tất cả
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'unpaid' ? 'active' : ''}`}
              onClick={() => setActiveTab('unpaid')}
            >
              Chờ thanh toán
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'pending' ? 'active' : ''}`}
              onClick={() => setActiveTab('pending')}
            >
              Chờ xác nhận
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'confrimed' ? 'active' : ''}`}
              onClick={() => setActiveTab('confrimed')}
            >
              Đang chờ vận chuyển
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Đang giao hàng
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'shipped' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipped')}
            >
              Đã giao
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'completed' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Hoàn thành
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'guarantee' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('guarantee')}
            >
              Bảo hành
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'cancelled' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('cancelled')}
            >
              Đã hủy
            </button>
          </li>
        </ul>
      </div>

      <div className="table-responsive order-table">
        {filteredOrders.length === 0 ? (
          <div className="no-order-found text-center py-5">
            <i className="fa fa-shopping-bag fa-4x mb-3 text-muted"></i>
            <h5>Không có đơn hàng nào</h5>
            <p className="text-muted">
              {searchTerm
                ? `Không tìm thấy đơn hàng nào có sản phẩm "${searchTerm}"`
                : 'Bạn chưa có đơn hàng nào ở trạng thái này.'}
            </p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card mb-4 border rounded">
              <div className="order-card-header d-flex justify-content-between align-items-center p-3 bg-light">
                <div>
                  {order.status !== 'pending' &&
                    order.status !== 'cancelled' &&
                    order.status !== 'unpaid' && (
                    <h5 className="mb-0 text-primary">
                        Mã giao hàng: #{order.orderNumber}
                    </h5>
                  )}
                  <p className="text-muted mb-0">
                    Ngày đặt:{' '}
                    {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                  </p>
                  <p className="text-muted mb-0">
                    <i
                      className={`fa ${order.paymentMethod === 'ONLINE_BANKING'
                        ? 'fa-university'
                        : 'fa-money-bill'
                      } me-1`}
                    ></i>
                    {getPaymentMethodText(order.paymentMethod)}
                  </p>

                  {order.paymentMethod === 'ONLINE_BANKING' &&
                    order.paymentStatus === 'PENDING' &&
                    timers[order.id] && (
                    <div className="payment-countdown mt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa fa-clock text-danger me-1"></i>
                        <span className="text-danger">
                            Vui lòng thanh toán trong:{' '}
                          <span className="fw-bold">
                            {formatTimeRemaining(timers[order.id])}
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress mt-1"
                        style={{ height: '5px' }}
                      >
                        {(() => {
                          const now = new Date().getTime();
                          const orderTime = new Date(
                            order.createdAt
                          ).getTime();
                          const deadline = timers[order.id];
                          const totalTime = deadline - orderTime;
                          const timeLeft = deadline - now;
                          const percentage = Math.max(
                            0,
                            Math.min(100, (timeLeft / totalTime) * 100)
                          );

                          return (
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: `${percentage}%` }}
                              aria-valuenow={percentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-flex align-items-center">
                  <span className={getStatusBadgeClass(order.status)}>
                    {getStatusText(order.status)}
                  </span>
                  <span className="ms-3 fw-bold text-secondary">
                    ₫{order.totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="order-card-body">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="order-item d-flex p-3 border-top"
                  >
                    <div className="order-item-img me-3">
                      <Link to={`/product-detail/${item.productId}`}>
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="rounded hover:scale-105"
                        />
                      </Link>

                    </div>
                    <div className="order-item-details flex-grow-1">
                      <Link to={`/product-detail/${item.productId}`}>
                        <h6
                          className="product-name mb-1"
                          style={{
                            maxWidth: '60%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {searchTerm &&
                          item.productName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ? (
                              <mark>{item.productName}</mark>
                            ) : (
                              item.productName
                            )}
                        </h6>
                      </Link>
                      <p className="product-quantity mb-1">
                        Số lượng: x{item.quantity}
                      </p>
                      <div className="product-price">
                        <span className="sale-price fw-bold text-danger">
                          ₫{item.unitPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-card-footer d-flex justify-content-between align-items-center p-3 border-top bg-light">
                <div>
                  <span className="text-muted">
                    {order.items.length} sản phẩm
                  </span>
                </div>
                <div>
                  {order.paymentMethod === 'ONLINE_BANKING' &&
                    order.paymentStatus === 'PENDING' && (
                    <button className="btn btn-danger btn-sm me-2" onClick={() => { handlePayment(order.id) }}>
                      <i className="fa fa-credit-card me-1"></i>Thanh toán ngay
                    </button>
                  )}

                  {(order.status === 'completed' ||
                    order.status === 'cancelled') && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => buyAgain(order)}
                    >
                      <i className="fa fa-redo me-1"></i>Mua lại
                    </button>
                  )}

                  {order.status === 'pending' && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        cancelOrder(order.id);
                      }}
                    >
                      <i className="fa fa-times me-1"></i>Hủy đơn hàng
                    </button>
                  )}
                  {order.status === 'shipped' && (
                    <button className="btn btn-danger btn-sm" onClick={() => {
                      requestGuarantee(order.id);
                    }}>Yêu cầu bảo hành</button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderTab;
