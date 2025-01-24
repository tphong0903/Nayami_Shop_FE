import HeaderTop from './HeaderTop'
import MenuNav from './MenuNav'
import MobileMenu from './MobileMenu'
import TopNav from './TopNav'

export default function Header() {
  return (
    <header className="pb-md-4 pb-0">
      <HeaderTop />
      <TopNav />
      <MenuNav />
      <MobileMenu />
    </header>

  )
}
