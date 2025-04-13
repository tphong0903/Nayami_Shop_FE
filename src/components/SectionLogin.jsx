import Hinh1 from '../assets/images/inner-page/log-in.png'
import GoogleImage from '../assets/images/inner-page/google.png'
import FaceBookImage from '../assets/images/inner-page/facebook.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

export default function SectionLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();



  const getUserRole = (token) => {
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      console.log(decoded)
      return decoded.roles ? decoded.roles[0] : null;
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  };
  const redirectUserBasedOnRole = (token) => {
    const role = getUserRole(token);
    const ADMIN_ROLE = 'ADMIN';
    const PAGE_REDIRECT_ADMIN = '/admin';

    const CUSTOMER_ROLE = 'CUSTOMER';
    const PAGE_REDIRECT_CUSTOMER = '/';

    const STAFF_ROLE = 'STAFF';
    const PAGE_REDIRECT_STAFF = '/';


    if (role === ADMIN_ROLE) {
      navigate(PAGE_REDIRECT_ADMIN);
    } else if (role === CUSTOMER_ROLE) {
      navigate(PAGE_REDIRECT_CUSTOMER);
    } else {
      navigate('/login');
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password
      });
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      saveToken(response.data.data, accessToken, refreshToken);
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Đăng nhập thành công',
        timer: 3000,
        showConfirmButton: true,
      });
      redirectUserBasedOnRole(accessToken);
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Đăng nhập không thành công',
        timer: 3000,
        showConfirmButton: true,
      });
    }
  }
  const saveToken = (response, accessToken, refreshToken) => {
    console.log('Store token in local storage');
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    localStorage.setItem('id', 1);
  };
  const handleChangeRememberMe = (event) => {
    setRemember(!remember);
  }


  return (
    <section className="log-in-section background-image-2 section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={Hinh1} className="img-fluid" alt="Login" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome To Fastkart</h3>
                <h4>Log In Your Account</h4>
              </div>

              <div className="input-box">
                <form className="row g-4" onSubmit={login}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="forgot-box">
                      <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-animation w-100 justify-content-center" type="submit">
                      Log In
                    </button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              <div className="log-in-button">
                <ul>
                  <li>
                    <a href="https://www.google.com/" className="btn google-button w-100">
                      <img src={GoogleImage} className="lazyload" alt="Google Login" />
                      Log In with Google
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" className="btn google-button w-100">
                      <img src={FaceBookImage} className="lazyload" alt="Facebook Login" />
                      Log In with Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div className="other-log-in">
                <h6></h6>
              </div>

              <div className="sign-up-box">
                <h4>Don't have an account?</h4>
                <a href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
