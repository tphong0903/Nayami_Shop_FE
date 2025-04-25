import Hinh1 from '../assets/images/inner-page/log-in.png';
import GoogleImage from '../assets/images/inner-page/google.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

export default function SectionLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!email) {
            tempErrors.email = 'Email không được để trống';
        } else if (!validateEmail(email)) {
            tempErrors.email = 'Email không hợp lệ';
        }
        if (!password) {
            tempErrors.password = 'Mật khẩu không được để trống';
        } else if (password.length < 6) {
            tempErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const getUserRole = (token) => {
        if (!token) return null;
        try {
            const decoded = jwtDecode(token);
            return decoded.roles ? decoded.roles[0] : null;
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    };

    const redirectUserBasedOnRole = (token) => {
        const role = getUserRole(token);
        if (role === 'ADMIN' || role === 'STAFF') {
            navigate('/admin');
        } else if (role === 'CUSTOMER') {
            navigate('/');
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Đăng nhập không thành công',
                timer: 3000,
                showConfirmButton: true,
            });
        }
    };

    const login = async (event) =>
    {
        event.preventDefault();
        if (!validateForm()) return;
        try {
            Swal.fire({
                title: 'Đang đăng nhập',
                html: 'Vui lòng chờ trong giây lát',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading(); // Hiển thị spinner xoay
                },
            });
            const response = await axios.post('/api/login', {
                email: email,
                password: password
            });
            console.log(response);
            const status = response.data.status;
            if(status == 201) {
                const accessToken = response.data.data.accessToken;
                const refreshToken = response.data.data.refreshToken;
                saveToken(accessToken, refreshToken);
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đăng nhập thành công',
                    timer: 3000,
                    showConfirmButton: true,
                });
                redirectUserBasedOnRole(accessToken);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi',
                    text: 'Đăng nhập không thành công',
                    timer: 3000,
                    showConfirmButton: true,
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Đăng nhập không thành công',
                timer: 3000,
                showConfirmButton: true,
            });
        }
    };

    const saveToken = async (accessToken, refreshToken) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    };

    const handleGoogleLogin = async () => {
        try {
            const response = await axios.get('/api/auth/social-login/google', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const googleLoginUrl = response.data.data;
            window.location.href = googleLoginUrl;
        } catch (error) {
            console.error('Failed to get Google login URL:', error);
        }
    };

    return (
        <section className="log-in-section background-image-2 section-b-space">
            <div className="container-fluid-lg w-100">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src={Hinh1} className="img-fluid" alt="Login"/>
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
                                                type="text"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                id="email"
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label htmlFor="email">Email Address</label>
                                            {errors.email &&
                                                <div className="invalid-feedback d-block">{errors.email}</div>}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <input
                                                type="password"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                id="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label htmlFor="password">Password</label>
                                            {errors.password &&
                                                <div className="invalid-feedback d-block">{errors.password}</div>}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="forgot-box">
                                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-animation w-100 justify-content-center"
                                                type="submit">
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
                                        <a
                                            className="btn google-button w-100"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleGoogleLogin();
                                            }}
                                        >
                                            <img src={GoogleImage} className="lazyload" alt="Google Login"/>
                                            Log In with Google
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sign-up-box">
                                <h4>Don't have an account?</h4>
                                <a href="/register">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
