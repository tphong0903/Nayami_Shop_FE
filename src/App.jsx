import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import feather from 'feather-icons';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
function App() {

  useEffect(() => {
    feather.replace();
  }, []);
  feather.replace()
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
