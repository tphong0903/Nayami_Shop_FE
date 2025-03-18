import { useEffect, useState } from 'react';

const DeliveryAddressSection = ({ addressList = [], initialAddress, onAddAddress }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    street: '',
    province: '',
    district: '',
    ward: '',
    phone: ''
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/quangdang1412/ProjectIT_2024/refs/heads/main/src/main/resources/static/province/province.json')
      .then(response => response.json())
      .then(data => {

        setProvinces(data.Sheet1);
      })
      .catch(error => console.error('Lỗi tải danh sách tỉnh:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value
    });
  };
  useEffect(() => {
    if (initialAddress) {
      setNewAddress(initialAddress);

      const selectedProvince = provinces.find(p => p.name === initialAddress.province);
      if (selectedProvince) {
        setDistricts(selectedProvince.districts);
        const selectedDistrict = selectedProvince.districts.find(d => d.name === initialAddress.district);
        if (selectedDistrict) {
          setWards(selectedDistrict.wards);
        }
      }
    }
  }, [initialAddress, provinces]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Address to save:', newAddress);

    // Call parent component's handler if provided
    if (onAddAddress) {
      onAddAddress(newAddress);
    }

    // Reset form and hide it
    setNewAddress({
      fullName: '',
      street: '',
      province: '',
      district: '',
      ward: '',
      phone: ''
    });
    setShowAddressForm(false);
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setNewAddress({ ...newAddress, province: provinceId, district: '', ward: '' });

    const selectedDistricts = provinces.filter(d => d.provinceId === provinceId);

    setDistricts(selectedDistricts);
    setWards([]);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setNewAddress({ ...newAddress, district: districtId, ward: '' });
    const selectedWards = provinces.filter(w => w.districtId == districtId);
    setWards(selectedWards);
  };


  const handleWardChange = (e) => {
    setNewAddress({ ...newAddress, ward: e.target.value });
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
                            name="fullName"
                            value={newAddress.fullName}
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
                            name="street"
                            value={newAddress.street}
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
                            {[...new Map(provinces.map(p => [p.provinceId, p])).values()].map((province) => (
                              <option key={province.provinceId} value={province.provinceId}>
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
                            {[...new Map(districts.map(d => [d.districtId, d])).values()].map((district) => (
                              <option key={district.districtId} value={district.districtId}>
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
                            <button type="submit" className="btn theme-bg-color text-white">
                              Lưu địa chỉ
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {addressList && addressList.length > 0 ? (
              addressList.map((address, index) => (
                <div key={index} className="col-xxl-6 col-lg-12 col-md-6">
                  <div className="delivery-address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id={`address-${index}`}
                          defaultChecked={index === 0}
                        />
                      </div>

                      <ul className="delivery-address-detail">
                        <li>
                          <h4 className="fw-500">{address.fullName}</h4>
                        </li>
                        <li>
                          <p className="text-content">
                            <span className="text-title">Địa chỉ: </span>
                            {address.street}, {address.ward}, {address.district}, {address.province}
                          </p>
                        </li>
                        <li>
                          <h6 className="text-content mb-0">
                            <span className="text-title">Số điện thoại: </span>
                            {address.phone}
                          </h6>
                        </li>
                      </ul>
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

            {addressList && addressList.length > 0 && !showAddressForm && (
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