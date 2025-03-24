import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/BreadCrumbSection';
import CheckoutSection from '~/components/checkout/CheckoutSection';


export default function CheckOutPage() {
  return (
    <>
      <Header />
      <BreadCrumbSection title='Thanh toán' page="Thanh Toán" />

      <CheckoutSection />
      <Footer />
      {/* <QuickViewSection />
      <DealBoxSection />
      <StickyCartSection />  */}
    </>
  );
}
