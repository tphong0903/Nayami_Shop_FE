import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from 'react-router-dom';
export default function CategorySection() {
  return (
    <section className="wow fadeInUp">
      <div className="container-fluid-lg">
        <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
          <div>
            <Link to="/product-detail" className="service-contain-2">
              <LaptopIcon />
              <div className="service-detail">
                <h3>Laptop</h3>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/product-detail" className="service-contain-2">
              <PhoneIphoneIcon />
              <div className="service-detail">
                <h3>Phone</h3>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/product-detail" className="service-contain-2">
              <HeadphonesIcon />
              <div className="service-detail">
                <h3>HeadPhone</h3>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/product-detail" className="service-contain-2">
              <PhoneIphoneIcon />
              <div className="service-detail">
                <h3>Festival Offer</h3>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/product-detail" className="service-contain-2">
              <PhoneIphoneIcon />
              <div className="service-detail">
                <h3>100% Original</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
