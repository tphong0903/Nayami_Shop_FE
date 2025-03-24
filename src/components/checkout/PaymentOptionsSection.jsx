import { useEffect, useState, React } from 'react';

const PaymentOptionsSection = ({ onPaymentMethodChange }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default to cash

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (onPaymentMethodChange) {
      onPaymentMethodChange(paymentMethod);
    }
  }, []);

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);

    if (onPaymentMethodChange) {
      onPaymentMethodChange(method);
    }
  };

  return (
    <li>
      <div className="checkout-icon">
        <lord-icon
          target=".nav-item"
          src="https://cdn.lordicon.com/qmcsqnle.json"
          trigger="loop-on-hover"
          colors="primary:#0baf9a,secondary:#0baf9a"
          className="lord-icon"
        ></lord-icon>
      </div>
      <div className="checkout-box">
        <div className="checkout-title">
          <h4>Phương thức thanh toán</h4>
        </div>

        <div className="checkout-detail">
          <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
            <div className="accordion-item">
              <div className="accordion-header" id="flush-headingFour">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                >
                  <div className="custom-form-check form-check mb-0">
                    <label className="form-check-label" htmlFor="cash">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name="flexRadioDefault"
                        id="cash"
                        checked={paymentMethod === 'COD'}
                        onChange={() => handlePaymentChange('COD')}
                      />{' '}
                      Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="flush-headingThree">
                <div className="accordion-button collapsed">
                  <div className="custom-form-check form-check mb-0">
                    <label className="form-check-label" htmlFor="banking">
                      <input
                        className="form-check-input mt-0"
                        type="radio"
                        name="flexRadioDefault"
                        id="banking"
                        checked={paymentMethod === 'ONLINE_BANKING'}
                        onChange={() => handlePaymentChange('ONLINE_BANKING')}
                      />
                      Thanh toán qua ngân hàng điện tử
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PaymentOptionsSection;