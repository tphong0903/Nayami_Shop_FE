/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    fetchProducts();
  }, []);
  const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc0MTk1NTI4MiwiZXhwIjoxNzQxOTU2NzIyfQ.ik0NlooEMqqfwHAXrfEt0hCOC5T8BnkF3x9-JP220q4';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const fetchProducts = async () => {
    try {
      // const token = localStorage.getItem("token");
      const response = await axios.get('/api/cart');
      setProducts(response.data.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleQuantityChange = async (index, newQuantity) => {
    if (newQuantity >= 0) {
      try {
        const updatedProducts = [...products];
        const product = updatedProducts[index];
        product.quantity = newQuantity;

        await axios.put(`/api/cart/${product.id}`, {
          quantity: newQuantity
        });
        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error updating quantity:', error);
        Swal.fire('Lỗi!', 'Không thể cập nhật số lượng sản phẩm.', 'error');
      }
    }
  };

  const deleteCard = async (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xoá?',
      text: 'Sau khi xoá sẽ không thể khôi phục!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Xoá',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/cart/${id}`);
          Swal.fire('Đã xoá!', 'Sản phẩm đã được xoá thành công.', 'success');
          setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
        } catch (err) {
          Swal.fire('Lỗi!', 'Không thể xoá sản phẩm .', 'error');
          console.error('Lỗi khi xoá sản phẩm :', err);
        }
      }
    });
  };


  return (
    <>
      {products.map((product, index) => (
        <tr className="product-box-contain h-full" key={product.id}>
          <td className="product-detail">
            <div className="product border-0">
              <Link to={`/product/${product.id}`} className="product-image">
                <img
                  src={product.listImage}
                  alt={product.productName}
                  width={80}
                  height={90}
                />
              </Link>
              <div className="product-detail">
                <ul className="name break-words whitespace-normal">
                  <Link to={`/product/${product.id}`}>
                    {product.productName}
                  </Link>
                </ul>
              </div>
            </div>
          </td>
          <td className="unitprice">
            <h4 className="table-title text-content">Total</h4>
            <h5>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.unitPrice)}
            </h5>
          </td>
          <td className="quantity align-middle text-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h4 className="table-title text-content">Qty</h4>
              <div className="quantity-price">
                <div className="cart_qty">
                  <div className="input-group d-flex align-items-center">
                    <button
                      type="button"
                      className="btn qty-left-minus"
                      onClick={() =>
                        handleQuantityChange(index, (product.quantity || 1) - 1)
                      }
                    >
                      <i className="fa fa-minus ms-0" aria-hidden="true" />
                    </button>
                    <input
                      className="form-control input-number qty-input text-center"
                      type="text"
                      name="quantity"
                      value={product.quantity || 1}
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 0
                        )
                      }
                    />
                    <button
                      type="button"
                      className="btn qty-right-plus"
                      onClick={() =>
                        handleQuantityChange(index, (product.quantity || 1) + 1)
                      }
                    >
                      <i className="fa fa-plus ms-0" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>

          <td className="subtotal">
            <h4 className="table-title text-content">Total</h4>
            <h5>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.totalPrice)}
            </h5>
          </td>
          <td className="save-remove">
            <h4 className="table-title text-content">Action</h4>
            <li>
              <a
                href="#"
                className="text-danger"
                onClick={(e) => {
                  e.preventDefault();
                  deleteCard(product.id);
                }}
              >
                <i className="ri-delete-bin-line" />
              </a>
            </li>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductList;
