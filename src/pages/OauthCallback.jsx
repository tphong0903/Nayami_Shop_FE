import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '~/assets/UserCss.css'
export default function OauthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (code && state) {
      Swal.fire({
        title: 'Đang đăng nhập',
        html: 'Vui lòng chờ trong giây lát',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Hiển thị spinner xoay
        },
      });
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/api/login/oauth2/code/google`, {
          params: {
            code: code,
            state: state,
          },
        })
        .then(async (res) => {
          console.log(res);
          const { accessToken, refreshToken } = res.data.data;
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('refresh_token', refreshToken);
          Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',
            text: 'Nếu bạn là thành viên mới, vui lòng check mail để nhận mật khẩu',
            timer: 3000,
            showConfirmButton: true,
          });
          navigate('/');
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Đăng nhập không thành công',
            timer: 3000,
            showConfirmButton: true,
          });
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div></div>;
}
