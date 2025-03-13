import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import ProductItem from './ProductItem'
import $ from 'jquery'
import 'datatables.net-bs5'
import '/src/assets/Admin/css/customPagination.css';

export default function Products() {
  const [products, setProducts] = useState([])
  const tableRef = useRef(null)

  useEffect(() => {
    axios
      .get('/api/products/get-all-product')
      .then((response) => {
        console.log('API response:', response.data)
        setProducts(response.data.data)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error)
        Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
      })
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [products])

  return (
    <div className='page-body'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card card-table'>
              <div className='card-body'>
                <div className='title-header option-title'>
                  <h5>Danh sách sản phẩm</h5>
                  <div className='right-options'>
                    <ul>
                      <li>
                        <a className='btn btn-solid' href='add-new-product.html'>
                          Thêm sản phẩm
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='table-responsive category-table'>
                  <table
                    ref={tableRef}
                    className="table all-package theme-table table-product dataTable no-footer" id="table_id"
                  >
                    <thead>
                      <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Danh mục</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Tùy chọn</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.length > 0 ? (
                        products.map((product) => (
                          <ProductItem key={product.id} product={product} />
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
  )
}
