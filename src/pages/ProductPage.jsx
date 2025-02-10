import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/BreadCrumbSection';
import SidebarSection from '~/components/product/SidebarSection';
import '~/assets/UserCss.css'
export default function ProductPage() {
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page='Tên sản phẩm' />
      <SidebarSection />
      <Footer />
    </>
  );
}
