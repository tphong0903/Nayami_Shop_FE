import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/BreadCrumbSection';
import SidebarSection from '~/components/product/SidebarSection';
import '~/assets/UserCss.css'
import ReletedProductSection from '~/components/product/ReletedProductSection';
import StickyCartSection from '~/components/product/StickyCartSection';
import QuickViewSection from '~/components/product/QuickViewSection';
import DealBoxSection from '~/components/product/DealBoxSection';
export default function ProductPage() {
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page='Tên sản phẩm' />
      <SidebarSection />
      <ReletedProductSection />
      <Footer />
      <QuickViewSection />
      <DealBoxSection />
      <StickyCartSection />
    </>
  );
}
