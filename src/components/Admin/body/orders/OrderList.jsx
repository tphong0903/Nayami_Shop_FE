import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/bills');
      setOrders(response.data.data);
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
  const getStatusClassName = (status) => {
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
      return 'badge bg-dark';
    case 'pending':
      return 'badge bg-warning';
    case 'guarantee':
      return 'badge bg-secondary';
    default:
      return 'badge bg-light text-dark';
    }
  };
  const handleRowClick = (orderId) => {
    navigate(`/admin/orders/${orderId}`);
  };
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
                <div>
                  <div className="table-responsive">
                    <table className="table all-package order-table theme-table" id="table_id">
                      <thead>
                        <tr>
                          <th>Hình ảnh</th>
                          <th>Mã đơn hàng</th>
                          <th>Ngày</th>
                          <th>Phương thức thanh toán</th>
                          <th>Trạng thái</th>
                          <th>Tổng tiền</th>
                        </tr>
                      </thead>

                      <tbody>
                        {orders.length > 0 ? (
                          orders.map((order) => (
                            <tr key={order.id} data-bs-toggle="offcanvas" href="#order-details" onClick={() => handleRowClick(order.id)}
                            >
                              <td>
                                <a className="d-block">
                                  <span className="order-image">
                                    <img
                                      src={order.lineItems[0].productImage}
                                      className="img-fluid"
                                      alt="product"
                                    />
                                  </span>
                                </a>
                              </td>
                              <td>{`#${order.id}`}</td>
                              <td>{formatDate(order.createdAt)}</td>
                              <td>
                                <span>
                                  {order.paymentMethod}
                                </span>
                              </td>
                              <td>
                                <span className={`badge rounded-pill ${getStatusClassName(order.status)}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td>{formatCurrency(order.totalPrice)}</td>
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