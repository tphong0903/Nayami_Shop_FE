import Product from './Product';


export default function ListProduct() {
  return (
    <div className="col-custome-9 wow fadeInUp" style={{ width: '78%' }}>
      <div className="show-button">
        <div className="filter-button-group mt-0">
          <div className="filter-button d-inline-block d-lg-none">
            <a>
              <i className="fa-solid fa-filter" /> Filter Menu
            </a>
          </div>
        </div>
        <div className="top-filter-menu">
          <div className="category-dropdown">
            <h5 className="text-content">Sort By :</h5>
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              >
                <span>Most Popular</span> <i className="fa-solid fa-angle-down" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" id="pop" href="javascript:void(0)">
                    Popularity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="low" href="javascript:void(0)">
                    Low - High Price
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="high" href="javascript:void(0)">
                    High - Low Price
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    id="rating"
                    href="javascript:void(0)"
                  >
                    Average Rating
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="aToz" href="javascript:void(0)">
                    A - Z Order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="zToa" href="javascript:void(0)">
                    Z - A Order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" id="off" href="javascript:void(0)">
                    % Off - Hight To Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-option d-none d-md-block">
            <ul>
              <li className="three-grid">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/svg/grid-3.svg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
              </li>
              <li className="grid-btn d-xxl-inline-block d-none active">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/svg/grid-4.svg"
                    className="blur-up lazyload d-lg-inline-block d-none"
                    alt=""
                  />
                  <img
                    src="../assets/svg/grid.svg"
                    className="blur-up lazyload img-fluid d-lg-none d-inline-block"
                    alt=""
                  />
                </a>
              </li>
              <li className="list-btn">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/svg/list.svg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
        <div>
          <div className="product-box-3 h-100 wow fadeInUp">
            <div className="product-header">
              <div className="product-image">
                <a href="product-left-thumbnail.html">
                  <img
                    src="../assets/images/cake/product/2.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </a>
                <ul className="product-option">
                  <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                    <a
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#view"
                    >
                      <i data-feather="eye" />
                    </a>
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Compare"
                  >
                    <a href="compare.html">
                      <i data-feather="refresh-cw" />
                    </a>
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Wishlist"
                  >
                    <a href="wishlist.html" className="notifi-wishlist">
                      <i data-feather="heart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <span className="span-name">Vegetable</span>
                <a href="product-left-thumbnail.html">
                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                </a>
                <p className="text-content mt-1 mb-2 product-content">
                  Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard
                  cheese the big cheese everyone loves smelly cheese macaroni cheese
                  croque monsieur.
                </p>
                <div className="product-rating mt-2">
                  <ul className="rating">
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" className="fill" />
                    </li>
                    <li>
                      <i data-feather="star" />
                    </li>
                  </ul>
                  <span>(4.0)</span>
                </div>
                <h6 className="unit">250 ml</h6>
                <h5 className="price">
                  <span className="theme-color">$08.02</span> <del>$15.15</del>
                </h5>
                <div className="add-to-cart-box bg-white">
                  <button className="btn btn-add-cart addcart-button">
                    Add
                    <span className="add-icon bg-light-gray">
                      <i className="fa-solid fa-plus" />
                    </span>
                  </button>
                  <div className="cart_qty qty-box">
                    <div className="input-group bg-white">
                      <button
                        type="button"
                        className="qty-left-minus bg-gray"
                        data-type="minus"
                        data-field=""
                      >
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
                      <input
                        className="form-control input-number qty-input"
                        type="text"
                        name="quantity"
                        defaultValue={0}
                      />
                      <button
                        type="button"
                        className="qty-right-plus bg-gray"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="fa fa-plus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  )
}
