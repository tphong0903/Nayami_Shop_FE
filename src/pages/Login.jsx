import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';

import '~/assets/UserCss.css'
import SectionLogin from '~/components/authen/SectionLogin';
export default function Login() {
  return (
    <>
      <Header />
      <BreadCrumb title='Đăng nhập' page='Đăng nhâp' />
      <SectionLogin />
      <Footer />
    </>
  )
}
