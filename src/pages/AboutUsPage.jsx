import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumb from '~/components/BreadCrumbSection';
import AboutUsSection from '~/components/aboutUs/AboutUsSection';
import '~/assets/UserCss.css'
export default function AboutUsPage() {
  return (
    <>

      <Header />
      <BreadCrumb title='Giới Thiệu' page='Giới thiệu' />
      <AboutUsSection />
      <Footer />
    </>
  )
}