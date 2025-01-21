import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Head from './components/head/Head'
import './assets/css/vendors/bootstrap.css'
import './assets/css/animate.min.css'
import './assets/css/vendors/font-awesome.css'
import './assets/css/vendors/feather-icon.css'
import './assets/css/vendors/slick/slick.css'
import './assets/css/vendors/slick/slick-theme.css'
import './assets/css/bulk-style.css'
import './assets/css/vendors/animate.css'
import './assets/css/style.css'
import feather from 'feather-icons';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    feather.replace(); // Kích hoạt Feather Icons sau khi component render
  }, []);
  feather.replace()
  return (
    <>
      <Head />
      <Header />
    </>
  )
}

export default App
