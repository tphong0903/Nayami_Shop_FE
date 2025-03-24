/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeliveryAddressSection from '../checkout/DeliveryAddressSection';
import PaymentOptionsSection from '~/components/checkout/PaymentOptionsSection';
import OrderSummary from '~/components/checkout/OrderSummary';
import Swal from 'sweetalert2';

const CheckoutSection = () => {
  const [checkoutData, setCheckoutData] = useState(null);
  const [address, setAddress] = useState(null);
  const [carts, setCarts]=useState(null);
  const [discount, setDiscount]=useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [shippingFee, setShippingFee] = useState(0);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  const handleAddressSelect = (address) => {
    console.log('Address selected in parent:', address);
    fetchShippingFee(address);
    setSelectedAddress(address);
  };
  const fetchShippingFee = async (address) => {
    const addressData={
      province: address.province,
      district: address.district,
      ward: address.ward,
      address: address.addressName,
    }
    try {
      const response = await axios.post('/api/ship/fee', addressData);
      setShippingFee( response.data.fee.fee);
      console.log('Phí vận chuyển:', shippingFee);
    } catch (error) {
      console.error('Lỗi khi lấy phí vận chuyển:', error);
      Swal.fire({
        title: 'Lỗi',
        text: error.response?.data?.message || 'Không thể lấy phí vận chuyển',
        icon: 'error'
      })};
  }
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc0MjgzNjk5MSwiZXhwIjoxNzQyODM4NDMxfQ.oGXki_oGv4STNDJ3PFVeyfbwvfw2SxqKEf8Lj-qcnFA';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedData = localStorage.getItem('checkoutData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCheckoutData(parsedData);
      fetchOrderDetails(parsedData);
    } else {
      Swal.fire({
        title: 'Lỗi',
        text: 'Không tìm thấy dữ liệu đơn hàng, vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.href = '/cart';
      });
    }
  }, []);

  const fetchOrderDetails = async (data) => {
    try {
      const response = await axios.post('/api/bills/checkout', data);
      const reponseDetail=response.data.data;
      setAddress(reponseDetail.listAddress);
      setCarts(reponseDetail.listCartItem);
      setDiscount(checkoutData.discount);

    } catch (error) {
      console.error('Lỗi khi lấy thông tin đơn hàng:', error);
      Swal.fire({
        title: 'Lỗi',
        text: 'Không thể lấy thông tin đơn hàng.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      Swal.fire({
        title: 'Thông báo',
        text: 'Vui lòng chọn địa chỉ giao hàng',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const orderData = {
        ...checkoutData,
        paymentMethod: paymentMethod,
        addressId: selectedAddress.id,
        shippingFee: shippingFee,
        discount: discount,
        couponId: checkoutData.couponId,
      };
      console.log('Dữ liệu đơn hàng:', orderData);
      const response = await axios.post('/api/bills', orderData);

      Swal.fire({
        title: 'Thành công',
        text: 'Đặt hàng thành công!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        localStorage.removeItem('checkoutData');
        console.log('Đơn hàng đã được đặt:', response.data.data);
        if (response.data.data.paymentUrl) {
          window.location.href = response.data.data.paymentUrl;
        }
        else {
          window.location.href = '/';
        }
      });
    } catch (error) {
      console.error('Lỗi khi đặt hàng:', error);
      Swal.fire({
        title: 'Lỗi',
        text: error.response?.data?.message || 'Không thể đặt hàng. Vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <section className="checkout-section-2 section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-sm-4 g-3">
          <div className="col-lg-8">
            <div className="left-sidebar-checkout">
              <div className="checkout-detail-box">
                <ul>
                  <DeliveryAddressSection addressList={address} onAddressSelect={handleAddressSelect} // Use onAddressSelect here
                  />

                  <PaymentOptionsSection onPaymentMethodChange={handlePaymentMethodChange} />
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-side-summery-box">
              <OrderSummary
                carts={carts}
                discount={discount}
                paymentMethod={paymentMethod}
                selectedAddress={selectedAddress}
                shippingFee={shippingFee}
              />

              <button
                className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold"
                onClick={handlePlaceOrder}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutSection;