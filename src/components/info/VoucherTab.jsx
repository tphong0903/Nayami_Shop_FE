import axios from 'axios';
import { get } from 'jquery';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VoucherTab = () => {
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVouchers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/coupons/customer`);
        if (response.data.data) {
          setVouchers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching vouchers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVouchers();
  }, []);

  const handleUseVoucher = (voucherId) => {
    localStorage.setItem('selected_voucher', voucherId);

    Swal.fire({
      title: 'Mã Voucher Của Bạn',
      html: `
        <div class="d-flex align-items-center justify-content-center">
            <div class="input-group" style="width: 60%;">
            <span class="input-group-text"><i class="fas fa-ticket-alt"></i></span>
            <input id="voucherIdInput" class="form-control text-center" value="${voucherId}" readonly>
            </div>
            <button id="copyBtn" class="btn btn-primary ms-2">
            <i class="fas fa-copy"></i> Sao chép
            </button>
        </div>
        `,
      showCancelButton: true,
      cancelButtonText: 'Đóng',
      showConfirmButton: false,
      didOpen: () => {
        const copyBtn = document.getElementById('copyBtn');
        const voucherIdInput = document.getElementById('voucherIdInput');

        copyBtn.addEventListener('click', () => {
          voucherIdInput.select();
          document.execCommand('copy');
          Swal.showValidationMessage('Đã sao chép vào clipboard!');
          setTimeout(() => {
            Swal.resetValidationMessage();
          }, 1500);
        });
      },
    })
  };

  const isVoucherExpired = (expiryDate) => {
    return new Date() > new Date(expiryDate);
  };

  const isVoucherUsed = (active) => {
    return active === false;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '.');
  };

  return (
    <div className="dashboard-right-sidebar">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-vouchers"
          role="tabpanel"
        >
          <div className="dashboard-home">
            <div className="title">
              <h2>Ví Voucher</h2>
              <span className="title-leaf">
                <svg className="icon-width bg-gray">
                  <use xlinkHref="../src/assets/svg/leaf.svg#leaf"></use>
                </svg>
              </span>
              <p>
                Bạn có{' '}
                {
                  vouchers.filter(
                    (v) =>
                      !isVoucherExpired(v.endDate) && !isVoucherUsed(v.active)
                  ).length
                }{' '}
                voucher có thể sử dụng
              </p>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : vouchers.length > 0 ? (
              <div className="row g-4">
                {vouchers.map((voucher) => (
                  <div
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                    key={voucher.id}
                  >
                    <div className="voucher-card">
                      <div
                        className="voucher-header"
                        style={{
                          backgroundColor: isVoucherExpired(voucher.endDate)
                            ? '#999999'
                            : isVoucherUsed(voucher.active)
                              ? '#777777'
                              : '#ff6b6b',
                        }}
                      >
                        <div className="voucher-type">
                          <div className="voucher-icon">
                            <i className="fas fa-gift"></i>
                            <span>{voucher.content}</span>
                          </div>
                        </div>
                      </div>
                      <div className="voucher-content">
                        <div className="voucher-detail">
                          <h4 className="voucher-title">
                            Giảm {voucher.value}
                            {voucher.type === 'PERCENT' ? '%' : '₫'}
                          </h4>
                          <p className="voucher-condition">
                            Đơn Tối Thiểu{' '}
                            {voucher.constraintMoney?.toLocaleString() || 0}₫
                          </p>
                          <p className="voucher-expiry">
                            HSD: {formatDate(voucher.endDate)}
                          </p>
                        </div>
                        <div className="voucher-action">
                          <button
                            className={`btn ${
                              isVoucherExpired(voucher.endDate)
                                ? 'btn-secondary disabled'
                                : isVoucherUsed(voucher.active)
                                  ? 'btn-secondary disabled'
                                  : 'btn-outline-primary'
                            }`}
                            onClick={() =>
                              !isVoucherExpired(voucher.endDate) &&
                              !isVoucherUsed(voucher.active) &&
                              handleUseVoucher(voucher.id)
                            }
                            disabled={
                              isVoucherExpired(voucher.endDate) ||
                              isVoucherUsed(voucher.active)
                            }
                          >
                            {isVoucherExpired(voucher.endDate)
                              ? 'Đã hết hạn'
                              : isVoucherUsed(voucher.active)
                                ? 'Đã sử dụng'
                                : 'Dùng Ngay'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data-found">
                <div className="empty-box">
                  <h2>Bạn chưa có voucher nào</h2>
                  <p>Mua thêm sản phẩm để nhận được voucher mới!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherTab;
