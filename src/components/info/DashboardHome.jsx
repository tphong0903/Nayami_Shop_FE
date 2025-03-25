import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  const [userData, setUserData] = useState({
    name: 'Vicki E. Pope',
    email: 'vicki.pope@gmail.com',
    totalOrders: 3658,
    pendingOrders: 254,
    totalWishlist: 32158,
    contactInfo: {
      name: 'MARK JECNO',
      email: 'vicki.pope@gmail.com'
    },
    billingAddress: null,
    shippingAddress: null,
    subscribed: false
  });

  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data from API
  useEffect(() => {
    // Simulating API call
    const fetchUserData = async () => {
      try {
        // In a real app, you would fetch data from your API
        // const response = await fetch('/api/user/dashboard');
        // const data = await response.json();
        // setUserData(data);

        // Simulate API delay
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Initialize feather icons after component renders
  useEffect(() => {
    if (typeof window !== 'undefined' && window.feather) {
      window.feather.replace();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="dashboard-home">
        <div className="loading-spinner text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      <div className="title">
        <h2>My Dashboard</h2>
        <span className="title-leaf">
          <svg className="icon-width bg-gray">
            <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
          </svg>
        </span>
      </div>

      <div className="dashboard-user-name">
        <h6 className="text-content">Hello, <b className="text-title">{userData.name}</b></h6>
        <p className="text-content">
          From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account
          information. Select a link below to view or edit information.
        </p>
      </div>

      <div className="total-box">
        <div className="row g-sm-4 g-3">
          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
            <div className="totle-contain">
              <img src="../assets/images/svg/order.svg" className="img-1 blur-up lazyload" alt="order icon" />
              <img src="../assets/images/svg/order.svg" className="blur-up lazyload" alt="order icon" />
              <div className="totle-detail">
                <h5>Total Order</h5>
                <h3>{userData.totalOrders.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
            <div className="totle-contain">
              <img src="../assets/images/svg/pending.svg" className="img-1 blur-up lazyload" alt="pending icon" />
              <img src="../assets/images/svg/pending.svg" className="blur-up lazyload" alt="pending icon" />
              <div className="totle-detail">
                <h5>Total Pending Order</h5>
                <h3>{userData.pendingOrders.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
            <div className="totle-contain">
              <img src="../assets/images/svg/wishlist.svg" className="img-1 blur-up lazyload" alt="wishlist icon" />
              <img src="../assets/images/svg/wishlist.svg" className="blur-up lazyload" alt="wishlist icon" />
              <div className="totle-detail">
                <h5>Total Wishlist</h5>
                <h3>{userData.totalWishlist.toLocaleString()}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-title mt-4">
        <h3>Account Information</h3>
      </div>

      <div className="row g-4">
        <div className="col-xxl-6">
          <div className="dashboard-contant-title">
            <h4>
              Contact Information{' '}
              <Link to="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                Edit
              </Link>
            </h4>
          </div>
          <div className="dashboard-detail">
            <h6 className="text-content">{userData.contactInfo.name}</h6>
            <h6 className="text-content">{userData.contactInfo.email}</h6>
            <Link to="/dashboard/privacy" className="text-decoration-underline">Change Password</Link>
          </div>
        </div>

        <div className="col-xxl-6">
          <div className="dashboard-contant-title">
            <h4>
              Newsletters{' '}
              <Link to="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                Edit
              </Link>
            </h4>
          </div>
          <div className="dashboard-detail">
            <h6 className="text-content">
              {userData.subscribed
                ? 'You are currently subscribed to our newsletter'
                : 'You are currently not subscribed to any newsletter'}
            </h6>
            {userData.subscribed ? (
              <button className="btn btn-outline-danger btn-sm mt-2">Unsubscribe</button>
            ) : (
              <button className="btn btn-outline-success btn-sm mt-2">Subscribe Now</button>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="dashboard-contant-title">
            <h4>
              Address Book{' '}
              <Link to="#" data-bs-toggle="modal" data-bs-target="#editProfile">
                Edit
              </Link>
            </h4>
          </div>

          <div className="row g-4">
            <div className="col-xxl-6">
              <div className="dashboard-detail">
                <h6 className="text-content">Default Billing Address</h6>
                {userData.billingAddress ? (
                  <>
                    <p className="text-content mb-0">{userData.billingAddress.name}</p>
                    <p className="text-content mb-0">{userData.billingAddress.street}</p>
                    <p className="text-content mb-0">
                      {userData.billingAddress.city}, {userData.billingAddress.state} {userData.billingAddress.zipCode}
                    </p>
                    <p className="text-content mb-0">{userData.billingAddress.country}</p>
                    <p className="text-content mb-0">Phone: {userData.billingAddress.phone}</p>
                  </>
                ) : (
                  <h6 className="text-content">
                    You have not set a default billing address.
                  </h6>
                )}
                <Link to="/dashboard/addresses" className="text-decoration-underline mt-2 d-inline-block">
                  {userData.billingAddress ? 'Edit Address' : 'Add Billing Address'}
                </Link>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="dashboard-detail">
                <h6 className="text-content">Default Shipping Address</h6>
                {userData.shippingAddress ? (
                  <>
                    <p className="text-content mb-0">{userData.shippingAddress.name}</p>
                    <p className="text-content mb-0">{userData.shippingAddress.street}</p>
                    <p className="text-content mb-0">
                      {userData.shippingAddress.city}, {userData.shippingAddress.state} {userData.shippingAddress.zipCode}
                    </p>
                    <p className="text-content mb-0">{userData.shippingAddress.country}</p>
                    <p className="text-content mb-0">Phone: {userData.shippingAddress.phone}</p>
                  </>
                ) : (
                  <h6 className="text-content">
                    You have not set a default shipping address.
                  </h6>
                )}
                <Link to="/dashboard/addresses" className="text-decoration-underline mt-2 d-inline-block">
                  {userData.shippingAddress ? 'Edit Address' : 'Add Shipping Address'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="dashboard-title mt-4">
        <h3>Recent Activity</h3>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="recent-activity dashboard-bg-box p-4">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Date</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Order Placed</td>
                    <td>Apr 15, 2023</td>
                    <td>
                      <Link to="/dashboard/orders">Order #25478</Link> - Processing
                    </td>
                  </tr>
                  <tr>
                    <td>Item Added to Wishlist</td>
                    <td>Apr 12, 2023</td>
                    <td>
                      <Link to="/dashboard/wishlist">Fresh Organic Spinach</Link> added to wishlist
                    </td>
                  </tr>
                  <tr>
                    <td>Address Updated</td>
                    <td>Apr 8, 2023</td>
                    <td>Shipping address was updated</td>
                  </tr>
                  <tr>
                    <td>Order Delivered</td>
                    <td>Apr 5, 2023</td>
                    <td>
                      <Link to="/dashboard/orders">Order #25342</Link> - Delivered successfully
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-title mt-4">
        <h3>Quick Actions</h3>
      </div>

      <div className="row g-4 mb-0">
        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-6">
          <Link to="/shop" className="quick-action-box dashboard-bg-box text-center p-4">
            <div className="quick-action-icon mb-2">
              <i data-feather="shopping-bag" style={{ width: '40px', height: '40px', strokeWidth: 1 }}></i>
            </div>
            <h5>Browse Products</h5>
          </Link>
        </div>

        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-6">
          <Link to="/dashboard/orders" className="quick-action-box dashboard-bg-box text-center p-4">
            <div className="quick-action-icon mb-2">
              <i data-feather="package" style={{ width: '40px', height: '40px', strokeWidth: 1 }}></i>
            </div>
            <h5>View Orders</h5>
          </Link>
        </div>

        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-6">
          <Link to="/dashboard/profile" className="quick-action-box dashboard-bg-box text-center p-4">
            <div className="quick-action-icon mb-2">
              <i data-feather="user" style={{ width: '40px', height: '40px', strokeWidth: 1 }}></i>
            </div>
            <h5>Edit Profile</h5>
          </Link>
        </div>

        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-6">
          <Link to="/dashboard/wishlist" className="quick-action-box dashboard-bg-box text-center p-4">
            <div className="quick-action-icon mb-2">
              <i data-feather="heart" style={{ width: '40px', height: '40px', strokeWidth: 1 }}></i>
            </div>
            <h5>My Wishlist</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;