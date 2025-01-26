
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import Breadcrumb from '~/components/shop/BreadcrumbSection';
import CategorySection from '~/components/shop/CategorySection';
import ProductSection from '~/components/shop/ProductSection';
export default function ShopPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <CategorySection />
      <ProductSection />
      <Footer />
    </>
  )
}
