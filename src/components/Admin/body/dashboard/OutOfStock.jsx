import { Tooltip } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { formatCurrency } from '~/utils/formatCurrency';

export default function OutOfStock() {
  const [listProduct, setListProduct] = useState([])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/productOutOfStock`)
      .then((response) => {
        setListProduct(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể lấy dữ liệu.', 'error');
      });
  }, []);
  return (
    <div className="col-xl-6">
      <div className="card o-hidden card-hover">
        <div className="card-header border-0 pb-1">
          <div className="card-header-title">
            <h4>Sản phẩm sắp hết hàng</h4>
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <div className="table-responsive" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              <table
                className="best-selling-table w-image
                                      w-image
                                      w-image table border-0"
              ><thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listProduct.map(p => (
                      <tr key={p.id}>
                        <td>
                          <div className="best-product-box">
                            <div className="product-image">
                              <img
                                src={p.listImage[0]}
                                className="img-fluid"
                                alt="Product"
                              />
                            </div>
                            <Link className="product-name" to={`/admin/edit-product/${p.id}`}>
                              <Tooltip title={p.name} arrow>
                                <h5 style={{
                                  maxWidth: '200px',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  display: 'inline-block'
                                }}>
                                  {p.name}
                                </h5>
                              </Tooltip>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="product-detail-box">
                            <h5>{formatCurrency(p.unitPrice)}</h5>
                          </div>
                        </td>
                        <td>
                          <div className="product-detail-box">
                            <h5>{p.quantity}</h5>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
