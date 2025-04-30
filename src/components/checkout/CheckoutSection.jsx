/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeliveryAddressSection from '../checkout/DeliveryAddressSection';
import PaymentOptionsSection from '~/components/checkout/PaymentOptionsSection';
import OrderSummary from '~/components/checkout/OrderSummary';
import Swal from 'sweetalert2';
import { useNavigate, useSearchParams } from 'react-router-dom';


const CheckoutSection = () => {
  const navigate = useNavigate();

  const [checkoutData, setCheckoutData] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [carts, setCarts] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [shippingFee, setShippingFee] = useState(0);
  const [searchParams] = useSearchParams();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleAddressSelect = (address) => {
    console.log('Address selected in parent:', address);
    fetchShippingFee(address);
    setSelectedAddress(address);
  };

  const handleAddAddress = (newAddress) => {
    setAddressList(prevAddresses => [...prevAddresses, newAddress]);
  };

  const handleUpdateAddress = (updatedAddress) => {
    setAddressList(prevAddresses =>
      prevAddresses.map(address =>
        address.id === updatedAddress.id ? updatedAddress : address
      )
    );

    if (selectedAddress && selectedAddress.id === updatedAddress.id) {
      setSelectedAddress(updatedAddress);
      fetchShippingFee(updatedAddress);
    }
  };

  const handleDeleteAddress = (addressId) => {
    setAddressList(prevAddresses =>
      prevAddresses.filter(address => address.id !== addressId)
    );

    if (selectedAddress && selectedAddress.id === addressId) {
      setSelectedAddress(null);
      setShippingFee(0);
    }
  };

  const fetchStatusPayment = () => {
    const status = searchParams.get('status');
    const cancel = searchParams.get('cancel');
    const orderCode = searchParams.get('orderCode');

    if (status && orderCode) {
      axios.get('api/bills/callback', { params: { status, cancel, orderCode } })
        .then(response => {
          console.log('Payment status updated:', response.data);
          Swal.fire({
            title: 'Thanh toán thành công',
            text: 'Đơn hàng của bạn đã được thanh toán thành công',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/');
          });
        })
        .catch(error => {
          console.error('Error updating payment status:', error);
          Swal.fire({
            title: 'Lỗi thanh toán',
            text: error.response?.data?.message || 'Đã xảy ra lỗi khi cập nhật trạng thái thanh toán',
            icon: 'error',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/');
          });
        });
    }
  }

  const fetchShippingFee = async (address) => {
    if (!address) return;

    const addressData = {
      province: address.province,
      district: address.district,
      ward: address.ward,
      address: address.addressName,
    }
    try {
      const response = await axios.post('/api/ship/fee', addressData);
      setShippingFee(response.data.fee.fee);
      console.log('Phí vận chuyển:', response.data.fee.fee);
    } catch (error) {
      console.error('Lỗi khi lấy phí vận chuyển:', error);
      Swal.fire({
        title: 'Lỗi',
        text: error.response?.data?.message || 'Không thể lấy phí vận chuyển',
        icon: 'error'
      })
    };
  }

  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    fetchStatusPayment();
    const storedData = localStorage.getItem('checkoutData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCheckoutData(parsedData);
      fetchOrderDetails(parsedData);
      setDiscount(parsedData.discount);
    } else {
      Swal.fire({
        title: 'Lỗi',
        text: 'Không tìm thấy dữ liệu đơn hàng, vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/cart');
      });
    }
  }, []);

  const fetchOrderDetails = async (data) => {
    try {
      const response = await axios.post('/api/bills/checkout', data);
      const responseDetail = response.data.data;
      setAddressList(responseDetail?.listAddress || []);
      setCarts(responseDetail.listCartItem);

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
    if (!paymentMethod) {
      Swal.fire({
        title: 'Thông báo',
        text: 'Vui lòng chọn phương thức thanh toán',
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
      if (response.data.status == 201) {
        Swal.fire({
          title: 'Thành công',
          text: 'Đặt hàng thành công!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          localStorage.removeItem('checkoutData');
          console.log('Đơn hàng đã được đặt:', response.data.data);
          if (response.data.data.paymentUrl) {
            navigate(response.data.data.paymentUrl);
          }
          else {
            navigate('/');
          }
        });
      }
      else {
        Swal.fire({
          title: 'Thất bại',
          text: response.data.data,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
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
                  <DeliveryAddressSection
                    addressList={addressList}
                    onAddressSelect={handleAddressSelect}
                    onAddAddress={handleAddAddress}
                    onUpdateAddress={handleUpdateAddress}
                    onDeleteAddress={handleDeleteAddress}
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
                disabled={!selectedAddress}
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