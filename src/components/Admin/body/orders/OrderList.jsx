import axios from "axios"
import { useEffect, useState } from "react"
import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography, Divider, Button, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

export default function OrderList() {
    const [orders, setOrders] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/api/bills").then(
            res => {
                console.log(res.data.data)
                const reformatData = res.data.data.map(item => {
                    return ({
                        id: item.id,
                        totalPrice: item.totalPrice,
                        paymentMethod: item.paymentMethod,
                        status: item.status,
                        orderNumber: item.orderNumber,
                        customerName: item.customerName,
                        city: item.city,
                        currency: item.payment.currency,
                        items: item.lineItems.length
                    })
                })
                setOrders(reverseArrayByKey(reformatData, "id"))
            }
        )
    }, [])

    useEffect(() => {
        console.log(orders)
    }, [orders])

    const reverseArrayByKey = (array, key) => {
        return [...array].sort((a, b) => {
            const valueA = a[key];
            const valueB = b[key];
            if (typeof valueA === 'number') return valueB - valueA;
            if (typeof valueA === 'string') return valueB.localeCompare(valueA);
            return 0;
        });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'orderNumber', headerName: 'Order Number', width: 150, valueGetter: (value, row) => row.orderNumber || 'N/A' },
        { field: 'customerName', headerName: 'Customer Name', width: 200 },
        { field: 'totalPrice', headerName: 'Total Price', width: 150 },
        { field: 'paymentMethod', headerName: 'Payment Method', width: 150 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'city', headerName: 'City', width: 200 },
        { field: 'currency', headerName: 'Currency', width: 100 },
        { field: 'items', headerName: 'Items', width: 100 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    const orderDetail = (id) => {
        navigate(`/admin/orders/${id}`)
    }

    return (<>
        <div className="page-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <Paper sx={{ height: "80vh", width: '100%' }}>
                                    <DataGrid
                                        rows={orders}
                                        columns={columns}
                                        initialState={{ pagination: { paginationModel } }}
                                        pagination
                                        pageSizeOptions={[5, 10]}
                                        disableRowSelectionOnClick
                                        onRowClick={(params) => orderDetail(params.row.id)}
                                        sx={{
                                            border: 0,
                                            '& .MuiDataGrid-row:hover': {
                                                backgroundColor: '#e3f2fd',
                                                cursor: 'pointer', // Change cursor to pointer on hover
                                            },
                                            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-actions': {
                                                margin: 0,
                                            }
                                        }}
                                    />
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}