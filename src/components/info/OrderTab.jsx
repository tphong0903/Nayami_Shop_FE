import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTab = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc0MjgzNTkwMiwiZXhwIjoxNzQyODM3MzQyfQ.eQ45VtBwvASE4TEvX0y_BHymOrEZiZl4rSkz6T_pEZM';
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/bills/history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formattedOrders = response.data.data.map(order => ({
          ...order,
          status: order.status.toLowerCase()
        }));
        setOrders(formattedOrders);

      } catch (error) {
        console.error('Lỗi khi lấy danh sách đơn hàng:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
    case 'completed': return 'badge bg-success';
    case 'confrimed': return 'badge bg-primary';
    case 'unpaid' : return 'badge bg-danger';
    case 'shipping': return 'badge bg-secondary';
    case 'shipped': return 'badge bg-info';
    case 'cancelled': return 'badge bg-danger';
    case 'pending': return 'badge bg-warning';
    case 'guarantee': return 'badge bg-secondary';

    default: return 'badge bg-secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
    case 'completed': return 'Hoàn thành';
    case 'confrimed': return 'Đang chờ vận chuyển';
    case 'unpaid': return 'Chờ thanh toán';
    case 'shipping': return 'Chờ giao hàng';
    case 'shipped': return 'Đã giao';
    case 'cancelled': return 'Đã hủy';
    case 'pending': return 'Chờ xác nhận';
    case 'guarantee': return 'Bảo hành'
    default: return status;
    }
  };

  const filteredOrders = activeTab === 'all'
    ? orders
    : orders.filter(order => order.status === activeTab);

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
              className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Hoàn thành
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'guarantee' ? 'active' : ''}`}
              onClick={() => setActiveTab('guarantee')}
            >
              Bảo hành
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'cancelled' ? 'active' : ''}`}
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
            <p className="text-muted">Bạn chưa có đơn hàng nào ở trạng thái này.</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card mb-4 border rounded">
              <div className="order-card-header d-flex justify-content-between align-items-center p-3 bg-light">
                <div>
                  {(order.status !== 'pending' && order.status !== 'cancelled') && (
                    <h5 className="mb-0 text-primary">Đơn hàng #{order.orderNumber}</h5>

                  )}
                  {(order.status === 'unpaid') && (
                    <h5 className="mb-0 text-primary">Đơn hàng #{order.orderNumber}</h5>
                  )}
                  <p className="text-muted mb-0">Ngày đặt: {new Date(order.createdAt).toLocaleDateString('vi-VN')}</p>
                </div>
                <div className="d-flex align-items-center">
                  <span className={getStatusBadgeClass(order.status)}>{getStatusText(order.status)}</span>
                  <span className="ms-3 fw-bold text-secondary">₫{order.totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="order-card-body">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item d-flex p-3 border-top">
                    <div className="order-item-img me-3">
                      <img src={item.productImage} alt={item.productName} style={{ width: '80px', height: '80px', objectFit: 'cover' }} className="rounded" />
                    </div>
                    <div className="order-item-details flex-grow-1">
                      <h6 className="product-name mb-1" style={{ maxWidth: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.productName}
                      </h6>
                      <p className="product-quantity mb-1">Số lượng: x{item.quantity}</p>
                      <div className="product-price">
                        <span className="sale-price fw-bold text-danger">₫{item.unitPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-card-footer d-flex justify-content-between align-items-center p-3 border-top bg-light">
                <div>
                  <span className="text-muted">{order.items.length} sản phẩm</span>
                </div>
                <div>
                  {(order.status === 'completed' || order.status === 'cancelled') && (
                    <button className="btn btn-primary btn-sm">Mua lại</button>
                  )}

                  {order.status === 'pending' && (
                    <button className="btn btn-primary -danger btn-sm">Hủy đơn hàng</button>
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