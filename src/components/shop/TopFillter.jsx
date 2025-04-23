

export default function TopFillter() {
  return (
    <>
      <div className="show-button">
        <div className="top-filter-menu-2">
          <div
            className="sidebar-filter-menu"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
          >
            <a href="#">
              <i className="fa-solid fa-filter" /> Filter Menu
            </a>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <div className="category-dropdown me-md-3">
              <h5 className="text-content">Sort By :</h5>
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  <span>Most Popular</span>{" "}
                  <i className="fa-solid fa-angle-down" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      id="pop"
                      href="#"
                    >
                      Popularity
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="low"
                      href="#"
                    >
                      Low - High Price
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="high"
                      href="#"
                    >
                      High - Low Price
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="rating"
                      href="#"
                    >
                      Average Rating
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="aToz"
                      href="#"
                    >
                      A - Z Order
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="zToa"
                      href="#"
                    >
                      Z - A Order
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="off"
                      href="#"
                    >
                      % Off - Hight To Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-option grid-option-2">
              <ul>
                <li className="three-grid">
                  <a href="#">
                    <img
                      src="../assets/svg/grid-3.svg"
                      className="blur-up lazyload"
                      alt=""
                    />
                  </a>
                </li>
                <li className="grid-btn five-grid d-xxl-inline-block d-none">
                  <a href="#">
                    <img
                      src="../assets/svg/grid-4.svg"
                      className="blur-up lazyload d-lg-inline-block d-none"
                      alt=""
                    />
                  </a>
                </li>
                <li className="five-grid d-xxl-inline-block d-none active">
                  <a href="#">
                    <img
                      src="../assets/svg/grid-5.svg"
                      className="blur-up lazyload d-lg-inline-block d-none"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-btn">
                  <a href="#">
                    <img
                      src="../assets/svg/list.svg"
                      className="blur-up lazyload"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="top-filter-category" id="collapseExample">
        <div className="row g-sm-4 g-3">
          <div className="col-xl-3 col-md-6">
            <div className="category-title">
              <h3>Pack Size</h3>
            </div>
            <ul className="category-list custom-padding custom-height">
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="fruit"
                  />
                  <label className="form-check-label" htmlFor="fruit">
                    <span className="name">Fruits &amp; Vegetables</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="cake"
                  />
                  <label className="form-check-label" htmlFor="cake">
                    <span className="name">Bakery, Cake &amp; Dairy</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="behe"
                  />
                  <label className="form-check-label" htmlFor="behe">
                    <span className="name">Beverages</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="snacks"
                  />
                  <label className="form-check-label" htmlFor="snacks">
                    <span className="name">Snacks &amp; Branded Foods</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="beauty"
                  />
                  <label className="form-check-label" htmlFor="beauty">
                    <span className="name">Beauty &amp; Household</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="pets"
                  />
                  <label className="form-check-label" htmlFor="pets">
                    <span className="name">Kitchen, Garden &amp; Pets</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input className="checkbox_animated" type="checkbox" id="egg" />
                  <label className="form-check-label" htmlFor="egg">
                    <span className="name">Eggs, Meat &amp; Fish</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="food"
                  />
                  <label className="form-check-label" htmlFor="food">
                    <span className="name">Gourment &amp; World Food</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="care"
                  />
                  <label className="form-check-label" htmlFor="care">
                    <span className="name">Baby Care</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="fish"
                  />
                  <label className="form-check-label" htmlFor="fish">
                    <span className="name">Fish &amp; Seafood</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="marinades"
                  />
                  <label className="form-check-label" htmlFor="marinades">
                    <span className="name">Marinades</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="lamb"
                  />
                  <label className="form-check-label" htmlFor="lamb">
                    <span className="name">Mutton &amp; Lamb</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="other"
                  />
                  <label className="form-check-label" htmlFor="other">
                    <span className="name">Port &amp; other Meats</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="pour"
                  />
                  <label className="form-check-label" htmlFor="pour">
                    <span className="name">Pourltry</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="salami"
                  />
                  <label className="form-check-label" htmlFor="salami">
                    <span className="name">Sausages, bacon &amp; Salami</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="category-title">
              <h3>Price</h3>
            </div>
            <div className="range-slider">
              <input type="text" className="js-range-slider" defaultValue="" />
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="category-title">
              <h3>Discount</h3>
            </div>
            <ul className="category-list">
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    <span className="name">upto 5%</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault1">
                    <span className="name">5% - 10%</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault2"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault2">
                    <span className="name">10% - 15%</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault3"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault3">
                    <span className="name">15% - 25%</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault4"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault4">
                    <span className="name">More than 25%</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="category-title">
              <h3>Category</h3>
            </div>
            <ul className="category-list custom-padding custom-height">
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault5"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault5">
                    <span className="name">400 to 500 g</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault6"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault6">
                    <span className="name">500 to 700 g</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault7"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault7">
                    <span className="name">700 to 1 kg</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault8"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault8">
                    <span className="name">120 - 150 g each Vacuum 2 pcs</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault9"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault9">
                    <span className="name">1 pc</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault10"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault10"
                  >
                    <span className="name">1 to 1.2 kg</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault11"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault11"
                  >
                    <span className="name">2 x 24 pcs Multipack</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault12"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault12"
                  >
                    <span className="name">2x6 pcs Multipack</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault13"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault13"
                  >
                    <span className="name">4x6 pcs Multipack</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault14"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault14"
                  >
                    <span className="name">5x6 pcs Multipack</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault15"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault15"
                  >
                    <span className="name">Combo 2 Items</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault16"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault16"
                  >
                    <span className="name">Combo 3 Items</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault17"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault17"
                  >
                    <span className="name">2 pcs</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault18"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault18"
                  >
                    <span className="name">3 pcs</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault19"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault19"
                  >
                    <span className="name">
                      2 pcs Vacuum (140 g to 180 g each )
                    </span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault20"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault20"
                  >
                    <span className="name">4 pcs</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault21"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault21"
                  >
                    <span className="name">
                      4 pcs Vacuum (140 g to 180 g each )
                    </span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault22"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault22"
                  >
                    <span className="name">6 pcs</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault23"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault23"
                  >
                    <span className="name">6 pcs carton</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check ps-0 m-0 category-list-box">
                  <input
                    className="checkbox_animated"
                    type="checkbox"
                    id="flexCheckDefault24"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault24"
                  >
                    <span className="name">6 pcs Pouch</span>
                    <span className="number">(15)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}
