import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BrandForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    name: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  useEffect(() => {
    if (isEditMode) {
      fetchBrandData();
    } else {
      setFormData({ name: '' });
    }
  }, [isEditMode, id]);
  const fetchBrandData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/brands/${id}`);
      const brand = response.data.data;

      setFormData({
        name: brand.name || '',
      });

      setLoading(false);
    } catch (err) {
      setError('Failed to load brand data');
      setLoading(false);
      console.error('Error loading brand:', err);
    }
  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { name: formData.name };

      if (isEditMode) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/brands/${id}`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/brands`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      navigate('/admin/brands');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save brand');
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
                        {isEditMode ? 'Chỉnh Sửa Thương Hiệu' : 'Thông Tin Thương Hiệu'}
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
                      {/* Brand Name */}
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Tên thương hiệu
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Tên"
                            value={formData.name}
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
                            onClick={() => navigate('/admin/brands')}
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

export default BrandForm;
