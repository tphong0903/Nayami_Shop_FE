import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

};
export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_information');
    Swal.fire({
      icon: 'warning',
      title: 'Thông báo',
      text: 'Bạn đã đăng xuất',
      timer: 3000,
      showConfirmButton: true,
    });
    navigate('/');
  }, [navigate]);
  return null;
}
