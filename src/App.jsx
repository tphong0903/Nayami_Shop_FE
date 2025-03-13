import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import feather from 'feather-icons';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/Admin/AdminPage';
import DashBoard from './components/Admin/body/dashboard/DashBoard';
import Products from './components/Admin/body/products/Products'
import AddProduct from './components/Admin/body/products/AddProduct';
import UserDashboard from './pages/UserDashboard';
import Users from './components/Admin/body/users/Users';
import AddUser from './components/Admin/body/users/AddUser';
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
            <Route path="users" element={<Users />} />
            <Route path="add-new-user" element={<AddUser />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
