import Hinh1 from '../assets/images/inner-page/log-in.png'
import GoogleImage from '../assets/images/inner-page/google.png'
import FaceBookImage from '../assets/images/inner-page/facebook.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function SectionSignup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors = {};

    // Fullname không chứa số
    if (!fullname.trim()) {
      newErrors.fullname = 'Vui lòng nhập họ và tên';
    } else if (/\d/.test(fullname)) {
      newErrors.fullname = 'Họ và tên không được chứa số';
    }

    // Số điện thoại phải đúng 10 chữ số
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Số điện thoại phải có đúng 10 chữ số';
    }

    // Email phải đúng định dạng
    if (!email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    // Mật khẩu từ 7 đến 50 ký tự
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (password.length < 6 || password.length > 50) {
      newErrors.password = 'Mật khẩu phải từ 6 đến 50 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmitSignup = async event => {
    event.preventDefault();
    if (!validateForm()) return; // ⛔ nếu form lỗi thì dừng
    try {
      const response = await axios.post('/api/signup', {
        email: email,
        password: password,
        fullName: fullname,
        phoneNumber: phone
      });
      console.log(response);
      if (response.data.status == 201) {
        Swal.fire({
          icon: 'success',
          title: 'Thành công',
          text: 'Đăng ký thành công',
          timer: 3000,
          showConfirmButton: false,
        });
        const ENPOINT_REDIRECT_PAGE = '/login'
        navigate(ENPOINT_REDIRECT_PAGE);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: response.data.message,
          timer: 3000,
          showConfirmButton: true,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Đăng ký không thành công',
        timer: 3000,
        showConfirmButton: true,
      });
    }
  }

  return (
    <section className="log-in-section section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={Hinh1} className="img-fluid" alt="Sign Up" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Chào mứng đến với Nayami</h3>
                <h4>Tạo tài khoản mới</h4>
              </div>

              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmitSignup}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                        id="fullname"
                        placeholder="Full Name"
                        onChange={e => setFullname(e.target.value)}
                      />
                      <label htmlFor="fullname">Họ và tên</label>
                      {errors.fullname && <div className="invalid-feedback d-block">{errors.fullname}</div>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        placeholder="Number phone"
                        onChange={e => setPhone(e.target.value)}
                      />
                      <label htmlFor="phone">Số điện thoại</label>
                      {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Email Address"
                        onChange={e => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                      {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Mật khẩu</label>
                      {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-animation w-100" type="submit">Đăng ký</button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              <div className="sign-up-box">
                <h4>Đã có tài khoản ?</h4>
                <a href="/login">Đăng nhập</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}
