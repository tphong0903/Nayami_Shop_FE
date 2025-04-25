import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import BoltIcon from '@mui/icons-material/Bolt';
export default function MenuNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDealClick = () => {
    if (location.pathname === '/') {
      // Nếu đang ở HomePage thì phát event custom để scroll
      window.dispatchEvent(new CustomEvent('scrollToDiscount'));
    } else {
      // Nếu chưa ở Home thì chuyển về Home và gửi state để trigger scroll
      navigate('/', { state: { scrollToDiscount: true } });
    }
  };
  const [listCategorys, setCategorys] = useState([]);

  useEffect(() => {
    axios
      .get('/api/categories/active/brands')
      .then((response) => {
        setCategorys(response.data.data);
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách Danh mục.', 'error');
      });
  }, []);

  return (
    <>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left">
                <button className="dropdown-category">
                  <MenuIcon />
                  <span>Danh mục</span>
                </button>
                <div className="category-dropdown">
                  <div className="category-title">
                    <h5>Categories</h5>
                    <button
                      type="button"
                      className="btn p-0 close-button text-content"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <ul className="category-list">
                    {listCategorys.map(v => (
                      <li className="onhover-category-list" key={v.id}>
                        <Link to={`/shop?categoryId=${v.id}&categoryName=${encodeURIComponent(v.categoryName)}`} className="category-name">
                          <h6>{v.categoryName}</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Thương Hiệu</h5>
                            </div>
                            <ul>
                              {v.brandDTOList.map(b => (
                                <li key={b.id}>
                                  <Link to={`/shop?categoryId=${v.id}&categoryName=${encodeURIComponent(v.categoryName)}&brandId=${b.id}&brandName=${encodeURIComponent(b.name)}&`}>{b.name}</Link>
                                </li>
                              ))
                              }
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              </div>
              <div className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={'/'}
                            style={{ fontWeight: '600', fontSize: '18px' }}
                          >
                            TRANG CHỦ
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            className="nav-link "
                            to={'/shop'}
                            style={{ fontWeight: '600', fontSize: '18px' }}
                          >
                            SẢN PHẨM
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            className="nav-link "
                            to={'/cart'}
                            style={{ fontWeight: '600', fontSize: '18px' }}
                          >
                            GIỎ HÀNG
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={'/about-us'}
                            style={{ fontWeight: '600', fontSize: '18px' }}
                          >
                            GIỚI THIỆU
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-right">
                <button
                  onClick={handleDealClick}
                  className="btn deal-button"
                >
                  <BoltIcon />
                  <span>Khuyến mãi hôm nay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
