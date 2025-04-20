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
import Signup from '~/pages/Signup.jsx';
import Logout from '~/pages/Logout.jsx';
import setupAxiosInterceptors from './apis/axiosInterceptor.js';

import DiscountCampain from './components/Admin/body/discounts/DiscountCampain';
import AddDiscountCampain from './components/Admin/body/discounts/AddDiscountCampain';
import Coupons from './components/Admin/body/coupons/Coupons';
import AddCoupon from './components/Admin/body/coupons/AddCoupon';
import OrderTab from './components/info/OrderTab';
import DashboardHome from './components/info/DashboardHome';
import Promotions from './components/Admin/body/promotions/Promotions';
import AddPromotion from './components/Admin/body/promotions/AddPromotion';
import OrderList from './components/Admin/body/orders/OrderList';
import OrderDetail from './components/Admin/body/orders/OrderDetail';
import ForgotPassword from '~/pages/ForgotPassword.jsx';
import ResetPassword from '~/pages/ResetPassword.jsx';
import EnterNewPassword from '~/pages/EnterNewPassword.jsx';
import UpdateUser from '~/components/Admin/body/users/UpdateUser.jsx';
import EditPasswordUser from '~/components/Admin/body/users/EditPasswordUser.jsx';
import ProtectedRouteAdmin from '~/components/midlleware/ProtectedRoute.jsx';
import Error404 from '~/pages/error/Error404.jsx';
import ChangeProfileLayout from '~/components/info/ChangeProfileLayout.jsx';
import ChangePasswordUser from '~/components/info/ChangePasswordUser.jsx';
function App() {
  setupAxiosInterceptors();
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/dashboard" element={<UserDashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<OrderTab />} />
            <Route path="profile" element={<ChangeProfileLayout />} />
            <Route path="password" element={<ChangePasswordUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/enter-new-password" element={<EnterNewPassword />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          {/*Admin page*/}
          <Route path="/admin" element={<ProtectedRouteAdmin />}>
            <Route element={<AdminPage />}>
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
              <Route path="edit-password-user/:id" element={<EditPasswordUser />} />
              <Route path="update-user/:id" element={<UpdateUser />} />
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
              <Route path="promotions" element={<Promotions />} />
              <Route path="orders" element={<OrderList />} />
              <Route path="orders/:id" element={<OrderDetail />} />
              <Route path="add-new-promotion" element={<AddPromotion />} />
              <Route path="update-promotion/:id" element={<AddPromotion />} />
            </Route>
          </Route>

          <Route path="/error">
            <Route path="404" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
