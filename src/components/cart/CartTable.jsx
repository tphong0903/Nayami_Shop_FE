import Product from './Product';

export default function CartTable() {
  return (
    <div className="col-xxl-9">
      <div className="cart-table">
        <div className="table-responsive-xl">
          <table className="table">
            <tbody>
              <Product />
              <Product />
              <Product />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
