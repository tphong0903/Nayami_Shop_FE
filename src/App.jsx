import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import feather from 'feather-icons';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import AdminPage from './pages/Admin/AdminPage';
import DashBoard from './components/Admin/body/dashboard/DashBoard';
import Products from './components/Admin/body/products/Products'
import AddProduct from './components/Admin/body/products/AddProduct';
import UserDashboard from './pages/UserDashboard';

import Users from './components/Admin/body/users/Users';
import AddUser from './components/Admin/body/users/AddUser';
import Categories from './components/Admin/body/categories/Categories';
import AddCategory from './components/Admin/body/categories/AddCategory';
import Brands from './components/Admin/body/brands/Brands';
import AddBrand from './components/Admin/body/brands/AddBrand';

import Login from './pages/Login';
import ProtectedRoute from './components/midlleware/ProtectedRoute';
import Signup from '~/pages/Signup.jsx';
import Logout from '~/pages/Logout.jsx';
import setupAxiosInterceptors from './apis/axiosInterceptor.js';

import DiscountCampain from './components/Admin/body/discounts/DiscountCampain';
import AddDiscountCampain from './components/Admin/body/discounts/AddDiscountCampain';
import Coupons from './components/Admin/body/coupons/Coupons';
import AddCoupon from './components/Admin/body/coupons/AddCoupon';
function App() {

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashBoard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-new-product" element={<AddProduct view={false} />} />
            <Route path="edit-product/:id" element={<AddProduct view={false} />} />
            <Route path="view-product/:id" element={<AddProduct view={true} />} />
            <Route path="discounts" element={<DiscountCampain />} />
            <Route path="add-discounts" element={<AddDiscountCampain />} />
            <Route path="edit-discounts/:id" element={<AddDiscountCampain />} />
            <Route path="users" element={<Users />} />
            <Route path="add-new-user" element={<AddUser />} />
            <Route path="categories" element={<Categories />} />
            <Route path="add-new-category" element={<AddCategory />} />
            <Route
              path="/admin/update-new-category/:id"
              element={<AddCategory />}
            />
            <Route path="brands" element={<Brands />} />
            <Route path="add-new-brand" element={<AddBrand />} />
            <Route path="update-new-brand/:id" element={<AddBrand />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="add-new-coupon" element={<AddCoupon />} />
            <Route path="update-coupon/:id" element={<AddCoupon />} />


          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
