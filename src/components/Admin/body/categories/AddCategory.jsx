import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchCategoryData();
    }
  }, [id, isEditMode]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/categories/${id}`);
      const category = response.data;

      setFormData({
        name: category.categoryName || '',
      });

      setLoading(false);
    } catch (err) {
      setError('Failed to load category data');
      setLoading(false);
      console.error('Error loading category:', err);
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
      const payload = { categoryName: formData.name };

      if (isEditMode) {
        await axios.put(`/api/categories/${id}`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        await axios.post('/api/categories', payload, {
          headers: { 'Content-Type': 'application/json' },
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
                        {isEditMode ? 'Edit Category' : 'Category Information'}
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
                          Category Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Category Name"
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
                                ? 'Update Category'
                                : 'Add Category'}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate('/admin/categories')}
                          >
                            Cancel
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
