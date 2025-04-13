import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography, Divider, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function OrderHistory() {

    const [selectedValue, setSelectedValue] = useState("All");
    const [orders, setOrders] = useState()

    useEffect(() => {
        callOrderData()
    }, [])

    useEffect(() => {
        console.log(orders)
    }, [orders])

    const callOrderData = () => {
        axios.get("/api/bills/history")
            .then(response => {
                // console.log(response.data)
                setOrders(response.data.data)
            })
            .catch(err => {
                Swal.fire({
                    title: 'Dữ liệu order không tồn tại!',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Xác nhận',
                })
            })
    }

    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setSelectedValue(newValue);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    const cancelBill = (id) => {
        Swal.fire({
            title: "Bạn có chắc muốn hủy đơn hàng?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: "Hủy"
        }).then(async result => {
            if (result.isConfirmed) {
                axios.post("/api/bills/cancel", { billID: id })
                window.location.reload()
            }
        })
    }

    return (
        <>
            <div className="container-fluid-lg">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-center">
                        <ToggleButtonGroup
                            value={selectedValue}
                            exclusive
                            color="success"
                            onChange={handleChange}
                            sx={{
                                '& .MuiToggleButton-root': {
                                    color: '#0da487',
                                    borderColor: '#0da487',
                                    '&.Mui-selected': {
                                        backgroundColor: '#0da487',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#0d8c74',
                                        },
                                    },
                                    '&:hover': {
                                        backgroundColor: '#d4d4d4',
                                    },
                                },
                            }}
                        >
                            <ToggleButton value="All">Tất cả</ToggleButton>
                            <ToggleButton value="pending">Chờ xác nhận</ToggleButton>
                            <ToggleButton value="confirmed">Đã xác nhận</ToggleButton>
                            <ToggleButton value="shipping">Đang giao</ToggleButton>
                            <ToggleButton value="shipped">Đã giao</ToggleButton>
                            <ToggleButton value="completed">Hoàn thành</ToggleButton>
                            <ToggleButton value="cancelled">Đã hủy</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Stack
                            sx={{
                                width: "100%"
                            }}
                        >
                            {
                                orders?.length > 0
                                    ? orders.map((item, index) => {
                                        return <>
                                            <Box sx={{ width: "100%", mx: 'auto', my: "1.5rem", p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography variant="body2" sx={{ color: '#757575' }}>
                                                            {item.status}
                                                        </Typography>
                                                        <Typography marginInlineStart="1rem" variant="body2" sx={{ color: '#757575' }}>
                                                            {formatDate(item.createdAt)}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                        {item.orderNumber ?? "#00000"}
                                                    </Typography>
                                                </Box>

                                                <Divider sx={{ mb: 2 }} />

                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                    <Box
                                                        sx={{
                                                            width: 80,
                                                            height: 80,
                                                            mr: 2,
                                                            bgcolor: '#f5f5f5',
                                                            borderRadius: 1,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <img width="100%" src={item.items[0].productImage} alt="" />
                                                    </Box>

                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Typography variant="body1">
                                                            {item.items[0].productName}
                                                        </Typography>
                                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                                            x{item.items[0].quantity}
                                                        </Typography>
                                                    </Box>

                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#757575' }}>
                                                            {formatPrice(item.items[0].unitPrice)}
                                                        </Typography>
                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                            {formatPrice(item.items[0].unitPrice)}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                {
                                                    item.items.length > 1
                                                        ? <>
                                                            <Accordion sx={{
                                                                borderBottom: "0px solid #fff"
                                                            }}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                >
                                                                    <Typography>Chi tiết đơn hàng</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    {item.items.map((detail, idx) => {
                                                                        if (idx > 0) {
                                                                            return <>
                                                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                                                    <Box
                                                                                        sx={{
                                                                                            width: 80,
                                                                                            height: 80,
                                                                                            mr: 2,
                                                                                            bgcolor: '#f5f5f5',
                                                                                            borderRadius: 1,
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            justifyContent: 'center',
                                                                                        }}
                                                                                    >
                                                                                        <img width="100%" src={detail.productImage} alt="" />
                                                                                    </Box>

                                                                                    <Box sx={{ flexGrow: 1 }}>
                                                                                        <Typography variant="body1">
                                                                                            {detail.productName}
                                                                                        </Typography>
                                                                                        <Typography variant="caption" sx={{ color: '#757575' }}>
                                                                                            x{detail.quantity}
                                                                                        </Typography>
                                                                                    </Box>

                                                                                    <Box sx={{ textAlign: 'right' }}>
                                                                                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#757575' }}>
                                                                                            {formatPrice(detail.unitPrice)}
                                                                                        </Typography>
                                                                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                                                            {formatPrice(detail.unitPrice)}
                                                                                        </Typography>
                                                                                    </Box>
                                                                                </Box>
                                                                            </>
                                                                        }
                                                                    })}
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        </>
                                                        : <></>
                                                }

                                                <Divider sx={{ mb: 2 }} />

                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="body1">
                                                        Tổng tiền: <strong>{formatPrice(item.totalPrice)}</strong>
                                                    </Typography>

                                                    <Box>
                                                        {item.status == "PENDING" &&
                                                            <Button variant="outlined"
                                                                sx={{
                                                                    border: "1px solid #ff4f4f",
                                                                    marginInlineEnd: "1rem",
                                                                    backgroundColor: '#ff4f4f',
                                                                    color: '#ffffff',
                                                                    '&:hover': {
                                                                        backgroundColor: '#db4444',
                                                                    }
                                                                }}
                                                                onClick={() => {
                                                                    cancelBill(item.id)
                                                                }}
                                                            >
                                                                Hủy đơn hàng
                                                            </Button>}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </>
                                    })
                                    : <>Loading Order</>
                            }
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )
}