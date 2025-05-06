import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SideSummery({
  products,
  subtotal,
  discount,
  total,
  onApplyCoupon,
  isChecked
}) {
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    if (!couponCode.trim()) {
      Swal.fire({
        title: 'Mã giảm giá trống',
        text: 'Vui lòng nhập mã giảm giá',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      return;
    }

    onApplyCoupon(couponCode);
    if (discount==0) {
      setCouponCode('');
    }
  };

  const handleCheckout = () => {
    const selectedProducts = products && Array.isArray(products)
      ? products.filter(product => product.isChecked)
      : [];
    if (selectedProducts.length === 0) {
      Swal.fire({
        title: 'Không có sản phẩm được chọn',
        text: 'Vui lòng chọn ít nhất một sản phẩm để tiến hành thanh toán.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      return;
    }

    const selectedSubtotal = selectedProducts.reduce((sum, product) =>
      sum + (product.price * product.quantity), 0);
    if (selectedSubtotal === 0) {
      Swal.fire({
        title: 'Giỏ hàng trống',
        text: 'Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy thêm sản phẩm trước khi thanh toán.',
        icon: 'info',
        confirmButtonText: 'Tiếp tục mua sắm',
      }).then(() => {
        navigate('/');
      });
    } else {
      const checkoutData = {
        couponId: couponCode || null,
        cartId: selectedProducts.map(product => product.id).filter(id => id),
        discount: discount || null,
      };

      localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
      navigate('/checkout');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className="col-xxl-3">
      <div className="summery-box p-sticky">
        <div className="summery-header">
          <h3>Tổng giỏ hàng</h3>
        </div>
        <div className="summery-contain">
          <div className="coupon-cart">
            <h6 className="text-content mb-2">Nhập mã giảm giá</h6>
            <div className="mb-3 coupon-box input-group">
              <input
                type="text"
                className="form-control"
                id="couponCode"
                placeholder="Nhập mã giảm giá tại đây..."
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn-apply" onClick={handleApplyCoupon}>
                Áp dụng
              </button>
            </div>
          </div>
          <ul>
            <li>
              <h4>Tạm tính</h4>
              <h4 className="price">{formatPrice(subtotal)}</h4>
            </li>
            <li>
              <h4>Giảm giá</h4>
              <h4 className="price">(-) {formatPrice(discount)}</h4>
            </li>
          </ul>
        </div>
        <ul className="summery-total">
          <li className="list-total border-top-0">
            <h4>Tổng cộng (VND)</h4>
            <h4 className="price theme-color">{formatPrice(total)}</h4>
          </li>
        </ul>
        <div className="button-group cart-button">
          <ul>
            <li>
              <button
                onClick={handleCheckout}
                className="btn btn-animation proceed-btn fw-bold"
              >
                Tiến hành thanh toán
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/')}
                className="btn btn-light shopping-button text-dark"
              >
                <i className="fa-solid fa-arrow-left-long" />
                Quay lại mua sắm
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
