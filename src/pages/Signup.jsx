import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import '~/assets/UserCss.css'
import SectionSignup from '~/components/authen/SectionSignup.jsx';
import BreadCrumb from '~/components/BreadCrumbSection.jsx';
export default function Signup() {
  return (
    <>
      <Header />
      <BreadCrumb title='Đăng ký' page='Đăng ký' />
      <SectionSignup />
      <Footer />
    </>
  )
}
