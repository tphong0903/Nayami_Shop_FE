import { useEffect } from 'react'
// import './assets/css/vendors/bootstrap.css'
// import './assets/css/animate.min.css'
// import './assets/css/vendors/font-awesome.css'
// import './assets/css/vendors/feather-icon.css'
// import './assets/css/vendors/ion.rangeSlider.min.css'
// import './assets/css/vendors/slick/slick.css'
// import './assets/css/vendors/slick/slick-theme.css'
// import './assets/css/bulk-style.css'
// import './assets/css/vendors/animate.css'
// import './assets/css/font-style.css'
// import './assets/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import feather from 'feather-icons';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
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
        </Routes>
      </Router>
    </>
  )
}

export default App
