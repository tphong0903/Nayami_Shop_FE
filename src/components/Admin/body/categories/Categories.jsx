/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const updateStatus = async (id, active) => {
    const popUpTitle = () => {
      return active ? 'Bạn có chắc chắn muốn ẩn?' : 'Bạn có chắc chắn muốn hiện?'
    }

    const acceptButton = () => {
      return active ? 'Ẩn' : 'Hiện'
    }

    const category = categories.find(item => item.id == id)
    category.active = !category.active


    Swal.fire({
      title: popUpTitle(),
      // text: 'Sau khi xoá sẽ không thể khôi phục!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: acceptButton(),
      cancelButtonText: 'Hủy'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`/api/categories/${id}`, category);
          fetchCategories();
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
                  <h5>Danh mục</h5>
                  <div className="d-inline-flex">
                    <Link to="/admin/add-new-category" className="align-items-center btn btn-theme d-flex">
                      <i className="ri-add-line me-2"></i> Thêm mới
                    </Link>
                  </div>
                </div>

                <div className="table-responsive category-table">
                  <table className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>Tên danh mục</th>
                        <th>Trạng thái</th>
                        <th>Tùy chỉnh</th>
                      </tr>
                    </thead>

                    <tbody>
                      {categories.length != 0 ? (
                        categories.map((category) => (
                          <tr key={category.id}>
                            <td>{category.categoryName}</td>
                            <td className={category.active === false ? 'status-danger' : 'status-close'}>
                              <span>{category.active === false ? 'Inactive' : 'Active'}</span>
                            </td>
                            <td>
                              <ul>
                                <li>
                                  <Link to={`/admin/update-new-category/${category.id}`}>
                                    <EditIcon />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="text-danger"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      updateStatus(category.id, category.active);
                                    }}
                                  >
                                    {category.active === false ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                  </Link>

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

export default CategoryList;
