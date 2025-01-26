
export default function LeftFillter() {
  return (
    <div className="col-custome-3 wow fadeInUp">
      <div className="left-box">
        <div className="shop-left-sidebar">
          <div className="back-button">
            <h3>
              <i className="fa-solid fa-arrow-left" /> Back
            </h3>
          </div>
          <div className="filter-category">
            <div className="filter-title">
              <h2>Filters</h2>
              <a href="javascript:void(0)">Clear All</a>
            </div>
            <ul>
              <li>
                <a href="javascript:void(0)">Vegetable</a>
              </li>
              <li>
                <a href="javascript:void(0)">Fruit</a>
              </li>
              <li>
                <a href="javascript:void(0)">Fresh</a>
              </li>
              <li>
                <a href="javascript:void(0)">Milk</a>
              </li>
              <li>
                <a href="javascript:void(0)">Meat</a>
              </li>
            </ul>
          </div>
          <div className="accordion custome-accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>Categories</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <div className="form-floating theme-form-floating-2 search-box">
                    <input
                      type="search"
                      className="form-control"
                      id="search"
                      placeholder="Search .."
                    />
                    <label htmlFor="search">Search</label>
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
                          <span className="name">
                            Fruits &amp; Vegetables
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
                          id="cake"
                        />
                        <label className="form-check-label" htmlFor="cake">
                          <span className="name">
                            Bakery, Cake &amp; Dairy
                          </span>
                          <span className="number">(12)</span>
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
                          <span className="number">(20)</span>
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
                          <span className="name">
                            Snacks &amp; Branded Foods
                          </span>
                          <span className="number">(05)</span>
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
                          <span className="number">(30)</span>
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
                          <span className="name">
                            Kitchen, Garden &amp; Pets
                          </span>
                          <span className="number">(50)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="egg"
                        />
                        <label className="form-check-label" htmlFor="egg">
                          <span className="name">Eggs, Meat &amp; Fish</span>
                          <span className="number">(19)</span>
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
                          <span className="name">
                            Gourment &amp; World Food
                          </span>
                          <span className="number">(30)</span>
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
                          <span className="number">(20)</span>
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
                          <span className="number">(10)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="marinades"
                        >
                          <span className="name">Marinades</span>
                          <span className="number">(05)</span>
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
                          <span className="number">(09)</span>
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
                          <span className="number">(06)</span>
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
                          <span className="number">(01)</span>
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
                          <span className="name">
                            Sausages, bacon &amp; Salami
                          </span>
                          <span className="number">(03)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>Food Preference</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="veget"
                        />
                        <label className="form-check-label" htmlFor="veget">
                          <span className="name">Vegetarian</span>
                          <span className="number">(08)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="non"
                        />
                        <label className="form-check-label" htmlFor="non">
                          <span className="name">Non Vegetarian</span>
                          <span className="number">(09)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingThree"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>Price</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <div className="range-slider">
                    <input
                      type="text"
                      className="js-range-slider"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <span>Rating</span>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingSix"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                        />
                        <div className="form-check-label">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                          </ul>
                          <span className="text-content">(5 Star)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                        />
                        <div className="form-check-label">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(4 Star)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                        />
                        <div className="form-check-label">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(3 Star)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                        />
                        <div className="form-check-label">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(2 Star)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                        />
                        <div className="form-check-label">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(1 Star)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingFour"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>Discount</span>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <span className="name">upto 5%</span>
                          <span className="number">(06)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          <span className="name">5% - 10%</span>
                          <span className="number">(08)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault2"
                        >
                          <span className="name">10% - 15%</span>
                          <span className="number">(10)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault3"
                        >
                          <span className="name">15% - 25%</span>
                          <span className="number">(14)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault4"
                        >
                          <span className="name">More than 25%</span>
                          <span className="number">(13)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingFive"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span>Pack Size</span>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingFive"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding custom-height">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault5"
                        >
                          <span className="name">400 to 500 g</span>
                          <span className="number">(05)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault6"
                        >
                          <span className="name">500 to 700 g</span>
                          <span className="number">(02)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault7"
                        >
                          <span className="name">700 to 1 kg</span>
                          <span className="number">(04)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault8"
                        >
                          <span className="name">
                            120 - 150 g each Vacuum 2 pcs
                          </span>
                          <span className="number">(06)</span>
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
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault9"
                        >
                          <span className="name">1 pc</span>
                          <span className="number">(09)</span>
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
                          <span className="number">(06)</span>
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
                          <span className="number">(03)</span>
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
                          <span className="number">(04)</span>
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
                          <span className="number">(05)</span>
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
                          <span className="number">(09)</span>
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
                          <span className="number">(10)</span>
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
                          <span className="number">(14)</span>
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
                          <span className="number">(19)</span>
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
                          <span className="number">(14)</span>
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
                          <span className="number">(13)</span>
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
                          <span className="number">(18)</span>
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
                          <span className="number">(07)</span>
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
                          <span className="number">(09)</span>
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
                          <span className="number">(11)</span>
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
                          <span className="number">(16)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
