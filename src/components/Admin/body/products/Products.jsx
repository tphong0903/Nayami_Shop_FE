import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import ProductItem from './ProductItem'
import $ from 'jquery'
import 'datatables.net-bs5'
import '/src/assets/Admin/css/customPagination.css';
import SwapVertIcon from '@mui/icons-material/SwapVert';


export default function Products() {
  const [products, setProducts] = useState([])
  const tableRef = useRef(null)

  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => {
        setProducts(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
      })
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [products])

  const deleteProduct = async (product) => {
    Swal.fire({
      title: product.displayStatus == true ? 'Bạn có chắc chắn muốn ẩn sản phẩm không?' : 'Bạn có chắc chắn muốn hiển thị sản phẩm không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: product.displayStatus == true ? 'Ẩn' : 'Hiển thị',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/products/${product.id}`);
          axios
            .get('/api/products')
            .then((response) => {
              setProducts(response.data.data)
            })
            .catch(() => {
              Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
            })

          Swal.fire('Thành công!', '', 'success');
        } catch (err) {
          Swal.fire('Lỗi!', 'Đã có lỗi ', 'error');
        }
      }
    });
  };

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
                        <Link className='btn btn-solid' to={'/admin/add-new-product'}>
                          Thêm sản phẩm
                        </Link>
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
                        <th>Tên sản phẩm<SwapVertIcon /></th>
                        <th>Danh mục<SwapVertIcon /></th>
                        <th>Số lượng<SwapVertIcon /></th>
                        <th>Giá<SwapVertIcon /></th>
                        <th>Trạng thái<SwapVertIcon /></th>
                        <th>Tùy chọn</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.length > 0 ? (
                        products.map((product) => (
                          <ProductItem key={product.id} product={product} deleteProduct={deleteProduct} />
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
