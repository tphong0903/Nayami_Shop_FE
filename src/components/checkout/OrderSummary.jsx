/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

const OrderSummary = ({ carts, discount, paymentMethod, selectedAddress, shippingFee }) => {
  // Kiểm tra nếu carts rỗng hoặc null
  if (!carts || carts.length === 0) {
    return <p>Không có sản phẩm nào trong giỏ hàng.</p>;
  }

  const subtotal = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = shippingFee;
  const total = subtotal + shipping - (discount || 0);

  useEffect(() => {
    console.log('Selected address:', selectedAddress);

    if (paymentMethod === 'cash') {
      console.log('Payment method selected: Cash on delivery (COD)');
      console.log('Selected address:', selectedAddress);
      console.log('Order Summary:');
      console.log('Products:', carts);
      console.log('Subtotal:', subtotal.toLocaleString() + 'đ');
      console.log('Shipping:', shipping.toLocaleString() + 'đ');
      console.log('Discount:', (discount || 0).toLocaleString() + 'đ');
      console.log('Total:', total.toLocaleString() + 'đ');
    }
    else {
      console.log('Payment method selected: Online payment');
      console.log('Order Summary:');
      console.log('Products:', carts);
      console.log('Subtotal:', subtotal.toLocaleString() + 'đ');
      console.log('Shipping:', shipping.toLocaleString() + 'đ');
      console.log('Discount:', (discount || 0).toLocaleString() + 'đ');
      console.log('Total:', total.toLocaleString() + 'đ');
    }
  }, [paymentMethod, carts, subtotal, shipping, discount, total]);

  return (
    <div className="summery-box-2">
      <div className="summery-header">
        <h3>Tóm tắt đơn hàng</h3>
      </div>

      <ul className="summery-contain">
        {carts.map((item, index) => (
          <li key={index}>
            <img
              src={item.listImage && item.listImage.length > 0 ? item.listImage[0] : '/assets/images/default-product.png'} className="img-fluid lazyloaded checkout-image"
              alt={item.productName}
            />
            <div>
              <h4 style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
                {item.productName}</h4>
              <p>Số lượng: {item.quantity}</p>
            </div>
            <h4 className="price">{(item.totalPrice).toLocaleString()}đ</h4>
          </li>
        ))}
      </ul>

      <ul className="summery-total">
        <li>
          <h4>Tạm tính</h4>
          <h4 className="price">{subtotal.toLocaleString()}đ</h4>
        </li>

        <li>
          <h4>Phí vận chuyển</h4>
          <h4 className="price">{shipping.toLocaleString()}đ</h4>
        </li>

        <li>
          <h4>Giảm giá</h4>
          <h4 className="price">-{(discount ?? 0).toLocaleString()}đ</h4>
        </li>

        <li className="list-total">
          <h4>Tổng cộng</h4>
          <h4 className="price">{total.toLocaleString()}đ</h4>
        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;