import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/BreadCrumbSection';
import ProductSection from '~/components/product/ProductSection';
import '~/assets/UserCss.css'
import ReletedProductSection from '~/components/product/ReletedProductSection';
import StickyCartSection from '~/components/product/StickyCartSection';
import QuickViewSection from '~/components/product/QuickViewSection';
import DealBoxSection from '~/components/product/DealBoxSection';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function ProductPage() {
  const [product, setProduct] = useState()
  const { id } = useParams();

  const [user, setUser] = useState()
  const [userPurchaseCheck, setUserPurchaseCheck] = useState()
  const [rate, setRate] = useState()

  let decoded;
  if (localStorage.getItem('access_token')) {
    const token = localStorage.getItem('access_token')
    decoded = jwtDecode(token);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(null);
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải sản phẩm.', 'error')
      })

    if (decoded) {
      axios
        .post('/api/users', { email: decoded.email })
        .then(res => {
          setUser(res.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải user.', 'error')
        })

      axios
        .post('/api/users/check', { proId: id, email: decoded.email })
        .then(res => {
          setUserPurchaseCheck(res.data.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải user.', 'error')
        })
    }

    axios
      .get(`/api/comments/${id}`)
      .then((response) => {
        setRate(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải đánh giá.', 'error')
      })

  }, [id])
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page={product?.name} />
      <ProductSection product={product} user={user} rate={rate} purchaseCheck={userPurchaseCheck} />
      <ReletedProductSection product={product} />
      <Footer />
      <QuickViewSection />
      <DealBoxSection />
      <StickyCartSection />
    </>
  );
}
