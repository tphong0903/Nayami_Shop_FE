import Header from '~/components/header/Header.jsx';
import BreadCrumb from '~/components/BreadCrumbSection.jsx';
import ForgotPasswordSection from '~/components/authen/ForgotPasswordSection.jsx';
import Footer from '~/components/footer/Footer.jsx';
import EnterNewPasswordSection from '~/components/authen/EnterNewPasswordSection.jsx';

export default function EnterNewPassword() {
  return (
    <>
      <Header />
      <BreadCrumb title='Nhập mật khẩu mới' page='cập nhật mật khẩu mới' />
      <EnterNewPasswordSection />
      <Footer />
    </>
  )
}