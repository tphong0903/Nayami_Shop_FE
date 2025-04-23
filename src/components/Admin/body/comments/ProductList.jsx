import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'datatables.net-bs5'
import '/src/assets/Admin/css/customPagination.css';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('/api/products', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then((response) => {
                setProducts(response.data.data)
            })
            .catch(() => {
                Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
            });
    }, [])

    // useEffect(() => {
    //     console.log(products)
    // }, [products])

    return (
        <>
            <div className='page-body'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='card card-table'>
                                <div className='card-body'>
                                    <div className='title-header option-title'>
                                        <h5>Danh sách sản phẩm</h5>
                                    </div>
                                    <Box className="p-4 bg-gray-100 min-h-screen">
                                        <Grid container spacing={3}>
                                            {
                                                products.length > 0
                                                    ? products.map((card, index) => (
                                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                                            <Link to={`/admin/comments/${card.id}`} underline="none">
                                                                <Card
                                                                    sx={{
                                                                        height: 350,
                                                                        boxShadow: 3,
                                                                        '&:hover': { boxShadow: 6 },
                                                                        transition: 'box-shadow 0.3s',
                                                                        cursor: 'pointer',
                                                                        overflow: 'hidden',
                                                                    }}
                                                                >
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="140"
                                                                        image={card.listImage[0]}
                                                                        alt={card.name}
                                                                        sx={{ height: 160, objectFit: 'contain', width: '100%' }}
                                                                        className="zoom-image my-3"
                                                                    />
                                                                    <CardContent className='text-center'>
                                                                        <Typography
                                                                            variant="h5"
                                                                            component="div"
                                                                            className="gradient-text"
                                                                            sx={{
                                                                                fontFamily: "'Playfair Display', serif",
                                                                                fontWeight: 700,
                                                                            }}
                                                                        >
                                                                            {card.name}
                                                                        </Typography>
                                                                    </CardContent>
                                                                </Card>
                                                            </Link>
                                                        </Grid>
                                                    ))
                                                    : <>Loading</>
                                            }
                                        </Grid>
                                    </Box>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}