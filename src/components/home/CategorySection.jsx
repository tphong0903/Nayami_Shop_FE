import Hinh1 from '~/assets/images/grocery/category/1.png'
import { Link, useNavigate } from 'react-router-dom';

export default function CategorySection() {
  const navigate = useNavigate();
  return (
    <section className="category-section-3">
      <div className="container-fluid-lg">
        <div className="title">
          <h2>Shop By Categories</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 wow fadeInUp">
              <div>
                <div className="category-box-list">
                  <Link to="/shop" className="category-name">
                    <h4>Fashion</h4>
                    <h6>25 items</h6>
                  </Link>
                  <div className="category-box-view">
                    <Link to="/shop">
                      <img
                        src={Hinh1}
                        className="img-fluid blur-up lazyload"
                        alt="Shop"
                      />
                    </Link>
                    <button
                      onClick={() => navigate('/shop')}
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="category-box-list">
                  <a href="shop-left-sidebar.html" className="category-name">
                    <h4>Fashion</h4>
                    <h6>25 items</h6>
                  </a>
                  <div className="category-box-view">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={Hinh1}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div><div>
                <div className="category-box-list">
                  <a href="shop-left-sidebar.html" className="category-name">
                    <h4>Fashion</h4>
                    <h6>25 items</h6>
                  </a>
                  <div className="category-box-view">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={Hinh1}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div><div>
                <div className="category-box-list">
                  <a href="shop-left-sidebar.html" className="category-name">
                    <h4>Fashion</h4>
                    <h6>25 items</h6>
                  </a>
                  <div className="category-box-view">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={Hinh1}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div><div>
                <div className="category-box-list">
                  <a href="shop-left-sidebar.html" className="category-name">
                    <h4>Fashion</h4>
                    <h6>25 items</h6>
                  </a>
                  <div className="category-box-view">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={Hinh1}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn shop-button"
                    >
                      <span>Shop Now</span>
                      <i className="fas fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >


  )
}
