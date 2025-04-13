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

export default function ProductPage() {
  const [product, setProduct] = useState()
  const { id } = useParams();

  const [user, setUser] = useState()
  const [rate, setRate] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(null);
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải sản phẩm.', 'error')
      })

    axios
      .get(`/api/users/${localStorage.getItem("id")}`)
      .then(res => {
        setUser(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải user.', 'error')
      })

    axios
      .get(`/api/comments/${id}`)
      .then((response) => {
        console.log(response.data.data)
        setRate(response.data.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải đánh giá.', 'error')
      })

  }, [])
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page={product?.name} />
      <ProductSection product={product} user={user} rate={rate} />
      <ReletedProductSection product={product} />
      <Footer />
      <QuickViewSection />
      <DealBoxSection />
      <StickyCartSection />
    </>
  );
}
