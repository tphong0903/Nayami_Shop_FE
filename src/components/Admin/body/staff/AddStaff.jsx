import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function AddStaff() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    type: 'STAFF'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn reload trang

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/create`, formData);
      const resData = response.data;

      if (resData.status === 200 || resData.status === 201) {
        Swal.fire({
          title: 'Thêm nhân viên thành công',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000
        })
        navigate('/admin/staffs');
      } else {
        const message = response.data.message;
        Swal.fire({
          title: 'Thêm nhân viên thất bại',
          text: `${message}`,
          icon: 'error',
          confirmButtonText: 'OK',
          timer: 3000
        })
      }
    } catch (error) {
      // Trường hợp server thực sự lỗi (ví dụ chết server, timeout, v.v)
      Swal.fire({
        title: 'Thêm nhân viên thất bại',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000
      })
    }
  };
  const goToHomePage = async () => {
    navigate('/admin/staffs');
  };



  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="title-header option-title">
                      <h5>Thêm nhân viên</h5>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel">
                        <form
                          className="theme-form theme-form-2 mega-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="card-header-1">
                            <h5>Thông tin nhân viên</h5>
                          </div>
                          <div className="row">
                            <div className="mb-4 row align-items-center">
                              <label className="form-label-title col-lg-2 col-md-3 mb-0">
                                Tên nhân viên
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    required
                                />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Số điện thoại
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    pattern="^(0|\+84)[0-9]{9,10}$"
                                    title="Phone number must start with 0 or +84 and contain 10-11 digits"
                                />

                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Email
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input
                                  className="form-control"
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Mật khẩu
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input
                                  className="form-control"
                                  type="password"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4 mt-5">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 d-flex">
                              <button type="submit" className="btn btn-primary me-3">
                                Thêm
                              </button>
                              <button type="button" className="btn btn-secondary" onClick={goToHomePage}>
                                Hủy
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
