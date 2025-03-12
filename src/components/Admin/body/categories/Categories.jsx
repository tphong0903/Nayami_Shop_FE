/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/categories');
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setLoading(false);
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);


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
                  <h5>All Categories</h5>
                  <div className="d-inline-flex">
                    <Link to="/add-new-category" className="align-items-center btn btn-theme d-flex">
                      <i className="ri-add-line me-2"></i> Add New
                    </Link>
                  </div>
                </div>

                <div className="table-responsive category-table">
                  <table className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Option</th>
                      </tr>
                    </thead>

                    <tbody>
                      {categories.length > 0 ? (
                        categories.map((category) => (
                          <tr key={category.id}>
                            <td>{category.categoryName}</td>
                            <td>
                              <ul>
                                <li>
                                  <a href="order-detail.html">
                                    <i className="ri-eye-line" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i className="ri-pencil-line" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalToggle"
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

export default CategoryList;