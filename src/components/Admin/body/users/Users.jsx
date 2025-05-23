import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import $ from 'jquery'
import 'datatables.net-bs5'
import '~/assets/Admin/css/customPagination.css';
export default function Users() {
  const [users, setUser] = useState([]);
  const tableRef = useRef(null)
  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [users])
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/get-all-users`);
      const user = response.data;
      setUser(user);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  }
  const updateNewStatus = async (userId) => {
    try {
      // 1. Lấy user hiện tại
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`);
      const currentUser = response.data;
      // 2. Đảo status (giả sử là true/false)
      const updatedStatus = !currentUser.active
      currentUser.active = updatedStatus;
      Swal.fire({
        title: currentUser.active == true ? 'Bạn có chắc chắn muốn kích hoạt không?' : 'Bạn có chắc chắn muốn vô hiệu hóa không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Có',
        cancelButtonText: 'Không'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // 3. Gửi PUT request với status mới
          const updateResponse = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/users/update/status/${userId}`, currentUser);

          if (updateResponse.data.status === 200 || updateResponse.data.status === 201) {
            Swal.fire({
              title: 'Cập nhật trạng thái thành công',
              icon: 'success',
              timer: 1000,
              showConfirmButton: false
            }).then(() => {
              fetchUsers()
            });
          } else {
            Swal.fire({
              title: 'Cập nhật thất bại',
              icon: 'error',
              text: updateResponse.data.message || 'Lỗi không xác định',
              confirmButtonText: 'OK'
            });
          }
        }
      });
    } catch (error) {
      Swal.fire({
        title: 'Đã xảy ra lỗi',
        icon: 'error',
        text: error.message || 'Vui lòng thử lại sau',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
    <div className="page-body">
      {/* All User Table Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>Khách hàng</h5>
                  <form className="d-inline-flex">
                    <Link to={'/admin/add-new-user'}
                      className="align-items-center btn btn-theme d-flex"
                    >
                      <i data-feather="plus" />
                      Thêm khách hàng
                    </Link>
                  </form>
                </div>
                <div className="table-responsive table-product">
                  <table
                    ref={tableRef}
                    className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>Mã<SwapVertIcon /></th>
                        <th>Tên<SwapVertIcon /></th>
                        <th>Số điện thoại<SwapVertIcon /></th>
                        <th>Email<SwapVertIcon /></th>
                        <th>Trạng thái<SwapVertIcon /></th>
                        <th>Tùy chỉnh<SwapVertIcon /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        users.map((user) =>
                        (
                          <tr key={user.userId}>
                            <td style={{ textAlign: 'center' }}>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td className={user.active === false ? 'status-danger' : 'status-close'}>
                              <span>{user.active === false ? 'Inactive' : 'Active'}</span>
                            </td>
                            <td>
                              <ul className="d-flex gap-2">
                                <li>
                                  <Link onClick={() => updateNewStatus(user.userId)}>
                                    {user.active === false ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/admin/update-user/${user.userId}`}>
                                    <i className="ri-pencil-line" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/admin/edit-password-user/${user.userId}`}>
                                    <i className="ri-lock-line" />
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))
                      }
                      {users.length == 0 && (
                        <tr>
                          <td colSpan="6" className="text-center">No users found</td>
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
      {/* All User Table Ends*/}
      <div className="container-fluid">
        {/* footer start*/}
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
        {/* footer end*/}
      </div>
    </div>

  )
}
