import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PercentIcon from '@mui/icons-material/Percent';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="container-fluid-lg">
        <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
          <div>
            <div className="service-contain-2">
              <LocalShippingIcon />
              <div className="service-detail">
                <h3>Free Shipping</h3>
                <h6 className="text-content">Free Shipping world wide</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <SupportAgentIcon />
              <div className="service-detail">
                <h3>24 x 7 Service</h3>
                <h6 className="text-content">Online Service For 24 x 7</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <CreditCardIcon />
              <div className="service-detail">
                <h3>Online Pay</h3>
                <h6 className="text-content">Online Payment Avaible</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <PercentIcon />
              <div className="service-detail">
                <h3>Festival Offer</h3>
                <h6 className="text-content">Super Sale Upto 50% off</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <VerifiedIcon />
              <div className="service-detail">
                <h3>100% Original</h3>
                <h6 className="text-content">100% Money Back</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
