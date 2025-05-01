
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import HomeSection from '~/components/home/HomeSection'
import ServiceSection from '~/components/home/ServiceSection'
import CategorySection from '~/components/home/CategorySection'
import ProductSection from '~/components/home/ProductSection'
import TopSellerSection from '~/components/home/TopSellerSection'
import DiscountSection from '~/components/home/DiscountSection'
import '~/assets/UserCss.css'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function HomePage() {
  const location = useLocation();
  const discountRef = useRef(null);
  const [promotion, SetPromotions] = useState([])

  const scrollToDiscount = () => {
    discountRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.state?.scrollToDiscount) {
      scrollToDiscount();
      window.history.replaceState({}, document.title);
    }
    const handleScrollEvent = () => scrollToDiscount();
    window.addEventListener('scrollToDiscount', handleScrollEvent);

    return () => window.removeEventListener('scrollToDiscount', handleScrollEvent);
  }, [location]);

  const filteredPromotions = (promotions) => {
    if (promotions == null)
      return null
    else {
      let filtered;
      if (promotions.length > 0) {
        filtered = promotions.filter(item => {
          const endDate = new Date(item.endDate);
          return (endDate > todayDate && item.displayStatus == true);
        })
      }
      return filtered
    }
  };

  const fetchData = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/promotions`)
        .then(response => {
          SetPromotions(filteredPromotions(response.data.data))
        })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <>
      <Header onDealClick={scrollToDiscount} />
      <HomeSection promotion={promotion} />
      <ServiceSection />
      <CategorySection />
      <ProductSection />
      <div ref={discountRef}>
      </div>
      <DiscountSection />
      <TopSellerSection />
      <Footer />
    </>
  )
}
