import React from 'react';

const OrderSummary = ({ carts, discount }) => {
  // Kiểm tra nếu carts rỗng hoặc null
  if (!carts || carts.length === 0) {
    return <p>Không có sản phẩm nào trong giỏ hàng.</p>;
  }

  // Tính tổng giá trị đơn hàng
  const subtotal = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = 0; // Ví dụ phí vận chuyển cố định
  const total = subtotal + shipping - (discount || 0);

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
            <h4>{item.productName} <span>X {item.quantity}</span></h4>
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
