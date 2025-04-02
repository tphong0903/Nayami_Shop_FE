import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { formatCurrency } from '~/utils/formatCurrency';

export default function ChartCardSection() {
  const [chartCardData, setChartCardData] = useState()
  useEffect(() => {
    axios
      .get('/api/dashboard/chartCard')
      .then((response) => {
        setChartCardData(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể data.', 'error')
      })
  }, []);
  return (
    <>
      <div className="col-sm-6 col-xxl-3 col-lg-6">
        <div className="main-tiles border-5 border-0  card-hover card o-hidden">
          <div className="custome-1-bg b-r-4 card-body">
            <div className="media align-items-center static-top-widget">
              <div className="media-body p-0">
                <span className="m-0">TỔNG DOANH THU</span>
                <h4 className="mb-0 counter">
                  {formatCurrency(chartCardData?.totalRevenue ?? 0).replace('VND', '').trim()}
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
                  {formatCurrency(chartCardData?.totalProfit ?? 0).replace('VND', '').trim()}
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
                  {chartCardData?.quantityProduct ?? 0}
                  <Link
                    to={'/admin/add-new-product'}
                    className="badge badge-light-secondary grow"
                    style={{ display: 'block' }}
                  >
                    ADD NEW
                  </Link>
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
                  {chartCardData?.quantityBillNeedToProcess ?? 0}

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
