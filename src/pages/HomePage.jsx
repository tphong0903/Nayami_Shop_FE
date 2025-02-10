
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import HomeSection from '~/components/home/HomeSection'
import ServiceSection from '~/components/home/ServiceSection'
import CategorySection from '~/components/home/CategorySection'
import ProductSection from '~/components/home/ProductSection'
import BannerSection from '~/components/home/BannerSection'
import TopSellerSection from '~/components/home/TopSellerSection'
import DiscountSection from '~/components/home/DiscountSection'
import '~/assets/UserCss.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />
      <ServiceSection />
      <CategorySection />
      <ProductSection />
      <BannerSection />
      <DiscountSection />
      <TopSellerSection />
      <Footer />
    </>
  )
}
