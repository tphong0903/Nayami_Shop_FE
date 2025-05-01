import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import '~/assets/UserCss.css'
import Section404Error from '~/components/error/Section404Error.jsx';
export default function Error404() {
  return (
    <>
      <Header />
      <BreadCrumb title='Error' page='Error' />
      <Section404Error />
      <Footer />
    </>
  )
}
