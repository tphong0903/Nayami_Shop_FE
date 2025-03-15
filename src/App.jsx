import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import feather from 'feather-icons';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/Admin/AdminPage';
import DashBoard from './components/Admin/body/dashboard/DashBoard';
import Products from './components/Admin/body/products/Products';
import AddProduct from './components/Admin/body/products/AddProduct';
import UserDashboard from './pages/UserDashboard';

import Users from './components/Admin/body/users/Users';
import AddUser from './components/Admin/body/users/AddUser';
import Categories from './components/Admin/body/categories/Categories';
import AddCategory from './components/Admin/body/categories/AddCategory';
import Brands from './components/Admin/body/brands/Brands';
import AddBrand from './components/Admin/body/brands/AddBrand';
import DiscountCampain from './components/Admin/body/discounts/DiscountCampain';
import AddDiscountCampain from './components/Admin/body/discounts/AddDiscountCampain';
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
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashBoard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-new-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<AddProduct />} />
            <Route path="discounts" element={<DiscountCampain />} />
            <Route path="add-discounts" element={<AddDiscountCampain />} />
            <Route path="edit-discounts/:id" element={<AddDiscountCampain />} />

            <Route path="users" element={<Users />} />
            <Route path="add-new-user" element={<AddUser />} />
            <Route path="categories" element={<Categories />} />
            <Route path="/admin/add-new-category/" element={<AddCategory />} />
            <Route
              path="/admin/update-new-category/:id"
              element={<AddCategory />}
            />
            <Route path="brands" element={<Brands />} />
            <Route path="/admin/add-new-brand/" element={<AddBrand />} />
            <Route path="/admin/update-new-brand/:id" element={<AddBrand />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
