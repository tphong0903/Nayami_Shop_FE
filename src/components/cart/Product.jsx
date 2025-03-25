import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
const Product = ({ product, index, onQuantityChange, onDeleteProduct, isChecked, onCheckChange }) => {
  const handleDelete = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Bạn có chắc chắn không?',
      text: 'Hành động này không thể hoàn tác!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xoá ngay!',
      cancelButtonText: 'Huỷ'
    }).then((result) => {
      window.dispatchEvent(new CustomEvent('cart-updated'));
      if (result.isConfirmed) {
        onDeleteProduct(product.id);
      }
    });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      Swal.fire({
        title: 'Xoá sản phẩm?',
        text: 'Bạn có muốn xoá sản phẩm này khỏi giỏ hàng không?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, xoá ngay!',
        cancelButtonText: 'Không, giữ lại'
      }).then((result) => {
        if (result.isConfirmed) {
          onDeleteProduct(product.id);
          window.dispatchEvent(new CustomEvent('cart-updated'));
        } else {
          onQuantityChange(index, 1);
        }
      });
    } else {
      onQuantityChange(index, newQuantity);
    }
  };

  return (
    <tr className="product-box-contain h-full">
      <td className="select-product w-1/14 min-w-0 text-center align-middle" style={{ minWidth: 'unset' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckChange(product.id)}
          name="select_product"
          className="w-4 h-4 cursor-pointer checkbox_animated checkall"
        />
      </td>
      <td className="product-detail !w-4/14">
        <div className="product border-0">
          <Link to={`/product/${product.id}`} className="product-image">
            <img
              src={product.listImage}
              alt={product.productName}
              width={101}
              height={101}
            />
          </Link>
        </div>
      </td>

      <td className="uproduct-info w-4/14 min-w-0 text-center align-middle max-w-[250px] break-words">
        <p className="break-words overflow-hidden text-ellipsis">
          <Link to={`/product/${product.id}`} className="inline-block w-full">
            {product.productName}
          </Link>
        </p>
      </td>


      <td className="unitprice w-2/14 min-w-0 text-center align-middle" style={{ minWidth: 'unset' }}>
        <h4 className="table-title text-content">Đơn giá</h4>
        <h5>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(product.unitPrice)}
        </h5>
      </td>
      <td className="quantity w-2/14 align-middle text-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 className="table-title text-content">Số lượng</h4>
          <div className="quantity-price">
            <div className="cart_qty">
              <div className="input-group d-flex align-items-center">
                <button
                  type="button"
                  className="btn qty-left-minus"
                  onClick={() => handleQuantityChange((product.quantity || 1) - 1)}
                >
                  <i className="fa fa-minus ms-0" aria-hidden="true" />
                </button>
                <input
                  className="form-control input-number qty-input text-center"
                  type="text"
                  name="quantity"
                  value={product.quantity || 1}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    handleQuantityChange(value);
                  }}
                />
                <button
                  type="button"
                  className="btn qty-right-plus"
                  onClick={() => handleQuantityChange((product.quantity || 1) + 1)}
                >
                  <i className="fa fa-plus ms-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>

      <td className="subtotal w-2/14 min-w-0 text-center align-middle" style={{ minWidth: 'unset' }}>
        <h4 className="table-title text-content">Tổng</h4>
        <h5>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(product.totalPrice)}
        </h5>
      </td>
      <td className="save-remove -1/14 min-w-0 text-center align-middle" style={{ minWidth: 'unset' }}>
        <h4 className="table-title text-content">Hành động</h4>
        <li>
          <a
            href="#"
            className="text-danger"
            onClick={handleDelete}
          >
            <i className="ri-delete-bin-line" />
          </a>
        </li>
      </td>
    </tr>
  );
};

export default Product;
