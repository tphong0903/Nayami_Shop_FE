import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

axios.interceptors.request.use(
  (config) => {
    try {
      const access_token = localStorage.getItem('access_token');

      if (access_token) {
        // Kiểm tra xem token có chứa ký tự lạ không
        if (/[^A-Za-z0-9-_=.]/.test(access_token)) {
          Swal.fire({
            icon: 'info',
            title: 'Thông báo',
            text: 'Bạn phải đăng nhập lại',
            timer: 2000,
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
              window.location.href = '/logout';
            }
          });
        }
        if (!config.url.includes('/api/refresh')) {
          console.log('set token');
          config.headers['Authorization'] = `Bearer ${access_token}`;
        }
      }
      return config;
    } catch (error) {
      console.error('Lỗi khi đặt Authorization token:', error);
      return Promise.reject(error);
    }
  }
);


axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    if (error.response.status == 401) {
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          console.warn('Không tìm thấy refresh token.');
        }
        else {
          console.log('Start refresh token');
          const res = await axios.post('/api/refresh', {}, {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          });
          console.log(res);
          const newAccessToken = res.data.data;
          console.log(`New access toke ${newAccessToken}`);
          localStorage.setItem('access_token', newAccessToken);
          console.log('Refresh token successfully.');
          Swal.fire({
            icon: 'info',
            title: 'Thông báo',
            text: 'Trang cần tải lại',
            timer: 2000,
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      } catch (err) {
        console.log(err);
        console.error('Làm mới token thất bại:', err);
      }
    } else {
      console.log('Do not refresh token');
    }
    return Promise.reject(response);
  }
);
// Hàm khởi tạo interceptor
const setupAxiosInterceptors = () => {};
export default setupAxiosInterceptors;
