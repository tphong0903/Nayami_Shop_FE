
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import ProductSection from '~/components/shop/ProductSection';
import '~/assets/UserCss.css'
import { useLocation } from 'react-router-dom';

export default function ShopPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';
  return (
    <>
      <Header />
      <BreadCrumb title='Sản Phẩm' page='Sản phẩm' />
      <ProductSection searchQuery={searchQuery} />
      <Footer />
    </>
  )
}
