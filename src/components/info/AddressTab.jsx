import { Edit, Plus, Trash2, X } from 'react-feather';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddressTab = () => {
  const addressList = [];
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addresses, setAddresses] = useState([addressList]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [newAddress, setNewAddress] = useState({
    recipientName: '',
    addressName: '',
    province: '',
    district: '',
    ward: '',
    phone: '',
  });
  const addressStyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    maxWidth: '100%',
    fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
    marginBottom: 0,
    lineHeight: 1.5,
  };
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    fetch('https://raw.githubusercontent.com/quangdang1412/ProjectIT_2024/refs/heads/main/src/main/resources/static/province/province.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data.Sheet1);
      })
      .catch(error => console.error('Lỗi tải danh sách tỉnh:', error));
    fetchAddressList();
  }, []);
  const fetchAddressList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/addresses`);
      setAddresses(response.data.data);
    } catch (error) {
      console.error('Lỗi khi tải danh sách địa chỉ:', error.response?.data?.message || error.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });

    if (name === 'phone') {
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      setIsValid(phoneRegex.test(value));
    }
  };

  const handleProvinceChange = (e) => {
    const provinceName = e.target.value;
    const selectedProvince = provinces.filter(
      (d) => d.provinceName === provinceName
    );
    setNewAddress({
      ...newAddress,
      province: provinceName,
      district: '',
      ward: '',
    });
    setDistricts(selectedProvince);
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    const selectedDistrict = districts.filter(
      (d) => d.districtName === districtName
    );
    setNewAddress({ ...newAddress, district: districtName, ward: '' });
    setWards(selectedDistrict);
  };

  const handleWardChange = (e) => {
    const wardName = e.target.value;
    setNewAddress({ ...newAddress, ward: wardName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (newAddress.id) {
        response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/addresses/${newAddress.id}`, newAddress, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const updatedAddress = response.data.data;

        setAddresses(addresses.map(address =>
          address.id === updatedAddress.id ? updatedAddress : address
        ));

        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Địa chỉ đã được cập nhật thành công!',
        });
      } else {
        response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/addresses`, newAddress, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const newAddressData = response.data.data;
        const updatedAddresses = [...addresses, newAddressData];
        setAddresses(updatedAddresses);


        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Địa chỉ đã được lưu thành công!',
        });
      }

      setNewAddress({
        recipientName: '',
        addressName: '',
        province: '',
        district: '',
        ward: '',
        phone: '',
      });
      setShowAddressForm(false);
    } catch (error) {
      console.error('Lỗi khi lưu địa chỉ:', error.response?.data?.message || error.message);

      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: error.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại!',
      });
    }
  };

  const handleEditAddress = (address) => {
    setNewAddress({
      id: address.id,
      recipientName: address.recipientName,
      addressName: address.addressName,
      province: address.province,
      district: address.district,
      ward: address.ward,
      phone: address.phone
    });

    if (provinces.length > 0) {
      const selectedProvinces = provinces.filter(p => p.provinceName === address.province);
      if (selectedProvinces.length > 0) {
        setDistricts(selectedProvinces);

        const selectedDistricts = selectedProvinces.filter(d => d.districtName === address.district);
        if (selectedDistricts.length > 0) {
          setWards(selectedDistricts);
        }
      }
    }

    setShowAddressForm(true);
  };
  const handleDeleteAddress = async (addressId) => {
    try {
      Swal.fire({
        title: 'Xác nhận xóa',
        text: 'Bạn có chắc muốn xóa địa chỉ này?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Hủy'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/addresses/${addressId}`);

          const updatedAddresses = addresses.filter(address => address.id !== addressId);
          setAddresses(updatedAddresses);
          Swal.fire(
            'Đã xóa!',
            'Địa chỉ đã được xóa thành công.',
            'success'
          );
        }
      });
    } catch (error) {
      console.error('Lỗi khi xóa địa chỉ:', error);
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Không thể xóa địa chỉ. Vui lòng thử lại sau!'
      });
    }
  };

  const AddressCard = ({ address }) => {
    return (
      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
        <div className="address-box">
          <div>
            <div className="table-responsive address-table">
              <table className="table" style={{ border: 'none' }}>
                <tbody>
                  <tr>
                    <td colSpan="2">{address.name}</td>
                  </tr>

                  <tr>
                    <td >Địa chỉ :</td>
                    <td>
                      <p style={addressStyle}>{address.addressName}, {address.ward}, {address.district}, {address.province}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>Họ và tên :</td>
                    <td>{address.recipientName}</td>
                  </tr>

                  <tr>
                    <td>Số điện thoại : </td>
                    <td>{address.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="button-group">
            <button
              className="btn btn-sm add-button w-100"
              data-bs-toggle="modal"
              data-bs-target="#editProfile"
              onClick={() => handleEditAddress(address)}
            >
              <Edit size={16} className="me-2" />
              Chỉnh sửa
            </button>
            <button
              className="btn btn-sm add-button w-100"
              data-bs-toggle="modal"
              data-bs-target="#removeProfile"
              onClick={() => handleDeleteAddress(address.id)}
            >
              <Trash2 size={16} className="me-2" />
              Xoá
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="tab-pane fade show"
      id="pills-address"
      role="tabpanel"
      aria-labelledby="pills-address-tab"
    >
      <div className="dashboard-address">
        <div className="title title-flex">
          <div>
            <h2>Danh sách địa chỉ của tôi</h2>
            <span className="title-leaf">
              <svg className="icon-width bg-gray">
                <use xlinkHref="/assets/svg/leaf.svg#leaf"></use>
              </svg>
            </span>
          </div>

          <button
            className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
            onClick={() => setShowAddressForm(true)}
          >
            <Plus size={16} className="me-2" /> Thêm địa chỉ mới
          </button>
        </div>

        {showAddressForm && (
          <div className="message-box-wrap">
            <div className="message-box">
              <div className="message-header bg-theme-color">
                <h5 className="message-title text-white mb-0">
                  {newAddress.id ? 'Cập nhật địa chỉ' : 'Thêm địa chỉ mới'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddressForm(false)}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="message-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label text-title">Họ và tên</label>
                      <input
                        type="text"
                        className="form-control"
                        name="recipientName"
                        value={newAddress.recipientName}
                        onChange={handleInputChange}
                        required
                        placeholder="Họ và tên người nhận"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-title">
                        Địa chỉ đường/số nhà
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="addressName"
                        value={newAddress.addressName}
                        onChange={handleInputChange}
                        required
                        placeholder="Số nhà, tên đường..."
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-title">
                        Tỉnh/Thành phố
                      </label>
                      <select
                        className="form-control"
                        name="province"
                        value={newAddress.province}
                        onChange={handleProvinceChange}
                        required
                      >
                        <option value="">Chọn tỉnh/thành phố</option>
                        {[
                          ...new Map(
                            provinces.map((p) => [p.provinceName, p])
                          ).values(),
                        ].map((province) => (
                          <option
                            key={province.provinceName}
                            value={province.provinceName}
                          >
                            {province.provinceName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-title">
                        Quận/Huyện
                      </label>
                      <select
                        className="form-control"
                        name="district"
                        value={newAddress.district}
                        onChange={handleDistrictChange}
                        required
                        disabled={!districts.length}
                      >
                        <option value="">Chọn quận/huyện</option>
                        {[
                          ...new Map(
                            districts.map((d) => [d.districtName, d])
                          ).values(),
                        ].map((district) => (
                          <option
                            key={district.districtName}
                            value={district.districtName}
                          >
                            {district.districtName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-title">Phường/Xã</label>
                      <select
                        className="form-control"
                        name="ward"
                        value={newAddress.ward}
                        onChange={handleWardChange}
                        required
                        disabled={!wards.length}
                      >
                        <option value="">Chọn phường/xã</option>
                        {[
                          ...new Map(
                            wards.map((w) => [w.communeName, w])
                          ).values(),
                        ].map((ward) => (
                          <option
                            key={ward.communeName}
                            value={ward.communeName}
                          >
                            {ward.communeName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-title">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={newAddress.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Số điện thoại liên hệ"
                      />
                      {isValid === false && (
                        <p style={{ color: 'red' }}>
                          Số điện thoại không hợp lệ!
                        </p>
                      )}
                    </div>
                    <div className="col-12 mt-4">
                      <div className="d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-2"
                          onClick={() => setShowAddressForm(false)}
                        >
                          Hủy
                        </button>
                        <button
                          type="submit"
                          className="btn theme-bg-color text-white"
                          disabled={isValid === false}
                        >
                          {newAddress.id ? 'Cập nhật' : 'Lưu địa chỉ'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="row g-sm-5 g-3">
          {addresses.map((address, index) => (
            <AddressCard key={index} address={address} />
          ))}
        </div>
      </div>

      <style>{`
        .message-box-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }
        .message-box {
          width: 90%;
          max-width: 700px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          animation: fadeIn 0.3s ease-out;
        }
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
        }
        .bg-theme-color {
          background-color: var(--theme-color, #0da487);
        }
        .message-title {
          font-size: 1.1rem;
        }
        .message-body {
          max-height: 80vh;
          overflow-y: auto;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .btn-close {
          color: white;
          opacity: 0.8;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: none;
          background: transparent;
        }
        .btn-close:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default AddressTab;
