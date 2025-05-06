import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'datatables.net-bs5'
import '~/assets/Admin/css/customPagination.css';
import $ from 'jquery'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Tooltip } from '@mui/material';
import { Rating } from '@mui/material'

export default function ProductList() {

  const [products, setProducts] = useState([])
  const tableRef = useRef(null)
  const navigate = useNavigate()

  const fetchData = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then((response) => {
        setProducts(response.data.data)
        console.log(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
      });

  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [products])

  // useEffect(() => {
  //     console.log(products)
  // }, [products])

  const handleRowClick = (id) => {
    navigate(`/admin/comments/${id}`)
  }

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
                  <div className='table-responsive category-table'>
                    <table
                      ref={tableRef}
                      className="table all-package theme-table table-product dataTable no-footer" id="table_id"
                    >
                      <thead>
                        <tr>
                          <th>Hình ảnh</th>
                          <th>Tên sản phẩm<SwapVertIcon /></th>
                          <th>Danh mục<SwapVertIcon /></th>
                          <th>Số lượng đánh giá<SwapVertIcon /></th>
                          <th>Đánh giá<SwapVertIcon /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.length > 0 ? (
                          products.map((product) => (
                            <tr
                              key={product.id}
                              onClick={() => handleRowClick(product.id)}
                              style={{ cursor: 'pointer' }}>
                              <td>
                                <div className="table-image">
                                  <img
                                    src={product.listImage && product.listImage.length > 0 ? product.listImage[0] : null}
                                    className="img-fluid"
                                    alt={product.name}
                                  />
                                </div>
                              </td>
                              <Tooltip title={product.name} arrow>
                                <td style={{
                                  padding: '0px',
                                  margin: '15px',
                                  maxWidth: '300px',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'normal',
                                  wordBreak: 'break-word',
                                  cursor: 'pointer'
                                }}>
                                  {product.name}
                                </td>
                              </Tooltip>
                              <td>{product.categoryDTO.categoryName}</td>
                              <td>{product.quantity}</td>
                              <td><Rating defaultValue={product?.ratingAvg ?? 0} precision={1} size='medium' readOnly /></td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={7} className='text-center'>
                                                            Không có sản phẩm nào
                            </td>
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
    </>
  )
}