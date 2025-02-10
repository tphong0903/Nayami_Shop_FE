export default function StickyCartSection() {
  return (
    <>
      {/* Sticky Cart Box Start */}
      <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="cart-content">
                <div className="product-image">
                  <img
                    src="../assets/images/product/category/1.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  <div className="content">
                    <h5>Creamy Chocolate Cake</h5>
                    <h6>
                      $32.96<del className="text-danger">$96.00</del>
                      <span>55% off</span>
                    </h6>
                  </div>
                </div>
                <div className="selection-section">
                  <div className="form-group mb-0">
                    <select
                      id="input-state"
                      className="form-control form-select"
                    >
                      <option selected="" disabled="">
                        Choose Weight...
                      </option>
                      <option>1/2 KG</option>
                      <option>1 KG</option>
                      <option>1.5 KG</option>
                    </select>
                  </div>
                  <div className="cart_qty qty-box product-qty m-0">
                    <div className="input-group h-100">
                      <button
                        type="button"
                        className="qty-left-minus"
                        data-type="minus"
                        data-field=""
                      >
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
                      <input
                        className="form-control input-number qty-input"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                      />
                      <button
                        type="button"
                        className="qty-right-plus"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="fa fa-plus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-btn">
                  <a
                    className="btn theme-bg-color text-white wishlist-btn"
                    href="wishlist.html"
                  >
                    <i className="fa fa-bookmark" /> Wishlist
                  </a>
                  <a className="btn theme-bg-color text-white" href="cart.html">
                    <i className="fas fa-shopping-cart" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Cart Box End */}
      <div className="bg-overlay"></div>
    </>
  );
}
