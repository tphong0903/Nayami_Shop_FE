import Product from './Product';

export default function CartTable() {
  return (
    <div className="col-xxl-9">
      <div className="cart-table">
        <div className="table-responsive-xl">
          <table className="table-auto w-full text-center align-middle">
            <tbody>
              <Product />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
