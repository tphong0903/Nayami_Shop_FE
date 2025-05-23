/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeliveryAddressSection = ({
  addressList = [],
  initialAddress,
  onAddAddress,
  onUpdateAddress,
  onDeleteAddress,
  onAddressSelect
}) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    recipientName: '',
    addressName: '',
    province: '',
    district: '',
    ward: '',
    phone: ''
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [addresses, setAddresses] = useState(addressList);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [initialSelectionDone, setInitialSelectionDone] = useState(false);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (newAddress.phone) {
      setIsValid(/^(0|\+84)[3-9][0-9]{8}$/.test(newAddress.phone));
    } else {
      setIsValid(null);
    }
  }, [newAddress.phone]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/quangdang1412/ProjectIT_2024/refs/heads/main/src/main/resources/static/province/province.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data.Sheet1);
      })
      .catch(error => console.error('Lỗi tải danh sách tỉnh:', error));
  }, []);

  useEffect(() => {
    setAddresses(addressList);

    if (addressList && addressList.length > 0 && !initialSelectionDone) {
      if (onAddressSelect) {
        onAddressSelect(addressList[0]);
        setInitialSelectionDone(true);
      }
    }
  }, [addressList, onAddressSelect, initialSelectionDone]);

  useEffect(() => {
    if (initialAddress && provinces.length > 0) {
      setNewAddress(initialAddress);

      const selectedProvincesList = provinces.filter(p => p.provinceName === initialAddress.province);
      if (selectedProvincesList.length > 0) {
        setDistricts(selectedProvincesList);

        const selectedDistrictsList = selectedProvincesList.filter(d => d.districtName === initialAddress.district);
        if (selectedDistrictsList.length > 0) {
          setWards(selectedDistrictsList);
        }
      }
    }
  }, [initialAddress, provinces]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value
    });
    if (name === 'phone') {
      if (value.trim() === '') {
        setIsValid(false);
      } else {
        setIsValid(/^(0|\+84)[3-9][0-9]{8}$/.test(value));
      }
    }

  };


  const handleAddressSelect = (index) => {
    setSelectedAddressIndex(index);

    if (onAddressSelect && addresses[index]) {
      onAddressSelect(addresses[index]);
    }
  };

  const handleProvinceChange = (e) => {
    const provinceName = e.target.value;
    const selectedProvince = provinces.filter(d => d.provinceName === provinceName);
    setNewAddress({ ...newAddress, province: provinceName, district: '', ward: '' });
    setDistricts(selectedProvince);
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    const selectedDistrict = districts.filter(w => w.districtName === districtName);
    setNewAddress({ ...newAddress, district: districtName, ward: '' });
    setWards(selectedDistrict);
  };

  const handleWardChange = (e) => {
    setNewAddress({ ...newAddress, ward: e.target.value });
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

        if (onUpdateAddress) {
          onUpdateAddress(updatedAddress);
        }

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

        if (onAddAddress) {
          onAddAddress(newAddressData);
        }

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

          if (selectedAddressIndex >= updatedAddresses.length) {
            setSelectedAddressIndex(updatedAddresses.length > 0 ? 0 : -1);
            if (updatedAddresses.length > 0 && onAddressSelect) {
              onAddressSelect(updatedAddresses[0]);
            }
          }

          if (onDeleteAddress) {
            onDeleteAddress(addressId);
          }

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

  return (
    <li>
      <div className="checkout-icon">
        <lord-icon
          src="https://cdn.lordicon.com/ggihhudh.json"
          trigger="loop-on-hover"
          colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
          className="lord-icon"
        ></lord-icon>
      </div>

      <div className="checkout-box">
        <div className="checkout-title">
          <h4>Địa chỉ giao hàng</h4>
        </div>

        <div className="checkout-detail">
          <div className="row g-4">
            {showAddressForm && (
              <div className="col-12 mb-4">
                <div className="delivery-address-box">
                  <div className="p-3">
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
                          <label className="form-label text-title">Địa chỉ đường/số nhà</label>
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
                          <label className="form-label text-title">Tỉnh/Thành phố</label>
                          <select
                            className="form-control"
                            name="province"
                            value={newAddress.province}
                            onChange={handleProvinceChange}
                            required
                          >
                            <option value="">Chọn tỉnh/thành phố</option>
                            {[...new Map(provinces.map(p => [p.provinceName, p])).values()].map((province) => (
                              <option key={province.provinceName} value={province.provinceName}>
                                {province.provinceName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label text-title">Quận/Huyện</label>
                          <select
                            className="form-control"
                            name="district"
                            value={newAddress.district}
                            onChange={handleDistrictChange}
                            required
                            disabled={!districts.length}
                          >
                            <option value="">Chọn quận/huyện</option>
                            {[...new Map(districts.map(d => [d.districtName, d])).values()].map((district) => (
                              <option key={district.districtName} value={district.districtName}>
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
                            {[...new Map(wards.map(w => [w.communeName, w])).values()].map((ward) => (
                              <option key={ward.communeName} value={ward.communeName}>
                                {ward.communeName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label text-title">Số điện thoại</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={newAddress.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Số điện thoại liên hệ"
                          />
                          {isValid === false && <p style={{ color: 'red' }}>Số điện thoại không hợp lệ!</p>}
                        </div>
                        <div className="col-12 mt-4">
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => setShowAddressForm(false)}
                            >
                              Hủy
                            </button>
                            <button type="submit" className="btn theme-bg-color text-white" disabled={isValid === false}>
                              {newAddress.id ? 'Cập nhật địa chỉ' : 'Lưu địa chỉ'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {addresses && addresses.length > 0 ? (
              addresses.map((address, index) => (
                <div key={address.id || index} className="col-xxl-6 col-lg-12 col-md-6">
                  <div className={`delivery-address-box ${selectedAddressIndex === index ? 'selected' : ''}`}>
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="address"
                            id={`address-${index}`}
                            checked={selectedAddressIndex === index}
                            onChange={() => handleAddressSelect(index)}
                          />
                        </div>
                      </div>

                      <ul className="delivery-address-detail">
                        <li>
                          <h4 className="fw-500">{address.recipientName}</h4>
                        </li>
                        <li>
                          <h6 className="text-content mb-0">
                            <span className="text-title">Số điện thoại: </span>
                            {address.phone}
                          </h6>
                        </li>
                        <li>
                          <p className="text-content" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            <span className="text-title">
                              Địa chỉ:
                            </span>
                            {address.addressName}, {address.ward}, {address.district}, {address.province}
                          </p>
                        </li>
                      </ul>
                      <div className="address-buttons">
                        <button
                          className="edit-button btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEditAddress(address)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="delete-button btn btn-sm btn-outline-danger"
                          onClick={() => handleDeleteAddress(address.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              !showAddressForm && (
                <div className="col-xxl-6 col-lg-12 col-md-6">
                  <div className="delivery-address-box add-address">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <button
                        className="btn btn-animation w-100 justify-content-center"
                        onClick={() => setShowAddressForm(true)}
                      >
                        <i className="fa fa-plus me-2"></i> Thêm địa chỉ mới
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}

            {addresses && addresses.length > 0 && !showAddressForm && (
              <div className="col-12 mt-lg-3">
                <div className="delivery-address-box add-address p-3">
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn theme-bg-color text-white"
                      onClick={() => setShowAddressForm(true)}
                    >
                      <i className="fa fa-plus me-2"></i> Thêm địa chỉ mới
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default DeliveryAddressSection;