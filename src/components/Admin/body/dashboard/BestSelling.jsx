import MyDatePicker from './MyDatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function BestSelling() {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  const [dateRange, setDateRange] = useState([startOfMonth, endOfMonth]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const originalSeries = [
    { name: 'Doanh thu', data: [30, 50, 35, 60, 70, 90, 100] },
  ];
  useEffect(() => {
    setFilteredSeries(originalSeries);
  }, [dateRange]);
  return (
    <div className="col-xl-6 col-md-12">
      <div className="card o-hidden card-hover">
        <div className="card-header border-0 pb-1">
          <div className="card-header-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Sản phẩm bán chạy</h4>
            <MyDatePicker dateRange={dateRange} setDateRange={setDateRange} />
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <div className="table-responsive">
              <table
                className="best-selling-table w-image
                                      w-image
                                      w-image table border-0"
              >
                <tbody>
                  <tr>
                    <td>
                      <div className="best-product-box">
                        <div className="product-image">
                          <img
                            src="/src/assets/Admin/images/product/1.png"
                            className="img-fluid"
                            alt="Product"
                          />
                        </div>
                        <div className="product-name">
                          <h5>Aata Buscuit</h5>
                          <h6>26-08-2022</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Price</h6>
                        <h5>$29.00</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Orders</h6>
                        <h5>62</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Stock</h6>
                        <h5>510</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Amount</h6>
                        <h5>$1,798</h5>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="best-product-box">
                        <div className="product-image">
                          <img
                            src="/src/assets/Admin/images/product/2.png"
                            className="img-fluid"
                            alt="Product"
                          />
                        </div>
                        <div className="product-name">
                          <h5>Aata Buscuit</h5>
                          <h6>26-08-2022</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Price</h6>
                        <h5>$29.00</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Orders</h6>
                        <h5>62</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Stock</h6>
                        <h5>510</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Amount</h6>
                        <h5>$1,798</h5>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="best-product-box">
                        <div className="product-image">
                          <img
                            src="/src/assets/Admin/images/product/3.png"
                            className="img-fluid"
                            alt="Product"
                          />
                        </div>
                        <div className="product-name">
                          <h5>Aata Buscuit</h5>
                          <h6>26-08-2022</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Price</h6>
                        <h5>$29.00</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Orders</h6>
                        <h5>62</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Stock</h6>
                        <h5>510</h5>
                      </div>
                    </td>
                    <td>
                      <div className="product-detail-box">
                        <h6>Amount</h6>
                        <h5>$1,798</h5>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
