/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {

  Button, MenuItem,
  FormControl,
  Select
} from '@mui/material';
import { Map } from '@mui/icons-material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { formatCurrency } from '~/utils/formatCurrency';

export default function OrderDetail() {
  const [orderDetail, setOrderDetail] = useState()
  const { id } = useParams()
  const [anchorEl, setAnchorEl] = useState(null);


  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios.get(`/api/bills/${id}`).then(res => {
      setOrderDetail(res.data.data)
      console.log(res.data.data)
    })
  }, [id])

  const extractDateTime = (dateString) => {
    if (!dateString) return 'Ngày không xác định';

    const cleanDate = dateString.split('.')[0];
    const date = new Date(cleanDate);
    if (isNaN(date.getTime())) return 'Ngày không xác định';

    const pad = (n) => (n < 10 ? '0' + n : n);
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const openMap = () => {
    const address = `${orderDetail.shipping.address.addressName}, ${orderDetail.shipping.address.ward}, ${orderDetail.shipping.address.district}, ${orderDetail.shipping.address.province}`;
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const handleOptions = (option, type) => {
    handleClose();
    Swal.fire({
      title: 'Bạn có muốn cập nhật đơn hàng?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (type != 1) {
          try {
            await axios.post('/api/bills/status', {
              billID: parseInt(id),
              status: option,
              email: orderDetail.customer.email
            });

            setOrderDetail(prev => ({
              ...prev,
              status: option
            }));

            Swal.fire('Thành công', 'Đơn hàng đã được cập nhật.', 'success');
          } catch (error) {
            Swal.fire('Lỗi', 'Không thể cập nhật đơn hàng.', 'error');
          }
        } else {

        }
      }
    });
  };

  return <>
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="title-header title-header-block package-card">
                  <div>
                    <h5>Đơn hàng: #{orderDetail?.id}</h5>
                  </div>
                </div>
                <div className="bg-inner cart-section order-details-table">
                  <div className="row g-4">
                    <div className="col-xl-8">
                      <div className="table-responsive table-details">
                        <table className="table cart-table table-borderless">
                          <thead>
                            <tr>
                              <th colSpan={2}>Sản phẩm</th>
                              <th className="text-end" colSpan={2}>
                                <a
                                  href="#"
                                  className="theme-color"
                                >
                                  Edit Items
                                </a>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderDetail?.items.map(li => (
                              <tr key={li.id} className="table-order">
                                <td>
                                  <Link to={`/admin/view-product/${li.productId}`}>
                                    <img
                                      src={li.productImage}
                                      className="img-fluid lazyload"
                                      alt=""
                                    />
                                  </Link>
                                </td>
                                <td>
                                  <p>Tên sản phẩm</p>
                                  <h5>{li.productName}</h5>
                                </td>
                                <td>
                                  <p>Số lượng</p>
                                  <h5>{li.quantity}</h5>
                                </td>
                                <td>
                                  <p>Giá</p>
                                  <h5>{formatCurrency(li.unitPrice)}</h5>
                                </td>
                              </tr>
                            ))
                            }
                          </tbody>
                          <tfoot>
                            <tr className="table-order">
                              <td colSpan={3}>
                                <h5>Tạm tính :</h5>
                              </td>
                              <td>
                                <h4>{formatCurrency(orderDetail?.items?.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0))}</h4>
                              </td>
                            </tr>
                            <tr className="table-order">
                              <td colSpan={3}>
                                <h5>Giảm giá :</h5>
                              </td>
                              <td>
                                <h4>{formatCurrency(orderDetail?.discount) ?? formatCurrency(0)}</h4>
                              </td>
                            </tr>
                            <tr className="table-order">
                              <td colSpan={3}>
                                <h5>Phí ship :</h5>
                              </td>
                              <td>
                                <h4>{formatCurrency(orderDetail?.shipping.shippingFee)}</h4>
                              </td>
                            </tr>
                            <tr className="table-order">
                              <td colSpan={3}>
                                <h4 className="theme-color fw-bold">
                                  Tổng tiền :
                                </h4>
                              </td>
                              <td>
                                <h4 className="theme-color fw-bold"> {formatCurrency(orderDetail?.totalPrice + orderDetail?.shipping.shippingFee)}</h4>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="order-success">
                        <div className="row g-4">
                          <h4>Thông Tin Đơn Hàng</h4>
                          <ul className="order-details">
                            <li>Mã đơn hàng: {orderDetail?.id}</li>
                            <li>Ngày đặt hàng: {extractDateTime(orderDetail?.createdAt)}</li>
                            <li>Tổng tiền: {formatCurrency(orderDetail?.totalPrice + orderDetail?.shipping.shippingFee)}</li>
                            <li>
                              <FormControl fullWidth>
                                <Select
                                  labelId="order-status-label"
                                  id="order-status"
                                  sx={{ fontWeight: 'bold' }}
                                  value={orderDetail?.status || ''}
                                  onChange={(e) => handleOptions(e.target.value)}
                                >
                                  <MenuItem value="PENDING" sx={{ fontWeight: 'bold' }}>Chờ xác nhận</MenuItem>
                                  <MenuItem value="CONFIRMED" sx={{ fontWeight: 'bold' }}>Đã xác nhận</MenuItem>
                                  <MenuItem value="SHIPPING" sx={{ fontWeight: 'bold' }}>Đang giao</MenuItem>
                                  <MenuItem value="SHIPPED" sx={{ fontWeight: 'bold' }}>Đã giao</MenuItem>
                                  <MenuItem value="COMPLETED" sx={{ fontWeight: 'bold' }}>Hoàn tất</MenuItem>
                                  <MenuItem value="CANCELLED" sx={{ fontWeight: 'bold' }}>Đã hủy</MenuItem>
                                  <MenuItem value="RETURN" sx={{ fontWeight: 'bold' }}>Trả hàng</MenuItem>
                                  <MenuItem value="GUARANTEE" sx={{ fontWeight: 'bold' }}>Bảo hành</MenuItem>
                                </Select>
                              </FormControl>
                            </li>
                          </ul>
                          <h4>Thông tin giao hàng</h4>
                          <ul className="order-details">
                            <li>Tên: {orderDetail?.shipping.address.recipientName}</li>
                            <li>Số điện thoại: {orderDetail?.shipping.address.phone}</li>
                            <li>Địa chỉ: {orderDetail?.shipping.address.addressName + ', '
                              + orderDetail?.shipping.address.district + ', '
                              + orderDetail?.shipping.address.ward + ', '
                              + orderDetail?.shipping.address.province}
                            </li>
                            <li>
                              <Button startIcon={<Map />} variant="text" sx={{ mt: 1 }} onClick={() => openMap()}>
                                View on Map
                              </Button>
                            </li>
                          </ul>
                          <div className="payment-mode">
                            <h4>Thông tin thanh toán</h4>
                            <p>Hình thức thanh toán: {orderDetail?.payment.paymentMethod}
                            </p>
                            <p>Trạng thái thanh toán:
                              <FormControl fullWidth>
                                <Select
                                  labelId="order-status-label"
                                  id="order-status"
                                  sx={{ fontWeight: 'bold' }}
                                  value={orderDetail?.payment.paymentStatus || ''}
                                  onChange={(e) => handleOptions(e.target.value, 1)}
                                >
                                  <MenuItem value="PENDING" sx={{ fontWeight: 'bold' }}>Chờ thanh toán</MenuItem>
                                  <MenuItem value="COMPLETED" sx={{ fontWeight: 'bold' }}>Hoàn tất</MenuItem>
                                  <MenuItem value="CANCELLED" sx={{ fontWeight: 'bold' }}>Đã hủy</MenuItem>
                                </Select>
                              </FormControl>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* section end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tracking table end */}
      <div className="container-fluid">
        {/* footer start*/}
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
      </div>
    </div>

  </>
}