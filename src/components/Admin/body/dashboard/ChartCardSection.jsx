

export default function ChartCardSection() {
  return (
    <>
      <div className="col-sm-6 col-xxl-3 col-lg-6">
        <div className="main-tiles border-5 border-0  card-hover card o-hidden">
          <div className="custome-1-bg b-r-4 card-body">
            <div className="media align-items-center static-top-widget">
              <div className="media-body p-0">
                <span className="m-0">TỔNG DOANH THU</span>
                <h4 className="mb-0 counter">
                  $6659
                  <span className="badge badge-light-primary grow">
                    <i data-feather="trending-up" />
                    8.5%
                  </span>
                </h4>
              </div>
              <div className="align-self-center text-center">
                <i className="ri-database-2-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3 col-lg-6">
        <div className="main-tiles border-5 card-hover border-0 card o-hidden">
          <div className="custome-2-bg b-r-4 card-body">
            <div className="media static-top-widget">
              <div className="media-body p-0">
                <span className="m-0">TỔNG LỢI NHUẬN</span>
                <h4 className="mb-0 counter">
                  9856
                  <span className="badge badge-light-danger grow">
                    <i data-feather="trending-down" />
                    8.5%
                  </span>
                </h4>
              </div>
              <div className="align-self-center text-center">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3 col-lg-6">
        <div className="main-tiles border-5 card-hover border-0  card o-hidden">
          <div className="custome-3-bg b-r-4 card-body">
            <div className="media static-top-widget">
              <div className="media-body p-0">
                <span className="m-0">SẢN PHẨM</span>
                <h4 className="mb-0 counter">
                  893
                  <a
                    href="add-new-product.html"
                    className="badge badge-light-secondary grow"
                  >
                    ADD NEW
                  </a>
                </h4>
              </div>
              <div className="align-self-center text-center">
                <i className="ri-mac-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3 col-lg-6">
        <div className="main-tiles border-5 card-hover border-0 card o-hidden">
          <div className="custome-4-bg b-r-4 card-body">
            <div className="media static-top-widget">
              <div className="media-body p-0">
                <span className="m-0">ĐƠN CẦN XỬ LÝ</span>
                <h4 className="mb-0 counter">
                  4.6k
                  <span className="badge badge-light-success grow">
                    <i data-feather="trending-down" />
                    8.5%
                  </span>
                </h4>
              </div>
              <div className="align-self-center text-center">
                <i className="ri-shopping-bag-3-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
