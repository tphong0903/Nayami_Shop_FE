import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

export default function UpdateUser() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [formData, setFormData] = useState({
    userId:`${id}`,
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    type:'CUSTOMER'
  });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('Fetching user...');
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}`);
        const data = response.data;
        console.log(data);
        setFormData({
          userId:data.userId,
          userName: data.userName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          type: data.type || 'CUSTOMER',
          active: data.active
        });
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(formData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn reload trang

    try {
      console.log('Update user...');
      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/users/update/${id}`, formData);
      const resData = response.data;
      console.log(resData);
      if (resData.status === 200 || resData.status === 201) {
        Swal.fire({
          title: 'Cập nhật thành công',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000
        })
        navigate('/admin/users');
        console.log('Success:', resData);
      } else {
        const message = response.data.message;
        Swal.fire({
          title: 'Cập nhật không thành công',
          text: `${message}`,
          icon: 'error',
          confirmButtonText: 'OK',
          timer: 3000
        })
        console.error('API error:', resData);
      }
    } catch (error) {
      // Trường hợp server thực sự lỗi (ví dụ chết server, timeout, v.v)
      console.error('Unexpected error:', error);
      Swal.fire({
        title: 'Cập nhật không thành công',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000
      })
    }
  };
  const goToHomePage = async () => {
    navigate('/admin/users');
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
                      <h5>Thay đổi thông tin khách hàng</h5>
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
                            <h5>Thông tin khách hàng</h5>
                          </div>
                          <div className="row">
                            <div className="mb-4 row align-items-center">
                              <label className="form-label-title col-lg-2 col-md-3 mb-0">
                                Tên khách hàng
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
                          </div>
                          <div className="row mb-4 mt-5">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 d-flex">
                              <button type="submit" className="btn btn-primary me-3">
                                Cập nhật
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
