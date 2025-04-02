import { useNavigate } from 'react-router-dom';
import Product from './Product';

export default function CartTable({
  products,
  loading,
  error,
  onQuantityChange,
  onDeleteProduct,
  onCheckChange,
  selectAll,
  onSelectAll
}) {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="col-xxl-9">
        <div className="cart-table">
          <div className="table-responsive">
            <div className="text-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Đang tải...</span>
              </div>
              <p className="mt-3">Đang tải giỏ hàng của bạn...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-xxl-9">
        <div className="cart-table">
          <div className="table-responsive">
            <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
              <i className="fa fa-exclamation-circle fa-3x text-danger mb-3"></i>
              <p className="text-danger">{error}</p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => window.location.reload()}
              >
                Thử lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="col-xxl-9">
        <div className="cart-table">
          <div className="table-responsive">
            <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
              <i className="fa fa-shopping-cart fa-3x text-secondary mb-3"></i>
              <h4>Giỏ hàng của bạn đang trống</h4>
              <p className="text-muted">Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
              <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-xxl-9">
      <div className="cart-table">
        <div className="table-responsive">
          <table className="table-auto w-full border-collapse" style={{ tableLayout: 'fixed' }}>
            <thead>
              <tr className="table-head">
                <th className="w-1/14 text-center align-middle" style={{ minWidth: 'unset' }}>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    className="w-4 h-4 cursor-pointer checkbox_animated"
                  />
                </th>
                <th className="w-4/14 text-center" colSpan={3}>Sản phẩm</th>
                <th className="w-2/14 text-center">Đơn giá</th>
                <th className="w-2/14 text-center">Số lượng</th>
                <th className="w-2/14 text-center">Tổng</th>
                <th className="w-1/14 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <Product
                  key={product.id}
                  product={product}
                  index={index}
                  onQuantityChange={onQuantityChange}
                  onDeleteProduct={onDeleteProduct}
                  onCheckChange={onCheckChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}