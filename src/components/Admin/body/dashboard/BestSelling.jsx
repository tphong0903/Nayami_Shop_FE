import MyDatePicker from './MyDatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import Swal from 'sweetalert2';
import { formatCurrency } from '~/utils/formatCurrency';

export default function BestSelling() {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  const [dateRange, setDateRange] = useState([startOfMonth, endOfMonth]);
  const [listProduct, setListProduct] = useState([])
  const getBestSellingByTime = (startDate, endDate) => {
    const dashboardDateDTO = {
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
    };

    axios
      .post('/api/dashboard/productBestSelling', dashboardDateDTO)
      .then((response) => {
        setListProduct(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể lấy dữ liệu.', 'error');
      });
  };
  useEffect(() => {
    getBestSellingByTime(dateRange[0], dateRange[1]);
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
              ><thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Số lượng đã bán</th>
                  </tr>
                </thead>
                <tbody>
                  {listProduct.map(p => (
                    <tr key={p.id}>
                      <td>
                        <div className="best-product-box">
                          <div className="product-image">
                            <img
                              src={p.url}
                              className="img-fluid"
                              alt="Product"
                            />
                          </div>
                          <div className="product-name">
                            <h5>{p.name}</h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="product-detail-box">
                          <h5>{formatCurrency(p.unitPrice)}</h5>
                        </div>
                      </td>
                      <td>
                        <div className="product-detail-box">
                          <h5>{p.quantity}</h5>
                        </div>
                      </td>
                      <td>
                        <div className="product-detail-box">
                          <h5>{p.quantitySold}</h5>
                        </div>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
