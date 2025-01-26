

export default function SideSummery() {
  return (
    <div className="col-xxl-3">
      <div className="summery-box p-sticky">
        <div className="summery-header">
          <h3>Cart Total</h3>
        </div>
        <div className="summery-contain">
          <div className="coupon-cart">
            <h6 className="text-content mb-2">Coupon Apply</h6>
            <div className="mb-3 coupon-box input-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Coupon Code Here..."
              />
              <button className="btn-apply">Apply</button>
            </div>
          </div>
          <ul>
            <li>
              <h4>Subtotal</h4>
              <h4 className="price">$125.65</h4>
            </li>
            <li>
              <h4>Coupon Discount</h4>
              <h4 className="price">(-) 0.00</h4>
            </li>
            <li className="align-items-start">
              <h4>Shipping</h4>
              <h4 className="price text-end">$6.90</h4>
            </li>
          </ul>
        </div>
        <ul className="summery-total">
          <li className="list-total border-top-0">
            <h4>Total (USD)</h4>
            <h4 className="price theme-color">$132.58</h4>
          </li>
        </ul>
        <div className="button-group cart-button">
          <ul>
            <li>
              <button
                onclick="location.href = 'checkout.html';"
                className="btn btn-animation proceed-btn fw-bold"
              >
                Process To Checkout
              </button>
            </li>
            <li>
              <button
                onclick="location.href = 'index.html';"
                className="btn btn-light shopping-button text-dark"
              >
                <i className="fa-solid fa-arrow-left-long" />
                Return To Shopping
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

