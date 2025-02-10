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
            <Route path="" element={<DashBoard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-new-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
