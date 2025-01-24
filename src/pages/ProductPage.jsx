import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/product/BreadCrumbSection';
import SidebarSection from '~/components/product/SidebarSection';
export default function ProductPage() {
  return (
    <>
      <Header />
      <BreadCrumbSection />
      <SidebarSection />
      <Footer />
    </>
  );
}
