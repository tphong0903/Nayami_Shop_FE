import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const CategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  // Form state
  const [formData, setFormData] = useState({
    categoryName: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchCategoryData();
    }
    else {
      setFormData({ name: '' });
    }
  }, [id, isEditMode]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/categories/${id}`);
      const category = response.data.data;

      setFormData({
        categoryName: category.categoryName || '',
      });

      setLoading(false);
    } catch (err) {
      setError('Failed to load category data');
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      categoryName: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { categoryName: formData.categoryName, active: 'true' };

      if (isEditMode) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/categories/${id}`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/categories`, payload, {
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => {
            if (res.data.status == 400) {
              Swal.fire({
                title: 'Insert fail',
                text: 'Category has existed',
                icon: 'error',
                confirmButtonText: 'OK',
                timer: 3000
              })
            }
          });
      }

      navigate('/admin/categories');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save category');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>
                        {isEditMode ? 'Chỉnh Sửa Danh Mục' : 'Thông Tin Danh Mục'}
                      </h5>
                    </div>

                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <form
                      className="theme-form theme-form-2 mega-form"
                      onSubmit={handleSubmit}
                    >
                      {/* Category Name */}
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Tên danh mục
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Tên"
                            value={formData.categoryName}
                            onChange={handleNameChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-4 mt-5">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9 d-flex">
                          <button
                            type="submit"
                            className="btn btn-primary me-3"
                            disabled={loading}
                          >
                            {loading
                              ? '..Saving.'
                              : isEditMode
                                ? 'Cập nhật'
                                : 'Thêm'}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate('/admin/categories')}
                          >
                            Hủy
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
