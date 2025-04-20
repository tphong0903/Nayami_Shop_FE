import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

export default function EditPasswordUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    userId: `${id}`,
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    type: 'CUSTOMER',
    active: true
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        const data = response.data;
        setFormData(prev => ({
          ...prev,
          userId: data.userId,
          userName: data.userName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          type: data.type || 'CUSTOMER',
          active: data.active
        }));
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
    if (name === 'password') {
      setFormData(prev => ({
        ...prev,
        password: value
      }));
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== confirmPassword) {
      Swal.fire({
        title: 'Lỗi',
        text: 'Mật khẩu xác nhận không khớp',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const response = await axios.put(`/api/users/update/${id}`, formData);
      const resData = response.data;

      if (resData.status === 200 || resData.status === 201) {
        Swal.fire({
          title: 'Cập nhật thành công',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000
        });
        navigate('/admin/users');
      } else {
        Swal.fire({
          title: 'Cập nhật thất bại',
          text: resData.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      Swal.fire({
        title: 'Lỗi không xác định',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const goToHomePage = () => {
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
                      <h5>Change User Password</h5>
                    </div>
                    <form
                      className="theme-form theme-form-2 mega-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="card-header-1">
                        <h5>New Password</h5>
                      </div>
                      <div className="row">
                        <div className="mb-4 row align-items-center">
                          <label className="form-label-title col-lg-2 col-md-3 mb-0">
                            New password
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
                        <div className="mb-4 row align-items-center">
                          <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                            Confirm password
                          </label>
                          <div className="col-md-9 col-lg-10">
                            <input
                              className="form-control"
                              type="password"
                              name="confirmPassword"
                              value={confirmPassword}
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
  );
}
