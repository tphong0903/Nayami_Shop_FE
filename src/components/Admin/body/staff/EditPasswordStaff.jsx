import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

export default function EditPasswordStaff() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error when user types

    if (name === 'password') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (newPassword.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/admin/update-password/${id}`,
          { newPassword }
      );
      const resData = response.data;

      if (resData.status === 200 || resData.status === 201) {
        Swal.fire({
          title: 'Cập nhật thành công',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000,
        });
        navigate('/admin/staffs');
      } else {
        Swal.fire({
          title: 'Cập nhật thất bại',
          text: resData.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      Swal.fire({
        title: 'Lỗi không xác định',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const goToHomePage = () => {
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
                        <h5>Thay đổi mật khẩu</h5>
                      </div>
                      <form
                          className="theme-form theme-form-2 mega-form"
                          onSubmit={handleSubmit}
                      >
                        <div className="card-header-1">
                          <h5>Mật khẩu mới</h5>
                        </div>
                        <div className="row">
                          <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-lg-2 col-md-3 mb-0">
                              Mật khẩu mới
                            </label>
                            <div className="col-md-9 col-lg-10">
                              <input
                                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                  type="password"
                                  name="password"
                                  value={newPassword}
                                  onChange={handleChange}
                                  required
                              />
                              {errors.password && (
                                  <div className="invalid-feedback">
                                    {errors.password}
                                  </div>
                              )}
                            </div>
                          </div>
                          <div className="mb-4 row align-items-center">
                            <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                              Xác nhận mật khẩu
                            </label>
                            <div className="col-md-9 col-lg-10">
                              <input
                                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                  type="password"
                                  name="confirmPassword"
                                  value={confirmPassword}
                                  onChange={handleChange}
                                  required
                              />
                              {errors.confirmPassword && (
                                  <div className="invalid-feedback">
                                    {errors.confirmPassword}
                                  </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row mb-4 mt-5">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9 d-flex">
                            <button type="submit" className="btn btn-primary me-3">
                              Cập nhật
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={goToHomePage}
                            >
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
  );
}
