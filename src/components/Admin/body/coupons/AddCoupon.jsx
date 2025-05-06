import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

const CouponForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    content: '',
    discount: '',
    type: 'PERCENT',
    startDate: '',
    endDate: '',
    active: true,
    selectedCustomer: null,
    constraintMoney: ''
  });

  const [error, setError] = useState(null);
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/get-all-users`);
        const userOptions = response.data.map((user) => ({
          value: user.userId.toString(),
          label: `${user.email} (${user.phoneNumber})`,
        }));
        setUsers(userOptions);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (isEditMode && users.length > 0) {
      fetchCouponData();
    } else {
      setFormData({
        content: '',
        discount: '',
        type: 'PERCENT',
        startDate: '',
        endDate: '',
        active: true,
        selectedCustomer: null,
        constraintMoney: ''
      });
    }
  }, [isEditMode, id, users]);

  const fetchCouponData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/coupons/${id}`);
      const coupon = response.data.data;

      if (users.length > 0) {
        const selectedCustomerData = users.find(
          user => String(user.value) === String(coupon.customerId)
        ) || null;

        const updatedFormData = {
          content: coupon.content || '',
          discount: coupon.value || '',
          type: coupon.type || 'PERCENT',
          startDate: coupon.startDate ? coupon.startDate.split('T')[0] : '',
          endDate: coupon.endDate ? coupon.endDate.split('T')[0] : '',
          active: coupon.active ?? true,
          selectedCustomer: selectedCustomerData,
          constraintMoney: coupon.constraintMoney || ''
        };

        setFormData(updatedFormData);

        console.log('Selected customer data:', selectedCustomerData);
      }

    } catch (err) {
      setError('Failed to load coupon data');
      console.error('Error loading coupon:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      let newValue = type === 'checkbox' ? checked : value;

      if (name === 'discount' && prevData.type === 'MONEY') {
        newValue = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' })
          .format(value.replace(/\D/g, '') || 0)
          .replace('VND', '')
          .trim();
      }

      return {
        ...prevData,
        [name]: newValue,
        ...(name === 'type' && { discount: '' })
      };
    });
  };

  const handleCustomerSelection = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    setFormData(prevData => ({
      ...prevData,
      selectedCustomer: selectedOption
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const payload = {
        content: formData.content,
        value: String(formData.discount || '').replace(/\D/g, '') || '0',
        constraintMoney: formData.constraintMoney,
        type: formData.type,
        startDate: formData.startDate,
        endDate: formData.endDate,
        active: formData.active,
        customerId: formData.selectedCustomer?.value || null
      };

      console.log('Sending payload:', payload);

      if (isEditMode) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/coupons/${id}`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/coupons`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      navigate('/admin/coupons');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save coupon');
      console.error('Error submitting form:', err);
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
                        {isEditMode ? 'Chỉnh Sửa Mã Giảm Giá' : 'Thông tin mã giảm giá'}
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
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Tên
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Tên mã khuyến mãi"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Discount Type */}
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Loại khuyến mãi
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="PERCENT">Percentage (%)</option>
                            <option value="MONEY">Fixed Amount (VND)</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          {formData.type === 'PERCENT' ? 'Giảm giá (%)' : 'Số tiền giảm'}
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder={formData.type === 'PERCENT' ? 'Enter discount percentage' : 'Enter discount amount'}
                              name="discount"
                              min="0"
                              max={formData.type === 'PERCENT' ? '100' : ''}
                              value={formData.discount}
                              onChange={handleInputChange}
                              required
                            />
                            {formData.type === 'MONEY' && (
                              <span className="input-group-text">VND</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Số tiền tối thiếu để giảm (VND)
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter minimum order value"
                              name="constraintMoney"
                              value={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' }).format(formData.constraintMoney || 0).replace('VND', '').trim()}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                setFormData({ ...formData, constraintMoney: value ? Number(value) : 0 });
                              }}
                              required
                            />
                            <span className="input-group-text">VND</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Khách hàng
                        </label>
                        <div className="col-sm-9">
                          <Select
                            options={users}
                            value={formData.selectedCustomer || null}
                            onChange={handleCustomerSelection}
                            placeholder="Select a customer"
                            styles={{
                              control: (base) => ({
                                ...base,
                                backgroundColor: '#f9f9f6',
                              }),
                              input: (base) => ({
                                ...base,
                                display: 'flex',
                              }),
                              singleValue: (base) => ({
                                ...base,
                                color: '#000',
                                zIndex: 1,
                              }),

                            }}
                          />

                        </div>
                      </div>

                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Ngày bắt đầu
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Expiry Date */}
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Ngày kết thúc
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Trạng thái
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="active"
                              checked={formData.active}
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label">
                              {formData.active ? 'Active' : 'Inactive'}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-4 mt-5">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9 d-flex">
                          <button
                            type="submit"
                            className="btn btn-primary me-3"
                          >
                            {isEditMode
                              ? 'Cập nhật Coupon'
                              : 'Thêm Coupon'}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate('/admin/coupons')}
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

export default CouponForm;