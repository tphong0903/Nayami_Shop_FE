import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function ChangeProfileLayout() {
  const [id,setId] = useState('');
  const [formData, setFormData] = useState({
    userId:'',
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    type:'CUSTOMER',
    active: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user_information'));
    if (storedUser) {
      setId(storedUser.userId);
      setFormData({
        userId:storedUser.userId,
        userName: storedUser.userName,
        phoneNumber: storedUser.phoneNumber,
        email: storedUser.email,
        password: '',
        type: storedUser.type || 'CUSTOMER',
        active: storedUser.active
      });
    }

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn reload trang
    try {
      console.log('Update user...: ',formData);
      const response = await axios.put(`/api/users/update/${id}`, formData);
      const resData = response.data;
      console.log(resData);
      if (resData.status === 200 || resData.status === 201) {
        localStorage.setItem('user_information', JSON.stringify(formData));
        Swal.fire({
          title: 'Update sucessfully',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000
        })
        navigate('/dashboard');
        console.log('Success:', resData);
      } else {
        const message = response.data.message;
        Swal.fire({
          title: 'Insert fail',
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
        title: 'Insert fail',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000
      })
    }
  };
  const goToHomePage = async () => {
    navigate('/dashboard');
  };

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                        <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                          <div className="card-header-1">
                            <h5>User Information</h5>
                          </div>

                          <div className="row">
                            <div className="mb-4 row align-items-center">
                              <label className="form-label-title col-lg-2 col-md-3 mb-0">
                                User name
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
                                Phone number
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
                                Update
                              </button>
                              <button type="button" className="btn btn-secondary" onClick={goToHomePage}>
                                Cancel
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
