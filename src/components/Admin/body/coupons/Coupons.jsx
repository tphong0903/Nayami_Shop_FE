import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchCoupons();
  }, []);
  const deleteCoupon = async (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xoá?',
      text: 'Sau khi xoá sẽ không thể khôi phục!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Xoá',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/coupons/${id}`);
          fetchCoupons();

          Swal.fire('Đã xoá!', 'Danh mục đã được xoá thành công.', 'success');
        } catch (err) {
          Swal.fire('Lỗi!', 'Không thể xoá danh mục.', 'error');
          console.error('Lỗi khi xoá danh mục:', err);
        }
      }
    });
  };
  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/coupons');
      setCoupons(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch coupons. Please try again later.');
      setLoading(false);
      console.error('Error fetching coupon data:', err);
    }
  };

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedCoupons(coupons.map(coupon => coupon.id));
    } else {
      setSelectedCoupons([]);
    }
  };

  const handleSelectCoupon = (e, couponId) => {
    if (e.target.checked) {
      setSelectedCoupons([...selectedCoupons, couponId]);
    } else {
      setSelectedCoupons(selectedCoupons.filter(id => id !== couponId));
    }
  };

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>Coupon List</h5>
                  <div className="right-options">
                    <ul>
                      <li>
                        <Link to="/admin/add-new-coupon" className="btn btn-solid">Add Coupon</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {loading ? (
                  <div className="text-center p-4">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <div className="table-responsive">
                    <table className="table all-package coupon-list-table table-hover theme-table" id="table_id">
                      <thead>
                        <tr>
                          <th>
                            <span className="form-check user-checkbox m-0 p-0">
                              <input
                                className="checkbox_animated"
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                              />
                            </span>
                          </th>
                          <th>Title</th>
                          <th>Code</th>
                          <th>Discount</th>
                          <th>Status</th>
                          <th>Option</th>
                        </tr>
                      </thead>

                      <tbody>
                        {coupons.length > 0 ? (
                          coupons.map((coupon) => (
                            <tr key={coupon.id}>
                              <td>
                                <span className="form-check user-checkbox m-0 p-0">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    checked={selectedCoupons.includes(coupon.id)}
                                    onChange={(e) => handleSelectCoupon(e, coupon.id)}
                                  />
                                </span>
                              </td>
                              <td>{coupon.content}</td>
                              <td>{coupon.id}</td>
                              <td className="theme-color">
                                {coupon.value <= 100
                                  ? `${coupon.value}%`
                                  : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                    .format(coupon.value)
                                    .replace('VND', '')
                                    .trim()}
                              </td>

                              <td className="menu-status">
                                <span className={coupon.active ? 'success' : 'danger'}>
                                  {coupon.active ? 'Active' : 'Unactive'}
                                </span>
                              </td>


                              <td>
                                <ul>
                                  <li>
                                    <Link to={`/admin/update-coupon/${coupon.id}`}>
                                      <i className="ri-pencil-line"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <a href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        deleteCoupon(coupon.id);
                                      }}
                                      data-bs-toggle="modal" data-bs-target="#exampleModalToggle" className="text-danger">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </li>

                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" className="text-center">No coupons found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )};

export default CouponList;