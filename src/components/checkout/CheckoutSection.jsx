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
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc0MjM2ODU0MywiZXhwIjoxNzQyMzY5OTgzfQ.8Cb5n38QnBHN5-8_k7x83uyHDY32X3xLd8LOIw9B5kY';
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
      setDiscount(reponseDetail.discount);

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

  return (
    <section className="checkout-section-2 section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-sm-4 g-3">
          <div className="col-lg-8">
            <div className="left-sidebar-checkout">
              <div className="checkout-detail-box">
                <ul>
                  <DeliveryAddressSection addressList={address} />

                  <PaymentOptionsSection />
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-side-summery-box">
              <OrderSummary carts={carts} discount={discount} />

              <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">
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