import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery'
import 'datatables.net-bs5'
import '~/assets/Admin/css/customPagination.css';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DiscountCampainItem from './DiscountCampainItem';

export default function DiscountCampain() {
  const [discountCampains, setDiscountCampains] = useState([])
  const tableRef = useRef(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/discounts`)
      .then((response) => {
        setDiscountCampains(response.data.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
      })
  }, [])

  useEffect(() => {
    if (discountCampains.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [discountCampains])

  const deleteDiscountCampain = async (discountCampain) => {
    Swal.fire({
      title: discountCampain.active == true ? 'Bạn có chắc chắn muốn tắt khuyến mãi không?' : 'Bạn có chắc chắn muốn kích hoạt không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: discountCampain.active == true ? 'Tắt' : 'Kích hoạt',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/discounts/${discountCampain.id}`);
          axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/api/discounts`)
            .then((response) => {
              setDiscountCampains(response.data.data)
            })
            .catch(() => {
              Swal.fire('Lỗi!', 'Không thể tải danh sách khuyến mãi.', 'error')
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
                  <h5>Danh sách chiến dịch khuyến mãi</h5>
                  <div className='right-options'>
                    <ul>
                      <li>
                        <Link className='btn btn-solid' to={'/admin/add-discounts'}>
                          Thêm chiến dịch
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
                        <th>Tên</th>
                        <th>Ngày bắt đầu<SwapVertIcon /></th>
                        <th>Ngày kết thúc<SwapVertIcon /></th>
                        <th>Trạng thái<SwapVertIcon /></th>
                        <th>Tùy chọn</th>
                      </tr>
                    </thead>
                    <tbody>
                      {discountCampains.length > 0 ? (
                        discountCampains.map((product) => (
                          <DiscountCampainItem key={product.id} discountCampainItem={product} deleteDiscountCampain={deleteDiscountCampain} />
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
