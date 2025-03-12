/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/brands');
      setBrands(response.data);
    } catch (err) {
      setError('Failed to fetch brands');
      console.error('Error fetching brands:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteBrand = async (id) => {
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
          await axios.delete(`/api/brands/${id}`);
          setBrands((prevBrands) => prevBrands.filter(Brand => Brand.id !== id));

          Swal.fire('Đã xoá!', 'Danh mục đã được xoá thành công.', 'success');
        } catch (err) {
          Swal.fire('Lỗi!', 'Không thể xoá danh mục.', 'error');
          console.error('Lỗi khi xoá danh mục:', err);
        }
      }
    });
  };

  if (loading) {
    return <div className="loader-wrapper">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>All Brands</h5>
                  <div className="d-inline-flex">
                    <Link to="/admin/add-new-Brand" className="align-items-center btn btn-theme d-flex">
                      <i className="ri-add-line me-2"></i> Add New
                    </Link>
                  </div>
                </div>

                <div className="table-responsive Brand-table">
                  <table className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>Brand Name</th>
                        <th>Option</th>
                      </tr>
                    </thead>

                    <tbody>
                      {brands.length > 0 ? (
                        brands.map((Brand) => (
                          <tr key={Brand.id}>
                            <td>{Brand.name}</td>
                            <td>
                              <ul>
                                <li>
                                  <Link to={`/admin/add-new-brand/${Brand.id}`}>
                                    <i className="ri-pencil-line" />
                                  </Link>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      deleteBrand(Brand.id);
                                    }}
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </a>

                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2">Không có danh mục nào</td>
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
