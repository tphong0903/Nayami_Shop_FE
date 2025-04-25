
import Hinh1 from '~/assets/svg/3/work.svg';
import Hinh2 from '~/assets/svg/3/buy.svg';
import Hinh3 from '~/assets/svg/3/user.svg';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
export default function ClientSection() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 3;
    } else {
      return 3;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <section className="client-section section-lg-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="about-us-title text-center">
              <h4>Chúng Tôi Làm Gì</h4>
              <h2 className="center">Chúng Tôi Được Khách Hàng Tin Cậy</h2>
            </div>
            <div className="slider-3_1 product-wrapper">
              <Slider {...settings}>
                <div>
                  <div className="clint-contain">
                    <div className="client-icon">
                      <img
                        src={Hinh1}
                        className="lazyload"
                        alt=""
                      />
                    </div>
                    <h2>1</h2>
                    <h4>Năm Kinh Doanh</h4>
                    <p>Mặc dù mới mở cửa trong một năm qua, chúng tôi đã nhanh chóng trở thành địa chỉ tin cậy trong việc cung cấp các sản phẩm điện tử như điện thoại, laptop và các thiết bị công nghệ hiện đại khác. Chúng tôi cam kết mang lại trải nghiệm mua sắm tốt nhất cho khách hàng.</p>
                  </div>
                </div>
                <div>
                  <div className="clint-contain">
                    <div className="client-icon">
                      <img
                        src={Hinh2}
                        className="lazyload"
                        alt=""
                      />
                    </div>
                    <h2>50 K+</h2>
                    <h4>Sản Phẩm Được Bán</h4>
                    <p>Chúng tôi cung cấp các sản phẩm điện tử chất lượng từ các thương hiệu nổi tiếng trên thế giới với chế độ bảo hành, sửa chữa đặc biệt. Khách hàng có thể dễ dàng tìm thấy các sản phẩm phù hợp với nhu cầu của mình từ smartphone, laptop đến các thiết bị điện tử cao cấp khác.</p>
                  </div>
                </div>
                <div>
                  <div className="clint-contain">
                    <div className="client-icon">
                      <img
                        src={Hinh3}
                        className=" lazyload"
                        alt=""
                      />
                    </div>
                    <h2>95%</h2>
                    <h4>Khách Hàng Hài Lòng</h4>
                    <p>Với cam kết cung cấp sản phẩm chất lượng và dịch vụ tận tâm, chúng tôi tự hào khi hơn 95% khách hàng của chúng tôi đều hài lòng và sẵn sàng quay lại mua sắm trong tương lai. Chúng tôi luôn cố gắng để mang lại sự hài lòng tối đa cho khách hàng.</p>
                  </div>
                </div>
              </Slider>
            </div>

          </div>
        </div>
      </div>
    </section >

  )
}
