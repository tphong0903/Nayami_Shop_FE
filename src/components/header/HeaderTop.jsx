import { Link } from 'react-router-dom';


export default function HeaderTop() {
  return (
    <>
      <div className="header-top" style={{ width: '100%' }}>
        <div className="container-fluid-lg" style={{ width: '100%' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="col-xxl-3 d-xxl-block d-none">
              <div className="top-left-header">
                <i className="iconly-Location icli text-white" />
                <span className="text-white">
                  số XX, đường Võ Văn Ngân, Thành phố Thủ Đức
                </span>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
              <div className="header-offer">
                <div className="notification-slider">
                  <div>
                    <div className="timer-notification">
                      <h6>
                        <strong className="me-1">Chào mừng đến NayamiShop!</strong>Các sản phẩm/phần quà được khuyến mãi trong tuần.
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div className="timer-notification">
                      <h6>
                        Có thể sản phẩm bạn thích đang sale!
                        <Link to={'/shop'} className="text-white">
                          Mua ngay !
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>
                <strong className="me-1 text-white">Hotline tư vấn: 0851xxxxxx</strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
