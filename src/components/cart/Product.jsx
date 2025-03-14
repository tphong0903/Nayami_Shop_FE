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

  const fetchProducts = async () => {
    try {
      const token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc0MTg4NDU0NSwiZXhwIjoxNzQxODg1OTg1fQ.6XSqZfB-UPnwEKBRoVDL4t6y9P_JZ_TKFULCCWNIivE';
      // const token = localStorage.getItem("token");
      const response = await axios.get('/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(response.data.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedProducts = [...products];
      updatedProducts[index].quantity = newQuantity;
      setProducts(updatedProducts);
    }
  };

  const handleRemove = (productId) => {
    // Implement remove functionality
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleSaveForLater = (productId) => {
    // Implement save for later functionality
    Swal.fire({
      title: 'Saved',
      text: 'Product saved for later',
      icon: 'success',
    });
  };
  console.log('Products:', products);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="w-1/3 p-2 border">Product</th>
            <th className="w-1/6 p-2 border">Price</th>
            <th className="w-1/5 p-2 border">Qty</th>
            <th className="w-1/6 p-2 border">Total</th>
            <th className="w-1/8 p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr className="product-box-contain text-center" key={product.id}>
              <td className="p-2 border flex items-center gap-2 justify-center">
                <Link to={`/product/${product.id}`} className="product-image">
                  <img
                    src={product.listImage}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                </Link>
                <div className="product-detail">
                  <Link to={`/product/${product.id}`} className="text-blue-500">
                    {product.productName}
                  </Link>
                </div>
              </td>
              <td className="p-2 border">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.unitPrice)}
              </td>
              <td className="p-2 border">
                <div className="flex items-center gap-2 justify-center">
                  <button
                    type="button"
                    className="px-2 py-1 border bg-gray-200"
                    onClick={() => handleQuantityChange(index, (product.quantity || 1) - 1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-12 text-center border"
                    value={product.quantity || 1}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                  />
                  <button
                    type="button"
                    className="px-2 py-1 border bg-gray-200"
                    onClick={() => handleQuantityChange(index, (product.quantity || 1) + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-2 border">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.totalPrice)}
              </td>
              <td className="p-2 border text-red-500 cursor-pointer">
                <button
                  onClick={() => handleRemove(product.id)}
                  aria-label="Remove item"
                  title="Remove item"
                  className="transition-all ease-in-out transform hover:scale-110 hover:text-red-700"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default ProductList;
