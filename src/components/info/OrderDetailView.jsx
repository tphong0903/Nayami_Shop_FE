import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './orderDetail.css'; // Import CSS file for custom styles

const OrderDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [timer, setTimer] = useState(null);

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/bills/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const orderData = response.data.data;

        if (
          orderData.paymentMethod === 'ONLINE_BANKING' &&
          orderData.paymentStatus === 'PENDING'
        ) {
          const orderTime = new Date(orderData.createdAt).getTime();
          const deadline = orderTime + 24 * 60 * 60 * 1000;
          setTimer(deadline);
        }

        setOrder(orderData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.',
        });
        navigate('/dashboard/orders');
      }
    };

    window.scrollTo(0, 0);
    fetchOrderDetail();

    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [id, token, navigate]);

  const handlePayment = async () => {
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
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/bills/payment/${id}`
        );
        window.location.href = response.data.data.paymentUrl;
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

  const cancelOrder = async () => {
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
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/bills/cancel`,
          { billID: id }
        );
        swalWithBootstrapButtons.fire(
          'Đã hủy!',
          'Đơn hàng đã được hủy thành công.',
          'success'
        );
        navigate('/dashboard/orders');
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

  const requestGuarantee = async () => {
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
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/bills/guarantee`,
          { billID: id }
        );
        swalWithBootstrapButtons.fire(
          'Đã yêu cầu!',
          'Yêu cầu bảo hành đã được gửi thành công.',
          'success'
        );
        navigate('/dashboard/orders');
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

  const buyAgain = async () => {
    if (!order) return;

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

  const getStatusText = (status) => {
    switch (status?.toLowerCase()) {
    case 'completed':
      return 'Hoàn thành';
    case 'unpaid':
    case 'pending_payment':
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

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
    case 'completed':
      return 'badge bg-success';
    case 'unpaid':
    case 'pending_payment':
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

  const getPaymentStatusText = (status) => {
    switch (status) {
    case 'COMPLETED':
      return 'Đã thanh toán';
    case 'PENDING':
      return 'Chưa thanh toán';
    case 'CANCELLED':
      return 'Đã hủy';
    default:
      return status;
    }
  };

  const getPaymentStatusClass = (status) => {
    switch (status) {
    case 'COMPLETED':
      return 'text-success';
    case 'PENDING':
      return 'text-warning';
    case 'CANCELLED':
      return 'text-danger';
    default:
      return '';
    }
  };

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
        <p className="mt-2">Đang tải thông tin đơn hàng...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center p-5">
        <i className="fa fa-exclamation-triangle fa-3x text-warning mb-3"></i>
        <h4>Không tìm thấy đơn hàng</h4>
        <p>Đơn hàng không tồn tại hoặc bạn không có quyền xem.</p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/dashboard/orders')}
        >
          Quay lại danh sách đơn hàng
        </button>
      </div>
    );
  }

  // Determine if order is unpaid
  const isUnpaid =
    order.paymentMethod === 'ONLINE_BANKING' &&
    order.paymentStatus === 'PENDING';
  const status = isUnpaid ? 'unpaid' : order.status.toLowerCase();

  return (
    <div className="order-detail-container">
      <div className="dashboard-title mb-4 d-flex justify-content-between align-items-center">
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-3"
            onClick={() => navigate('/dashboard/orders')}
          >
            <i className="fa fa-arrow-left me-1"></i> Quay lại
          </button>
          <h3 className="d-inline-block">Chi tiết đơn hàng</h3>
        </div>
        <span className={getStatusBadgeClass(status)}>
          {getStatusText(status)}
        </span>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Thông tin sản phẩm</h5>
            </div>
            <div className="card-body p-0">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="order-item d-flex p-3 border-bottom"
                >
                  <div className="order-item-img me-3">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                      }}
                      className="rounded"
                    />
                  </div>
                  <div className="order-item-details flex-grow-1">
                    <h6 className="product-name mb-1">{item.productName}</h6>
                    <p className="product-quantity mb-1 text-muted">
                                        Số lượng: x{item.quantity || 0}
                    </p>
                    <div className="product-price">
                      <span className="sale-price fw-bold text-danger">
                                            ₫{(item.unitPrice || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="order-item-total text-end">
                    <p className="mb-0 fw-bold">
                                        ₫{((item.unitPrice || 0) * (item.quantity || 0)).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0" style={{ fontSize: '25px' }}>
                                    Thông tin nhận hàng
                  </h5>
                </div>
                <div className="card-body">
                  <p className="mb-1">
                    <strong>Người nhận:</strong>{' '}
                    {order.shipping.address.recipientName || ''}
                  </p>
                  <p className="mb-1">
                    <strong>Số điện thoại:</strong>{' '}
                    {order.shipping.address.phone || ''}
                  </p>
                  <p className="mb-0">
                    <strong>Địa chỉ:</strong>{' '}
                    {order.shipping.address.addressName || ''},
                    {order.shipping.address.ward || ''},{' '}
                    {order.shipping.address.district || ''},{' '}
                    {order.shipping.address.province || ''}

                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0" style={{ fontSize: '25px' }}>Thông tin thanh toán</h5>
                </div>
                <div className="card-body">
                  <p className="mb-1">
                    <strong>Phương thức thanh toán:</strong>{' '}
                    {getPaymentMethodText(order.payment.paymentMethod)}
                  </p>
                  <p className="mb-1">
                    <strong>Trạng thái thanh toán:</strong>
                    <span
                      className={getPaymentStatusClass(order.payment.paymentStatus)}
                    >
                      {' '}
                      {getPaymentStatusText(order.payment.paymentStatus)}
                    </span>
                  </p>
                  <p className="mb-0">
                    <strong>Ngày đặt hàng:</strong>{' '}
                    {new Date(order.createdAt).toLocaleDateString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header bg-white">
              <h5 className="mb-0">Tổng thanh toán</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Tạm tính:</span>
                <span>
                  {(order.totalPrice || 0).toLocaleString()} ₫
                </span>
              </div>

              {order.shipping.shippingFee !== undefined && (
                <div className="d-flex justify-content-between mb-2">
                  <span>Phí vận chuyển:</span>
                  <span>{(order.shipping.shippingFee || 0).toLocaleString()} ₫</span>
                </div>
              )}

              <div className="d-flex justify-content-between mb-2 text-success">
                <span>Giảm giá:</span>
                <span>-{(order.discount || 0).toLocaleString()} ₫</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-2 fw-bold">
                <span>Tổng cộng:</span>
                <span className="text-danger h5 mb-0">
                                ₫{(order.totalPrice + order.shipping.shippingFee || 0).toLocaleString()}
                </span>
              </div>

              {isUnpaid && timer && (
                <div className="payment-countdown mt-3">
                  <div className="alert alert-warning">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-clock text-danger me-1"></i>
                      <span>
                                            Vui lòng thanh toán trong:{' '}
                        <span className="fw-bold">
                          {formatTimeRemaining(timer)}
                        </span>
                      </span>
                    </div>
                    <div className="progress mt-2" style={{ height: '5px' }}>
                      {(() => {
                        const now = new Date().getTime();
                        const orderTime = new Date(order.createdAt).getTime();
                        const deadline = timer;
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
                </div>
              )}

              <div className="action-buttons mt-3">
                {isUnpaid && (
                  <button
                    className="btn btn-danger w-100 mb-2"
                    onClick={handlePayment}
                  >
                    <i className="fa fa-credit-card me-1"></i>Thanh toán ngay
                  </button>
                )}

                {status === 'pending' && (
                  <button
                    className="btn btn-outline-danger w-100 mb-2"
                    onClick={cancelOrder}
                  >
                    <i className="fa fa-times me-1"></i>Hủy đơn hàng
                  </button>
                )}

                {status === 'shipped' && (
                  <button
                    className="btn btn-warning w-100 mb-2"
                    onClick={requestGuarantee}
                  >
                    <i className="fa fa-tools me-1"></i>Yêu cầu bảo hành
                  </button>
                )}

                {(status === 'completed' || status === 'cancelled') && (
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={buyAgain}
                  >
                    <i className="fa fa-redo me-1"></i>Mua lại
                  </button>
                )}

                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => navigate('/dashboard/orders')}
                >
                  <i className="fa fa-list me-1"></i>Xem tất cả đơn hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailView;
