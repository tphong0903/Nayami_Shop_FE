import Hinh1 from '~/assets/images/inner-page/about-us/1.jpg'
import Hinh2 from '~/assets/images/inner-page/about-us/2.jpg'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PercentIcon from '@mui/icons-material/Percent';
import VerifiedIcon from '@mui/icons-material/Verified';
import Laptop from '~/assets/ImageCategoris/laptop.png';
import DienThoai from '~/assets/ImageCategoris/iphone-16-pro-max.png';
import ManHinh from '~/assets/ImageCategoris/man-hinh-removebg-preview.png';
import BanPhim from '~/assets/ImageCategoris/ban-phim-removebg-preview.png';
import Chuot from '~/assets/ImageCategoris/chuot-removebg-preview.png';
import TaiNghe from '~/assets/ImageCategoris/tai-nghe-removebg-preview.png';
import Loa from '~/assets/ImageCategoris/loa-removebg-preview.png';
import Camera from '~/assets/ImageCategoris/camera-removebg-preview.png';
export default function AboutUs() {
  return (
    <section className="fresh-vegetable-section section-lg-space">
      <div className="container-fluid-lg">
        <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
          <div className="col-xl-6 col-12">
            <div className="row g-sm-4 g-2">
              <div className="col-6">
                <div className="fresh-image-2">
                  <div>
                    <img
                      src={Camera}
                      className="bg-img  lazyload"
                      alt=""
                      style={{

                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="fresh-image">
                  <div>
                    <img
                      src={DienThoai}
                      className="bg-img lazyload"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="fresh-contain p-center-left">
              <div>
                <div className="review-title">
                  <h4>Giới thiệu</h4>
                  <h2>Giải pháp thiết bị điện tử thông minh cho cuộc sống hiện đại</h2>
                </div>
                <div className="delivery-list">
                  <p className="text-content">
                    Chúng tôi chuyên cung cấp các thiết bị điện tử chất lượng cao, đáp ứng nhu cầu công nghệ ngày càng phát triển của người dùng. Từ các sản phẩm gia dụng thông minh đến thiết bị cá nhân tiện ích, tất cả đều được chọn lọc kỹ lưỡng về tính năng và độ bền.
                    <br /><br />
                    Thành lập từ năm 2025, chúng tôi không ngừng cải tiến và mở rộng danh mục sản phẩm, mang đến những trải nghiệm công nghệ tối ưu với giá cả hợp lý. Với dịch vụ hỗ trợ 24/7 và hàng trăm sản phẩm mới được cập nhật liên tục, chúng tôi luôn sẵn sàng đồng hành cùng bạn trong hành trình số hóa cuộc sống.
                  </p>
                  <ul className="delivery-box">
                    <li>
                      <div className="delivery-box">
                        <div className="delivery-icon">
                          <SupportAgentIcon />
                        </div>
                        <div className="delivery-detail">
                          <h5 className="text">Hỗ trợ trực tuyến 24/7</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="delivery-box">
                        <div className="delivery-icon">
                          <CreditCardIcon />
                        </div>
                        <div className="delivery-detail">
                          <h5 className="text">Hỗ trợ thanh toán Online</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="delivery-box">
                        <div className="delivery-icon">
                          <PercentIcon />
                        </div>
                        <div className="delivery-detail">
                          <h5 className="text">Khuyến mãi lớn lên đến 50%</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="delivery-box">
                        <div className="delivery-icon">
                          <VerifiedIcon />
                        </div>
                        <div className="delivery-detail">
                          <h5 className="text">Hỗ trợ hoàn trả hàng khi lỗi</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
