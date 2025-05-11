import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function ChangePasswordUser() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const validate = () => {
    const newErrors = { newPassword: '', confirmPassword: '' };
    let isValid = true;

    if (newPassword.length < 6) {
      newErrors.newPassword = 'Mật khẩu phải có ít nhất 6 ký tự.';
      isValid = false;
    }

    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setNewPassword(value);
      setErrors((prev) => ({ ...prev, newPassword: '' }));
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/update-password`,
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
        navigate('/dashboard');
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
                      <div className="title-header option-title">
                        <h5>Change User Password</h5>
                      </div>
                      <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-lg-6 col-md-3 mb-0">
                              New password
                            </label>
                            <div className="col-md-9 col-lg-10">
                              <input
                                  className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                                  type="password"
                                  name="password"
                                  value={newPassword}
                                  onChange={handleChange}
                                  required
                              />
                              {errors.newPassword && (
                                  <div className="invalid-feedback">{errors.newPassword}</div>
                              )}
                            </div>
                          </div>
                          <div className="mb-4 row align-items-center">
                            <label className="col-lg-6 col-md-3 col-form-label form-label-title">
                              Confirm password
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
                                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                              )}
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
