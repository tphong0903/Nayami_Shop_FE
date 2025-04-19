import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Users() {
  const [users,setUser] = useState([]);
  useEffect(() => {
    fetchUsers()
  },[])
  const fetchUsers = async () => {
    try {
      console.log('Fetching users...');
      const response = await axios.get('/api/users/get-all-users');
      const user = response.data;
      setUser(user);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  }
  const updateNewStatus = async (userId) => {
    try {
      Swal.fire({
        title: 'Đang gửi...',
        html: 'Vui lòng chờ trong giây lát',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // 1. Lấy user hiện tại
      const response = await axios.get(`/api/users/${userId}`);
      const currentUser = response.data;
      console.log(`Current user: ${currentUser.active}`);
      // 2. Đảo status (giả sử là true/false)
      const updatedStatus = !currentUser.active
      currentUser.active = updatedStatus;
      console.log(`Updated user: ${updatedStatus.active}`);
      // 3. Gửi PUT request với status mới
      const updateResponse = await axios.put(`/api/users/update/${userId}`,currentUser);
      console.log(updateResponse);
      if (updateResponse.data.status === 200 || updateResponse.data.status === 201) {
        Swal.fire({
          title: 'Cập nhật trạng thái thành công',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.reload(); // ✅ Reload trang sau khi alert đóng
        });
      } else {
        Swal.fire({
          title: 'Cập nhật thất bại',
          icon: 'error',
          text: updateResponse.data.message || 'Lỗi không xác định',
          confirmButtonText: 'OK'
        });
      }

    } catch (error) {
      console.error('Lỗi khi cập nhật trạng thái:', error);
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
                  <h5>All Users</h5>
                  <form className="d-inline-flex">
                    <a
                      href="add-new-user"
                      className="align-items-center btn btn-theme d-flex"
                    >
                      <i data-feather="plus" />
                      Add New
                    </a>
                  </form>
                </div>
                <div className="table-responsive table-product">
                  <table className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      users.map((user) =>
                      (
                      <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.userName}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.email}</td>
                        <td>{user.active ? 'Yes' : 'No'}</td>
                        <td>
                          <ul className="d-flex gap-2">
                            <li>
                              <a onClick={() => updateNewStatus(user.userId)}>
                                <i className="ri-eye-line" />
                              </a>
                            </li>
                            <li>
                              <a href={`/admin/update-user/${user.userId}`}>
                                <i className="ri-pencil-line" />
                              </a>
                            </li>
                            <li>
                              <a href={`/admin/edit-password-user/${user.userId}`}>
                                <i className="ri-lock-line" />
                              </a>
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
