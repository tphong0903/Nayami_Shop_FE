
import Hinh1 from '~/assets/images/cake/product/2.png'
export default function Product() {
  return (
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
                  href="#"
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
  )
}
