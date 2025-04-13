import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
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
import axios from "axios";
import Swal from "sweetalert2";

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
        const date = new Date(dateString);

        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(date);

        const month = parts.find(part => part.type === 'month').value;
        const day = parts.find(part => part.type === 'day').value;
        const year = parts.find(part => part.type === 'year').value;
        const hour = parts.find(part => part.type === 'hour').value;
        const minute = parts.find(part => part.type === 'minute').value;
        const period = parts.find(part => part.type === 'dayPeriod').value;

        return `${month} ${day}, ${year} at ${hour}:${minute} ${period}`;
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    const openMap = () => {
        const address = `${orderDetail.shipping.address.addressName}, ${orderDetail.shipping.address.ward}, ${orderDetail.shipping.address.district}, ${orderDetail.shipping.address.province}`;
        console.log(address)
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
    }

    const handleOptions = (option) => {
        handleClose()
        Swal.fire({
            title: "Bạn có muốn cập nhật đơn hàng?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: "Hủy"
        }).then(async result => {
            if (result.isConfirmed) {
                console.log({
                    billID: parseInt(id),
                    status: option
                })
                axios.post("/api/bills/status", {
                    billID: id,
                    status: option
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
                                                <Typography variant="h6">Order ID: {orderDetail?.orderNumber ?? "#000000"}</Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {formatDate(orderDetail.createdAt)}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center" }}>
                                                {orderDetail.status == "PENDING" && <Chip label={orderDetail.status} color="warning" />}
                                                {orderDetail.status == "CANCELLED" && <Chip label={orderDetail.status} color="error" />}
                                                {(orderDetail.status == "COMPLETED" || orderDetail.status == "SHIPPING") && <Chip label={orderDetail.status} color="success" />}
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
                                                    <MenuItem onClick={() => handleOptions("shipping")}>Xác nhận đơn hàng</MenuItem>
                                                    <MenuItem onClick={() => handleOptions("completed")}>Xác nhận giao hàng</MenuItem>
                                                    <MenuItem onClick={() => handleOptions("cancelled")}>Hủy đơn hàng </MenuItem>
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
                                                                            <Typography variant="body1">{`${item.quantity} x ${formatPrice(item.unitPrice)}`}</Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" sx={{ ml: 2 }}>
                                                                            {formatPrice(item.quantity * item.unitPrice)}
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
                                                        {/* <Typography variant="body2" color="textSecondary">
                                                            Use the personalized guide to get your store up and running.
                                                        </Typography> */}
                                                        <Box sx={{ mt: 2 }}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography>Temporary Total</Typography>
                                                                <Typography>{formatPrice(orderDetail.totalPrice)}</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography>Discount</Typography>
                                                                <Typography>{orderDetail?.discount ?? "No discount"}</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography>Coupon</Typography>
                                                                <Typography>{orderDetail?.coupon ?? "No coupon"}</Typography>
                                                            </Box>

                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography>Payment Method</Typography>
                                                                <Typography>{orderDetail?.paymentMethod}</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography>Shipping Fee</Typography>
                                                                <Typography>{formatPrice(orderDetail?.shipping.shippingFee)}</Typography>
                                                            </Box>
                                                            <Divider sx={{ my: 1 }} />
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Typography fontWeight="bold">Total</Typography>
                                                                <Typography fontWeight="bold">{formatPrice(orderDetail.totalPrice)}</Typography>
                                                            </Box>
                                                            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                                                <Typography>Paid by customer</Typography>
                                                                <Typography>$0.00</Typography>
                                                            </Box> */}
                                                        </Box>
                                                        <Divider sx={{ my: 2 }} />
                                                        {/* <Typography variant="body2" color="textSecondary">
                                                            Payment due when the invoice is sent
                                                        </Typography> */}
                                                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                                            <Button variant="contained" color="primary">
                                                                Print Bill
                                                            </Button>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>

                                            {/* Right Column: Notes, Customer, Conversion Summary */}
                                            <Grid item xs={12} md={4}>
                                                {/* Notes Section */}
                                                <Card sx={{ mb: 3 }}>
                                                    <CardContent>
                                                        <Typography variant="h6" fontWeight="bold">Notes</Typography>
                                                        {/* <Typography variant="body2">First customer and order!</Typography> */}
                                                    </CardContent>
                                                </Card>

                                                {/* Customer Section */}
                                                <Card sx={{ mb: 3 }}>
                                                    <CardContent>
                                                        <Typography variant="h6" fontWeight="bold">Customers</Typography>
                                                        <Typography variant="subtitle1">{orderDetail.customer.userName}</Typography>
                                                        {/* <Typography variant="body2" color="textSecondary">
                                                            1 Order
                                                        </Typography>
                                                        <Typography variant="body2" color="success.main">
                                                            Customer is tax-exempt
                                                        </Typography> */}
                                                        <Divider sx={{ my: 2 }} />
                                                        <Typography variant="h6" fontWeight="bold">Contact Information</Typography>
                                                        <Typography variant="body2">{orderDetail.customer.email}</Typography>
                                                        <Typography variant="body2">+{orderDetail.customer?.phoneNumber ?? "No phone number"}</Typography>
                                                        <Divider sx={{ my: 2 }} />
                                                        <Typography variant="h6" fontWeight="bold">Shipping Address</Typography>
                                                        <Typography variant="body2"><b>Recipient: </b>{orderDetail.shipping.address?.recipientName ?? "No recipient"}</Typography>
                                                        <Typography variant="body2">+{orderDetail.shipping.address?.phone}</Typography>
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