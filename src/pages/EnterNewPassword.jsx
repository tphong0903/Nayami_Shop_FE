import Header from '~/components/header/Header.jsx';
import BreadCrumb from '~/components/BreadCrumbSection.jsx';
import ForgotPasswordSection from '~/components/ForgotPasswordSection.jsx';
import Footer from '~/components/footer/Footer.jsx';
import EnterNewPasswordSection from '~/components/EnterNewPasswordSection.jsx';

export default function EnterNewPassword() {
  return (
    <>
      <Header />
      <BreadCrumb title='Nhập mật khẩu mới' page='cập nhật mật khẩu mới'/>
      <EnterNewPasswordSection/>
      <Footer />
    </>
  )
}