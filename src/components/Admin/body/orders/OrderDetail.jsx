import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Menu, MenuItem
} from '@mui/material';
import { Edit, Map, MoreVert, ShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function OrderDetail() {
  const [orderDetail, setOrderDetail] = useState()
  const { id } = useParams()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios.get(`/api/bills/${id}`).then(res => {
      setOrderDetail(res.data.data)
    })
  }, [])

  useEffect(() => {
    console.log(orderDetail)
  }, [orderDetail])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const openMap = () => {
    const address = `${orderDetail.shipping.address.addressName}, ${orderDetail.shipping.address.ward}, ${orderDetail.shipping.address.district}, ${orderDetail.shipping.address.province}`;
    console.log(address)
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const handleOptions = (option) => {
    handleClose()
    Swal.fire({
      title: 'Bạn có muốn cập nhật đơn hàng?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Hủy'
    }).then(async result => {
      if (result.isConfirmed) {
        console.log({
          billID: parseInt(id),
          status: option,
          email: orderDetail.customer.email
        })
        axios.post('/api/bills/status', {
          billID: parseInt(id),
          status: option,
          email: orderDetail.customer.email
        })
        window.location.reload()
      }
    })
  }

  return <>
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                {orderDetail &&
                  <Box sx={{ p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
                    <button
                      type="button"
                      className="btn btn-secondary mb-5"
                      onClick={() => navigate('/admin/orders')}
                    >
                      Quay lại
                    </button>
                    {/* Header Section */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography variant="body2" color="textSecondary">
                          {formatDate(orderDetail.createdAt)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        {orderDetail.status == 'PENDING' && <Chip label={orderDetail.status} color="warning" />}
                        {orderDetail.status == 'CANCELLED' && <Chip label={orderDetail.status} color="error" />}
                        {(orderDetail.status == 'COMPLETED' || orderDetail.status == 'SHIPPING') && <Chip label={orderDetail.status} color="success" />}
                        <IconButton
                          onClick={handleClick}
                        >
                          <MoreVert />
                        </IconButton>
                        <Menu
                          id="options-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'options-button',
                          }}
                        >
                          <MenuItem onClick={() => handleOptions('shipping')}>Xác nhận đơn hàng</MenuItem>
                          <MenuItem onClick={() => handleOptions('completed')}>Xác nhận giao hàng</MenuItem>
                          <MenuItem onClick={() => handleOptions('cancelled')}>Hủy đơn hàng </MenuItem>
                        </Menu>
                      </Box>
                    </Box>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Card sx={{ mb: 3 }}>
                          <CardContent>
                            <Typography variant="subtitle1">Order Item</Typography>
                            {/* <Typography variant="body2" color="textSecondary">
                                                            Use the personalized guide to get your store up and running.
                                                        </Typography> */}
                            {orderDetail.items.length > 0 &&
                              orderDetail.items.map(item => {
                                return <>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <img
                                      src={item.productImage}
                                      alt=""
                                      style={{ width: 50, height: 50, marginRight: 16 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                      <Typography variant="body1">{item.productName}</Typography>
                                      {/* <Typography variant="body2" color="textSecondary">
                                                                                Medium • Black
                                                                            </Typography> */}
                                      <Typography variant="body1">{`${item.quantity} x ${formatCurrency(item.unitPrice)}`}</Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ ml: 2 }}>
                                      {formatCurrency(item.quantity * item.unitPrice)}
                                    </Typography>
                                  </Box>
                                </>
                              })
                            }
                            <Divider sx={{ my: 2 }} />
                          </CardContent>
                        </Card>

                        {/* Order Summary Section */}
                        <Card sx={{ mb: 3 }}>
                          <CardContent>
                            <Typography variant="subtitle1">Order Summary</Typography>
                            <Box sx={{ mt: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Tạm tính</Typography>
                                <Typography>{formatCurrency(orderDetail.totalPrice)}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Giảm giá</Typography>
                                <Typography>{orderDetail?.discount ?? formatCurrency(0)}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Phí vận chuyển</Typography>
                                <Typography>{formatCurrency(orderDetail?.shipping.shippingFee)}</Typography>
                              </Box>
                              <Divider sx={{ my: 1 }} />
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography fontWeight="bold">Tổng</Typography>
                                <Typography fontWeight="bold">{formatCurrency(orderDetail.totalPrice + orderDetail.shipping.shippingFee - orderDetail.discount)}</Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        {/* Customer Section */}
                        <Card sx={{ mb: 3 }}>
                          <CardContent>
                            <Typography variant="h6" fontWeight="bold">Customers</Typography>
                            <Typography variant="subtitle1">{orderDetail.customer.userName}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h6" fontWeight="bold">Contact Information</Typography>
                            <Typography variant="body2">{orderDetail.customer.email}</Typography>
                            <Typography variant="body2">{orderDetail.customer?.phoneNumber ?? 'No phone number'}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h6" fontWeight="bold">Phương thức thanh toán</Typography>
                            <Typography variant="body2">{orderDetail?.paymentMethod}</Typography>
                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6" fontWeight="bold">Shipping Address</Typography>
                            <Typography variant="body2"><b>Recipient: </b>{orderDetail.shipping.address?.recipientName ?? 'No recipient'}</Typography>
                            <Typography variant="body2">{orderDetail.shipping.address?.phone}</Typography>
                            <Typography variant="body2">{orderDetail.shipping.address?.addressName}</Typography>
                            <Typography variant="body2">{orderDetail.shipping.address?.ward}</Typography>
                            <Typography variant="body2">{orderDetail.shipping.address?.district}</Typography>
                            <Typography variant="body2">{orderDetail.shipping.address?.province}</Typography>
                            <Button startIcon={<Map />} variant="text" sx={{ mt: 1 }} onClick={() => openMap()}>
                              View on Map
                            </Button>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h6" fontWeight="bold">Billing Address</Typography>
                            <Typography variant="body2">Same as shipping address</Typography>
                          </CardContent>
                        </Card>

                        {/* Conversion Summary Section */}
                        {/* <Card>
                                                    <CardContent>
                                                        <Typography variant="subtitle1">Conversion Summary</Typography>
                                                        <Typography variant="body2">
                                                            There aren't any conversion details available for this order.
                                                        </Typography>
                                                        <Button variant="text" sx={{ mt: 1 }}>
                                                            Learn More
                                                        </Button>
                                                    </CardContent>
                                                </Card> */}
                      </Grid>
                    </Grid>
                  </Box>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}