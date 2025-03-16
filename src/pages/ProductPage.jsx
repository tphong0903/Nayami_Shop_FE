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
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const [product, setProduct] = useState()
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải sản phẩm.', 'error')
      })
  }, [id])
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page={product?.name} />
      <ProductSection product={product} />
      <ReletedProductSection />
      <Footer />
      <QuickViewSection />
      <DealBoxSection />
      <StickyCartSection />
    </>
  );
}
