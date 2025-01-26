import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import CartSection from '~/components/cart/CartSection';
export default function CartPage() {
  return (
    <>
      <Header />
      <BreadCrumb title='Giỏ hàng' page='Giỏ hàng' />
      <CartSection />
      <Footer />
    </>
  )
}
