import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

export default function UpdateInformationAdmin() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const validateForm = () => {
        const { email, password, confirmPassword } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        let newErrors = { email: '', password: '', confirmPassword: '' };

        if (email === '') {
            newErrors.email = 'Email không được để trống';
            valid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email không hợp lệ';
            valid = false;
        }

        if (password === '') {
            newErrors.password = 'Mật khẩu không được để trống';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            valid = false;
        }

        if (confirmPassword === '') {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không được để trống';
            valid = false;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/users/update/inform/admin`, {
                email: formData.email,
                password: formData.password
            });
            console.log(response);
            const resData = response.data;

            if (resData.status === 200 || resData.status === 201) {
                Swal.fire({
                    title: 'Cập nhật thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000
                });
                navigate('/admin/');
            } else {
                Swal.fire({
                    title: 'Cập nhật không thành công',
                    text: resData.message || 'Có lỗi xảy ra',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    timer: 3000
                });
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            Swal.fire({
                title: 'Cập nhật không thành công',
                icon: 'error',
                confirmButtonText: 'OK',
                timer: 3000
            });
        } finally {
            setLoading(false);
        }
    };

    const goToHomePage = () => {
        navigate('/admin/');
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
                                            <h5>Thay đổi thông tin</h5>
                                        </div>
                                        <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                                        Email
                                                    </label>
                                                    <div className="col-md-9 col-lg-10">
                                                        <input
                                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                                        Mật khẩu
                                                    </label>
                                                    <div className="col-md-9 col-lg-10">
                                                        <input
                                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                            type="password"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
                                                            value={formData.confirmPassword}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 mt-5">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9 d-flex">
                                                    <button type="submit" className="btn btn-primary me-3" disabled={loading}>
                                                        {loading ? 'Đang cập nhật...' : 'Cập nhật'}
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
    );
}
