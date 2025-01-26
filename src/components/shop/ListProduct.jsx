import Product from './Product';


export default function ListProduct() {
  return (
    <>
      <div className="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
      <nav className="custome-pagination">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="javascript:void(0)"
              tabIndex={-1}
              aria-disabled="true"
            >
              <i className="fa-solid fa-angles-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="javascript:void(0)">
              1
            </a>
          </li>
          <li className="page-item" aria-current="page">
            <a className="page-link" href="javascript:void(0)">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0)">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0)">
              <i className="fa-solid fa-angles-right" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
