import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
export default function MobileMenu() {
  return (
    <>
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to={'/'}>
              <i className="iconly-Home icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link to={'/shop'}>
              <i className="iconly-Category icli js-link" />
              <span>Sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to={'/cart'} >
              <i className="iconly-Bag-2 icli fly-cate" />
              <span>Giỏ hàng</span>
            </Link>
          </li>
          <li>
            <Link to={'/about-us'} >
              <InfoIcon sx={{ color: 'white' }} />
              <span>Giới thiệu</span>
            </Link>
          </li>
        </ul>
      </div >
    </>
  )
}
