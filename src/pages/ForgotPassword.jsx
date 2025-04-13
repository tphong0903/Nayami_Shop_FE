import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import '~/assets/UserCss.css'
import ForgotPasswordSection from '~/components/ForgotPasswordSection.jsx';
export default function ForgotPassword() {
  return (
    <>
      <Header />
      <BreadCrumb title='Forgot password' page='Forgot password'/>
      <ForgotPasswordSection/>
      <Footer />
    </>
  )
}
