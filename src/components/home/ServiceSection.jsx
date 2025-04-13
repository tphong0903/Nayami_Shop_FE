import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PercentIcon from '@mui/icons-material/Percent';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="container-fluid-lg">
        <div className="row g-3 row-cols-xxl-4 row-cols-lg-3 row-cols-md-2">
          <div>
            <div className="service-contain-2">
              <SupportAgentIcon />
              <div className="service-detail">
                <h3>24 x 7 Dịch vụ</h3>
                <h6 className="text-content">Hỗ trợ trực tuyến 24/7</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <CreditCardIcon />
              <div className="service-detail">
                <h3>Thanh toán Online</h3>
                <h6 className="text-content">Hỗ trợ thanh toán Online</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <PercentIcon />
              <div className="service-detail">
                <h3>Khuyến mãi</h3>
                <h6 className="text-content">Khuyến mãi lớn lên đến 50%</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="service-contain-2">
              <VerifiedIcon />
              <div className="service-detail">
                <h3>Hàng chính hãng</h3>
                <h6 className="text-content">Hỗ trợ hoàn trả hàng khi lỗi</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
