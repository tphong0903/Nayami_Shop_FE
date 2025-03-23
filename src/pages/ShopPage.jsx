
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import CategorySection from '~/components/shop/CategorySection';
import ProductSection from '~/components/shop/ProductSection';
import '~/assets/UserCss.css'
export default function ShopPage() {
  return (
    <>
      <Header />
      <BreadCrumb title='Sản Phẩm' page='Sản phẩm' />
      <ProductSection />
      <Footer />
    </>
  )
}
