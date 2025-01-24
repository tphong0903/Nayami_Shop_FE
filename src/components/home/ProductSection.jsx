import Hinh1 from '~/assets/images/veg-2/product/1.png'

export default function ProductSection() {
  return (
    <section className="product-section">
      <div className="container-fluid-lg">
        <div className="title title-flex-2">
          <h2>Our Products</h2>
          <ul className="nav nav-tabs tab-style-color-2 tab-style-color" id="myTab">
            <li className="nav-item">
              <button
                className="nav-link btn active"
                id="all-tab"
                data-bs-toggle="tab"
                data-bs-target="#all"
                type="button"
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn"
                id="cooking-tab"
                data-bs-toggle="tab"
                data-bs-target="#cooking"
                type="button"
              >
                {' '}
                Cooking
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn"
                id="fruits-tab"
                data-bs-toggle="tab"
                data-bs-target="#fruits"
                type="button"
              >
                Fruits &amp; Vegetables
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn"
                id="beverage-tab"
                data-bs-toggle="tab"
                data-bs-target="#beverage"
                type="button"
              >
                Beverage
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn"
                id="dairy-tab"
                data-bs-toggle="tab"
                data-bs-target="#dairy"
                type="button"
              >
                Dairy
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="row g-8">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Bell pepper</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.05s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Potato</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>50%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Baby Chili</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Broccoli</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>-25%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Peru</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Avacado</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cucumber</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>-25%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Beetroot</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Strawberry</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.45s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Corn</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>50%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cabbage</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                data-wow-delay="0.55s"
              >
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <div className="discount">
                        <label>-25%</label>
                      </div>
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Ginger</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="cooking"
            role="tabpanel"
            aria-labelledby="cooking-tab"
          >
            <div className="row g-8">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Onion</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Potato</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Baby Chili</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Broccoli</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Pea</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cucumber</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cabbage</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Ginger</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="fruits"
            role="tabpanel"
            aria-labelledby="fruits-tab"
          >
            <div className="row g-8">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Apple</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Passion</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Blackberry</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Peru</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Apple</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Strawberry</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Bell pepper</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="beverage"
            role="tabpanel"
            aria-labelledby="beverage-tab"
          >
            <div className="row g-8">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Onion</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Potato</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Baby Chili</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Broccoli</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Pea</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cucumber</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cabbage</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Ginger</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="dairy"
            role="tabpanel"
            aria-labelledby="dairy-tab"
          >
            <div className="row g-8">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Eggplant</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Onion</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Potato</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Baby Chili</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Broccoli</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Pea</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
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
                        <i data-feather="star" className="fill" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cucumber</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Cabbage</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                <div className="product-box-4">
                  <div className="product-image">
                    <div className="label-flex">
                      <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="iconly-Heart icli" />
                      </button>
                    </div>
                    <a href="product-left-thumbnail.html">
                      <img
                        src={Hinh1}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i className="iconly-Show icli" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i className="iconly-Swap icli" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Ginger</h5>
                    </a>
                    <h5 className="price theme-color">
                      $70.21<del>$65.25</del>
                    </h5>
                    <div className="price-qty">
                      <div className="counter-number">
                        <div className="counter">
                          <div
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa-solid fa-minus" />
                          </div>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <div
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa-solid fa-plus" />
                          </div>
                        </div>
                      </div>
                      <button className="buy-button buy-button-2 btn btn-cart">
                        <i className="iconly-Buy icli text-white m-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
