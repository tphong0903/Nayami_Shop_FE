import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import CategorySection from '~/components/shop/CategorySection';
import ProductSection from '~/components/shop/ProductSection';
import '~/assets/UserCss.css'
import SectionLogin from '~/components/SectionLogin';
export default function Login() {
  return (
    <>
      <Header />
      <BreadCrumb title='Login' page='Login'/>
      <SectionLogin/>
      <Footer />
    </>
  )
}
