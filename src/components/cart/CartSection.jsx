/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import CartTable from './CartTable';
import SideSummery from './SideSummery';

export default function CartSection() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [coupon, setCoupon] = useState(0);
  const [selectAll, setSelectAll] = useState(true);

  const navigate = useNavigate();

  const checkedProducts = products.filter(product => product.isChecked);
  const subtotal = checkedProducts.reduce((sum, product) => sum + product.totalPrice, 0);
  const total = subtotal - coupon;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);

  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/cart');
      const productsWithCheck = response.data.data.map(product => ({
        ...product,
        isChecked: true
      }));
      setProducts(productsWithCheck);
    } catch (err) {
      if (err.response?.status === 403) {
        Swal.fire({
          title: 'Phiên đăng nhập đã hết hạn',
          text: 'Vui lòng đăng nhập để tiếp tục mua sắm',
          icon: 'warning',
          confirmButtonText: 'Đến trang đăng nhập'
        }).then(() => {
          navigate('/login');
        });
      } else {
        Swal.fire({
          title: 'Lỗi',
          text: 'Không thể tải giỏ hàng. Vui lòng thử lại.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
      setError('Lỗi khi tải dữ liệu giỏ hàng');
      console.error('Lỗi khi tải sản phẩm:', err);
    }
  };

  const handleCheckChange = (productId) => {
    const updatedProducts = products.map(product =>
      product.id === productId
        ? { ...product, isChecked: !product.isChecked }
        : product
    );

    setProducts(updatedProducts);

    const allChecked = updatedProducts.every(product => product.isChecked);
    setSelectAll(allChecked);

    setCoupon(0);
  };

  const handleSelectAll = (isChecked) => {
    setSelectAll(isChecked);

    const updatedProducts = products.map(product => ({
      ...product,
      isChecked: isChecked
    }));

    setProducts(updatedProducts);

    setCoupon(0);
  };

  const handleQuantityChange = async (index, newQuantity) => {
    if (newQuantity >= 0) {
      try {
        const updatedProducts = [...products];
        const product = updatedProducts[index];
        product.quantity = newQuantity;

        setProducts(updatedProducts);

        await axios.put(`/api/cart/${product.id}`, {
          quantity: newQuantity
        });
        fetchProducts();

      } catch (error) {
        console.error('Lỗi khi cập nhật số lượng:', error);
        Swal.fire({
          title: 'Cập nhật thất bại',
          text: 'Không thể cập nhật số lượng sản phẩm. Vui lòng thử lại.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        fetchProducts();
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/cart/${id}`);
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sản phẩm đã được xóa khỏi giỏ hàng',
        showConfirmButton: false,
        timer: 1500
      });
      window.dispatchEvent(new CustomEvent('cart-updated'));

    } catch (err) {
      console.error('Lỗi khi xóa sản phẩm:', err);
      Swal.fire({
        title: 'Xóa thất bại',
        text: 'Không thể xóa sản phẩm khỏi giỏ hàng. Vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleApplyCoupon = async (couponCode) => {
    try {
      const response = await axios.get(`/api/coupons/customer/${couponCode}`);
      const { type, value, constraintMoney } = response.data.data;

      if (constraintMoney > total) {
        Swal.fire({
          title: 'Mã giảm giá không hợp lệ',
          text: 'Mã giảm giá này không thể áp dụng cho giỏ hàng của bạn.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }

      let discountValue = 0;

      if (type === 'MONEY') {
        discountValue = value;
      } else if (type === 'PERCENT') {
        discountValue = Math.round((subtotal * value) / 100);
      }

      discountValue = Math.min(discountValue, subtotal);
      setCoupon(discountValue);

      Swal.fire({
        title: 'Mã giảm giá đã được áp dụng',
        text: `Bạn đã được giảm ${discountValue.toLocaleString('vi-VN')} VND`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (err) {
      console.error('Lỗi khi áp dụng mã giảm giá:', err);
      setCoupon(0);
      Swal.fire({
        title: 'Mã giảm giá không hợp lệ',
        text: err.response?.data?.message || 'Mã giảm giá này không thể áp dụng cho giỏ hàng của bạn.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <section className="cart-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-sm-5 g-3">
          <CartTable
            products={products}
            error={error}
            onQuantityChange={handleQuantityChange}
            onDeleteProduct={handleDeleteProduct}
            onCheckChange={handleCheckChange}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
          />
          <SideSummery
            products={products}
            subtotal={subtotal}
            discount={coupon}
            total={total}
            onApplyCoupon={handleApplyCoupon}
          />
        </div>
      </div>
    </section>
  );
}