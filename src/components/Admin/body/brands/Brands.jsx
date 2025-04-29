/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import $ from 'jquery'
import 'datatables.net-bs5'
import '/src/assets/Admin/css/customPagination.css';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const tableRef = useRef(null)

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (brands.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [brands])
  const fetchBrands = async () => {
    try {
      const response = await axios.get('/api/brands');
      setBrands(response.data.data);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  };

  const changeStatusBrand = async (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn cập nhật?',
      text: 'Bạn muốn chuyển đổi trạng thái của thương hiệu này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/brands/${id}`);
          fetchBrands();

          Swal.fire('Đã chuyển trạng thái !', 'Đã chuyển trạng thái thành công.', 'success');
        } catch (err) {
          Swal.fire('Lỗi!', 'Không thể xoá danh mục.', 'error');
          console.error('Lỗi khi xoá danh mục:', err);
        }
      }
    });
  };

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>Thương hiệu</h5>
                  <div className="d-inline-flex">
                    <Link to="/admin/add-new-Brand" className="align-items-center btn btn-theme d-flex">
                      <i className="ri-add-line me-2"></i> Thêm thương hiệu
                    </Link>
                  </div>
                </div>

                <div className="table-responsive category-table">
                  <table
                    ref={tableRef}
                    className="table all-package theme-table table-product dataTable no-footer" id="table_id">
                    <thead>
                      <tr>
                        <th>Thương hiệu<SwapVertIcon /></th>
                        <th>Trạng thái<SwapVertIcon /></th>
                        <th>Tuỳ chọn<SwapVertIcon /></th>
                      </tr>
                    </thead>

                    <tbody>
                      {brands.length > 0 ? (
                        brands.map((Brand) => (
                          <tr key={Brand.id}>
                            <td>{Brand.name}</td>
                            <td className={Brand.active === false ? 'status-danger' : 'status-close'}>
                              <span>{Brand.active === false ? 'Inactive' : 'Active'}</span>
                            </td>
                            <td>
                              <ul>
                                <li>
                                  <Link to={`/admin/update-new-brand/${Brand.id}`}>
                                    <EditIcon />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="#"
                                    className="text-danger"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      changeStatusBrand(Brand.id);
                                    }}
                                  >
                                    {Brand.active === false ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}

                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2">Không có thương hiệu nào</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandList;
