import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (activeStatus === 'all') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) => order.status?.toLowerCase() === activeStatus)
      );
    }
  }, [activeStatus, orders]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/bills');
      setOrders(response.data.data);
      setFilteredOrders(response.data.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  const getStatusLabel = (status) => {
    switch (status?.toLowerCase()) {
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

  const getStatusClassName = (status) => {
    switch (status?.toLowerCase()) {
    case 'completed':
      return 'badge bg-success';
    case 'unpaid':
      return 'badge bg-danger';
    case 'confirmed':
      return 'badge bg-info';
    case 'shipping':
      return 'badge bg-primary';
    case 'shipped':
      return 'badge bg-secondary';
    case 'cancelled':
      return 'badge bg-dark';
    case 'pending':
      return 'badge bg-warning';
    case 'guarantee':
      return 'badge bg-danger';
    default:
      return 'badge bg-light text-dark';
    }
  };

  const handleRowClick = (orderId) => {
    navigate(`/admin/orders/${orderId}`);
  };

  const handleStatusFilter = (status) => {
    setActiveStatus(status);
  };

  const statusFilters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'unpaid', label: 'Chờ thanh toán' },
    { id: 'pending', label: 'Chờ xác nhận' },
    { id: 'confirmed', label: 'Đang chờ vận chuyển' },
    { id: 'shipping', label: 'Đang giao hàng' },
    { id: 'shipped', label: 'Đã giao' },
    { id: 'guarantee', label: 'Bảo hành' },
    { id: 'completed', label: 'Hoàn thành' },
    { id: 'cancelled', label: 'Đã hủy' },

  ];

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>Danh sách đơn hàng</h5>
                </div>

                {/* Status Filter Navigation */}
                <div className="nav-tabs-container mb-4">
                  <ul className="nav nav-tabs" id="statusTabs" role="tablist">
                    {statusFilters.map((status) => (
                      <li className="nav-item" key={status.id}>
                        <button
                          className={`nav-link ${
                            activeStatus === status.id ? 'active' : ''
                          }`}
                          onClick={() => handleStatusFilter(status.id)}
                        >
                          {status.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="table-responsive">
                    <table
                      className="table all-package order-table theme-table"
                      id="table_id"
                    >
                      <thead>
                        <tr>
                          <th>Mã đơn hàng</th>
                          <th>Ngày</th>
                          <th>Phương thức thanh toán</th>
                          <th>Trạng thái</th>
                          <th>Tổng tiền</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.length > 0 ? (
                          filteredOrders.map((order) => (
                            <tr
                              key={order.id}
                              data-bs-toggle="offcanvas"
                              href="#order-details"
                              onClick={() => handleRowClick(order.id)}
                            >
                              <td>{`#${order.id}`}</td>
                              <td>{formatDate(order.createdAt)}</td>
                              <td>
                                <span>{order.paymentMethod}</span>
                              </td>
                              <td>
                                <span
                                  className={`badge rounded-pill ${getStatusClassName(
                                    order.status
                                  )}`}
                                >
                                  {getStatusLabel(order.status)}
                                </span>
                              </td>
                              <td>{formatCurrency(order.totalPrice)}</td>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <button className="btn btn-primary">
                                       Chi tiết
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7">Không có đơn hàng nào</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
