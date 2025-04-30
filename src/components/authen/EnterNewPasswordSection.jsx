import { useState, useEffect } from 'react';
import ForgotPasswordImage from '~/assets/images/inner-page/forgot.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function EnterNewPasswordSection() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('resetPasswordToken');
    if (token) {
      setToken(token);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    if (newPassword.length < 6) {
      setError('Mật khẩu phải có độ dài lớn hơn 6');
      return;
    }

    try {
      Swal.fire({
        title: 'Đang gửi...',
        html: 'Vui lòng chờ trong giây lát',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Hiển thị spinner xoay
        },
      });
      const refreshAxios = axios.create();
      const response = await refreshAxios.post('/api/reset-password/entered', {
        newPassword: newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.status == 200) {
        setSuccess(true);
        Swal.fire({
          icon: 'success',
          title: 'Thành công',
          text: 'Reset password thành công',
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        setSuccess(false);
        Swal.fire({
          icon: 'error',
          title: 'Thất bại',
          text: 'Reset password thất bại',
          timer: 3000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      setError('Error resetting password. Please try again.');
      setSuccess(false);
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Reset password thất bại',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };
  return (
    <section className="log-in-section section-b-space forgot-section">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={ForgotPasswordImage} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h4>Cập nhật mật khẩu mới</h4>
                </div>

                {success ? (
                  <div className="alert alert-success">
                    Cập nhật thành công. Bạn có thể <Link to="/login">đăng nhập</Link> với mật khẩu mới.
                  </div>
                ) : (
                  <div className="input-box">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form className="row g-4" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form">
                          <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                            placeholder="Nhập mật khẩu mới"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="newPassword">Mật khâu mới</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form">
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Nhập lại mật khẩu mới"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="confirmPassword">Nhập lại mật khẩu mới</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-animation w-100" type="submit">
                          Cập nhật mật khẩu
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}