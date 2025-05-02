import Swal from 'sweetalert2';
import axios from 'axios';
import cartObserver from '~/utils/CartObserver';


export const handleQuantityChange = (quantity, setQuantity, productId, value) => {
  setQuantity({
    ...quantity,
    [productId]: value
  });
};

export const addToCart = async (productId, quantity) => {

  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      Swal.fire({
        title: 'Yêu cầu đăng nhập',
        text: 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng',
        icon: 'warning',
        confirmButtonText: 'Đồng ý'
      });
      return;
    }

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/cart`, {
      productId,
      quantity: quantity
    }, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    Swal.fire({
      title: 'Thành công!',
      text: 'Đã thêm sản phẩm vào giỏ hàng',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });

    cartObserver.notify({ updated: true });


  } catch (error) {
    console.error('Lỗi khi thêm vào giỏ hàng:', error);
    Swal.fire({
      title: 'Lỗi',
      text: 'Không thể thêm sản phẩm vào giỏ hàng',
      icon: 'error',
      confirmButtonText: 'Đồng ý'
    });
  }
};
