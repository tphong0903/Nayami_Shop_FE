import { useState } from 'react';
import ForgotPasswordImage from '../assets/images/inner-page/forgot.png';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ForgotPasswordSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    let sendEmailSuccessfully = false;
    try {
      Swal.fire({
        title: 'Đang gửi...',
        html: 'Vui lòng chờ trong giây lát',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Hiển thị spinner xoay
        },
      });
      const response = await axios.get('api/reset-password', {
        params: { email }, // Gửi email như một query param
      });
      if (response.data.status === 200) {
        sendEmailSuccessfully = true
      }
    } catch (error) {
      console.error('Lỗi:', error);
    }
    if (sendEmailSuccessfully) {
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Bạn hãy kiểm tra email của bạn nhé',
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Thất bại, vui lòng kiểm tra lại email',
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
              <img src={ForgotPasswordImage} className="img-fluid" alt="Forgot Password" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Quên mật khẩu</h3>
                </div>

                <div className="input-box">
                  <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi nhập email
                          required
                        />
                        <label htmlFor="email">Địa chỉ email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-animation w-100" type="submit">
                        Quên mật khẩu
                      </button>
                    </div>
                  </form>
                  {message && <p className="mt-3 text-center">{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
