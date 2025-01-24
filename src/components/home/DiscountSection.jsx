import Hinh1 from '~/assets/images/veg-2/product/1.png'
export default function DiscountSection() {
  return (
    <section className="product-section">
      <div className="container-fluid-lg">
        <div className="title">
          <h2>Discount Products</h2>
        </div>
        <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <div className="discount"><label>50%</label></div>
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
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <div className="discount"><label>50%</label></div>
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
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <div className="discount"><label>50%</label></div>
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
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <div className="discount"><label>50%</label></div>
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
          <div className="product-box-4 wow fadeInUp">
            <div className="product-image">
              <div className="label-flex">
                <div className="discount"><label>50%</label></div>
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
          <div className="product-box-4 wow fadeInUp">
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
          <div className="product-box-4 wow fadeInUp">
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
          <div className="product-box-4 wow fadeInUp">
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
          <div className="product-box-4 wow fadeInUp">
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
          <div className="product-box-4 wow fadeInUp">
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
      </div>
    </section>

  )
}
