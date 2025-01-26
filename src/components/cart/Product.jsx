import Hinh1 from '~/assets/images/vegetable/product/1.png'

export default function Product() {
  return (
    <tr className="product-box-contain">
      <td className="product-detail">
        <div className="product border-0">
          <a
            href="product-left-thumbnail.html"
            className="product-image"
          >
            <img
              src={Hinh1}
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
          <div className="product-detail">
            <ul>
              <li className="name">
                <a href="product-left-thumbnail.html">
                  Bell pepper
                </a>
              </li>
              <li className="text-content">
                <span className="text-title">Sold By:</span> Fresho
              </li>
              <li className="text-content">
                <span className="text-title">Quantity</span> - 500 g
              </li>
              <li>
                <h5 className="text-content d-inline-block">
                  Price :
                </h5>
                <span>$35.10</span>
                <span className="text-content">$45.68</span>
              </li>
              <li>
                <h5 className="saving theme-color">
                  Saving : $20.68
                </h5>
              </li>
              <li className="quantity-price-box">
                <div className="cart_qty">
                  <div className="input-group">
                    <button
                      type="button"
                      className="btn qty-left-minus"
                      data-type="minus"
                      data-field=""
                    >
                      <i
                        className="fa fa-minus ms-0"
                        aria-hidden="true"
                      />
                    </button>
                    <input
                      className="form-control input-number qty-input"
                      type="text"
                      name="quantity"
                      defaultValue={0}
                    />
                    <button
                      type="button"
                      className="btn qty-right-plus"
                      data-type="plus"
                      data-field=""
                    >
                      <i
                        className="fa fa-plus ms-0"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <h5>Total: $35.10</h5>
              </li>
            </ul>
          </div>
        </div>
      </td>
      <td className="price">
        <h4 className="table-title text-content">Price</h4>
        <h5>
          $35.10 <del className="text-content">$45.68</del>
        </h5>
        <h6 className="theme-color">You Save : $20.68</h6>
      </td>
      <td className="quantity">
        <h4 className="table-title text-content">Qty</h4>
        <div className="quantity-price">
          <div className="cart_qty">
            <div className="input-group">
              <button
                type="button"
                className="btn qty-left-minus"
                data-type="minus"
                data-field=""
              >
                <i
                  className="fa fa-minus ms-0"
                  aria-hidden="true"
                />
              </button>
              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                defaultValue={0}
              />
              <button
                type="button"
                className="btn qty-right-plus"
                data-type="plus"
                data-field=""
              >
                <i className="fa fa-plus ms-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="subtotal">
        <h4 className="table-title text-content">Total</h4>
        <h5>$35.10</h5>
      </td>
      <td className="save-remove">
        <h4 className="table-title text-content">Action</h4>
        <a
          className="save notifi-wishlist"
          href="javascript:void(0)"
        >
          Save for later
        </a>
        <a
          className="remove close_button"
          href="javascript:void(0)"
        >
          Remove
        </a>
      </td>
    </tr>
  )
}
