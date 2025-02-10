export default function Loader() {
    return (
        <>
        {/* User Dashboard Section Start */}
        <section className="user-dashboard-section section-b-space">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-3 col-lg-4">
                <div className="dashboard-left-sidebar">
                  <div className="close-button d-flex d-lg-none">
                    <button className="close-sidebar">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <div className="profile-box">
                    <div className="cover-image">
                      <img
                        src="../assets/images/inner-page/cover-img.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
                    <div className="profile-contain">
                      <div className="profile-image">
                        <div className="position-relative">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="blur-up lazyload update_img"
                            alt=""
                          />
                          <div className="cover-icon">
                            <i className="fa-solid fa-pen">
                              <input type="file" onchange="readURL(this,0)" />
                            </i>
                          </div>
                        </div>
                      </div>
                      <div className="profile-name">
                        <h3>Vicki E. Pope</h3>
                        <h6 className="text-content">vicki.pope@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="nav nav-pills user-nav-pills"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-dashboard-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-dashboard"
                        type="button"
                        role="tab"
                        aria-controls="pills-dashboard"
                        aria-selected="true"
                      >
                        <i data-feather="home" />
                        DashBoard
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-order-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-order"
                        type="button"
                        role="tab"
                        aria-controls="pills-order"
                        aria-selected="false"
                      >
                        <i data-feather="shopping-bag" />
                        Order
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-wishlist-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-wishlist"
                        type="button"
                        role="tab"
                        aria-controls="pills-wishlist"
                        aria-selected="false"
                      >
                        <i data-feather="heart" />
                        Wishlist
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-card-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-card"
                        type="button"
                        role="tab"
                        aria-controls="pills-card"
                        aria-selected="false"
                      >
                        <i data-feather="credit-card" /> Saved Card
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-address-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-address"
                        type="button"
                        role="tab"
                        aria-controls="pills-address"
                        aria-selected="false"
                      >
                        <i data-feather="map-pin" />
                        Address
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <i data-feather="user" />
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-security-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-security"
                        type="button"
                        role="tab"
                        aria-controls="pills-security"
                        aria-selected="false"
                      >
                        <i data-feather="shield" />
                        Privacy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-9 col-lg-8">
                <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">
                  Show Menu
                </button>
                <div className="dashboard-right-sidebar">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-dashboard"
                      role="tabpanel"
                      aria-labelledby="pills-dashboard-tab"
                    >
                      <div className="dashboard-home">
                        <div className="title">
                          <h2>My Dashboard</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <div className="dashboard-user-name">
                          <h6 className="text-content">
                            Hello, <b className="text-title">Vicki E. Pope</b>
                          </h6>
                          <p className="text-content">
                            From your My Account Dashboard you have the ability to
                            view a snapshot of your recent account activity and update
                            your account information. Select a link below to view or
                            edit information.
                          </p>
                        </div>
                        <div className="total-box">
                          <div className="row g-sm-4 g-3">
                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                              <div className="totle-contain">
                                <img
                                  src="../assets/images/svg/order.svg"
                                  className="img-1 blur-up lazyload"
                                  alt=""
                                />
                                <img
                                  src="../assets/images/svg/order.svg"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                                <div className="totle-detail">
                                  <h5>Total Order</h5>
                                  <h3>3658</h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                              <div className="totle-contain">
                                <img
                                  src="../assets/images/svg/pending.svg"
                                  className="img-1 blur-up lazyload"
                                  alt=""
                                />
                                <img
                                  src="../assets/images/svg/pending.svg"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                                <div className="totle-detail">
                                  <h5>Total Pending Order</h5>
                                  <h3>254</h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                              <div className="totle-contain">
                                <img
                                  src="../assets/images/svg/wishlist.svg"
                                  className="img-1 blur-up lazyload"
                                  alt=""
                                />
                                <img
                                  src="../assets/images/svg/wishlist.svg"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                                <div className="totle-detail">
                                  <h5>Total Wishlist</h5>
                                  <h3>32158</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-title">
                          <h3>Account Information</h3>
                        </div>
                        <div className="row g-4">
                          <div className="col-xxl-6">
                            <div className="dashboard-contant-title">
                              <h4>
                                Contact Information{" "}
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  Edit
                                </a>
                              </h4>
                            </div>
                            <div className="dashboard-detail">
                              <h6 className="text-content">MARK JECNO</h6>
                              <h6 className="text-content">vicki.pope@gmail.com</h6>
                              <a href="javascript:void(0)">Change Password</a>
                            </div>
                          </div>
                          <div className="col-xxl-6">
                            <div className="dashboard-contant-title">
                              <h4>
                                Newsletters{" "}
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  Edit
                                </a>
                              </h4>
                            </div>
                            <div className="dashboard-detail">
                              <h6 className="text-content">
                                You are currently not subscribed to any newsletter
                              </h6>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="dashboard-contant-title">
                              <h4>
                                Address Book{" "}
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  Edit
                                </a>
                              </h4>
                            </div>
                            <div className="row g-4">
                              <div className="col-xxl-6">
                                <div className="dashboard-detail">
                                  <h6 className="text-content">
                                    Default Billing Address
                                  </h6>
                                  <h6 className="text-content">
                                    You have not set a default billing address.
                                  </h6>
                                  <a
                                    href="javascript:void(0)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                  >
                                    Edit Address
                                  </a>
                                </div>
                              </div>
                              <div className="col-xxl-6">
                                <div className="dashboard-detail">
                                  <h6 className="text-content">
                                    Default Shipping Address
                                  </h6>
                                  <h6 className="text-content">
                                    You have not set a default shipping address.
                                  </h6>
                                  <a
                                    href="javascript:void(0)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                  >
                                    Edit Address
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-wishlist"
                      role="tabpanel"
                      aria-labelledby="pills-wishlist-tab"
                    >
                      <div className="dashboard-wishlist">
                        <div className="title">
                          <h2>My Wishlist History</h2>
                          <span className="title-leaf title-leaf-gray">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <div className="row g-sm-4 g-3">
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/2.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Vegetable</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Fresh Bread and Pastry Flour 200 g
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Cheesy feet cheesy grin brie. Mascarpone cheese
                                    and wine hard cheese the big cheese everyone loves
                                    smelly cheese macaroni cheese croque monsieur.
                                  </p>
                                  <h6 className="unit mt-1">250 ml</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$08.02</span>
                                    <del>$15.15</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/3.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Vegetable</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Peanut Butter Bite Premium Butter Cookies 600 g
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Feta taleggio croque monsieur swiss manchego
                                    cheesecake dolcelatte jarlsberg. Hard cheese
                                    danish fontina boursin melted cheese fondue.
                                  </p>
                                  <h6 className="unit mt-1">350 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$04.33</span>
                                    <del>$10.36</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/4.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Snacks</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      SnackAmor Combo Pack of Jowar Stick and Jowar
                                      Chips
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Lancashire hard cheese parmesan. Danish fontina
                                    mozzarella cream cheese smelly cheese cheese and
                                    wine cheesecake dolcelatte stilton. Cream cheese
                                    parmesan who moved my cheese when the cheese comes
                                    out everybody's happy cream cheese red leicester
                                    ricotta edam.
                                  </p>
                                  <h6 className="unit mt-1">570 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$12.52</span>
                                    <del>$13.62</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/5.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Snacks</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Yumitos Chilli Sprinkled Potato Chips 100 g
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Cheddar cheddar pecorino hard cheese hard cheese
                                    cheese and biscuits bocconcini babybel. Cow goat
                                    paneer cream cheese fromage cottage cheese
                                    cauliflower cheese jarlsberg.
                                  </p>
                                  <h6 className="unit mt-1">100 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$10.25</span>
                                    <del>$12.36</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/6.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Vegetable</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Fantasy Crunchy Choco Chip Cookies
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Bavarian bergkase smelly cheese swiss cut the
                                    cheese lancashire who moved my cheese manchego
                                    melted cheese. Red leicester paneer cow when the
                                    cheese comes out everybody's happy croque monsieur
                                    goat melted cheese port-salut.
                                  </p>
                                  <h6 className="unit mt-1">550 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$14.25</span>
                                    <del>$16.57</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/7.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Vegetable</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Fresh Bread and Pastry Flour 200 g
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Melted cheese babybel chalk and cheese. Port-salut
                                    port-salut cream cheese when the cheese comes out
                                    everybody's happy cream cheese hard cheese cream
                                    cheese red leicester.
                                  </p>
                                  <h6 className="unit mt-1">1 Kg</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$12.68</span>
                                    <del>$14.69</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                            <div className="product-box-3 theme-bg-white h-100">
                              <div className="product-header">
                                <div className="product-image">
                                  <a href="product-left-thumbnail.html">
                                    <img
                                      src="../assets/images/cake/product/2.png"
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                      <i data-feather="x" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">Vegetable</span>
                                  <a href="product-left-thumbnail.html">
                                    <h5 className="name">
                                      Fresh Bread and Pastry Flour 200 g
                                    </h5>
                                  </a>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Squirty cheese cottage cheese cheese strings. Red
                                    leicester paneer danish fontina queso lancashire
                                    when the cheese comes out everybody's happy
                                    cottage cheese paneer.
                                  </p>
                                  <h6 className="unit mt-1">250 ml</h6>
                                  <h5 className="price">
                                    <span className="theme-color">$08.02</span>
                                    <del>$15.15</del>
                                  </h5>
                                  <div className="add-to-cart-box mt-2">
                                    <button
                                      className="btn btn-add-cart addcart-button"
                                      tabIndex={0}
                                    >
                                      Add
                                      <span className="add-icon">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-order"
                      role="tabpanel"
                      aria-labelledby="pills-order-tab"
                    >
                      <div className="dashboard-order">
                        <div className="title">
                          <h2>My Orders History</h2>
                          <span className="title-leaf title-leaf-gray">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <div className="order-contain">
                          <div className="order-box dashboard-bg-box">
                            <div className="order-container">
                              <div className="order-icon">
                                <i data-feather="box" />
                              </div>
                              <div className="order-detail">
                                <h4>
                                  Delivere <span>Panding</span>
                                </h4>
                                <h6 className="text-content">
                                  Gouda parmesan caerphilly mozzarella cottage cheese
                                  cauliflower cheese taleggio gouda.
                                </h6>
                              </div>
                            </div>
                            <div className="product-order-detail">
                              <a
                                href="product-left-thumbnail.html"
                                className="order-image"
                              >
                                <img
                                  src="../assets/images/vegetable/product/1.png"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="order-wrap">
                                <a href="product-left-thumbnail.html">
                                  <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                </a>
                                <p className="text-content">
                                  Cheddar dolcelatte gouda. Macaroni cheese cheese
                                  strings feta halloumi cottage cheese jarlsberg
                                  cheese triangles say cheese.
                                </p>
                                <ul className="product-size">
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Price : </h6>
                                      <h5>$20.68</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Rate : </h6>
                                      <div className="product-rating ms-2">
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
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Sold By : </h6>
                                      <h5>Fresho</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Quantity : </h6>
                                      <h5>250 G</h5>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="order-box dashboard-bg-box">
                            <div className="order-container">
                              <div className="order-icon">
                                <i data-feather="box" />
                              </div>
                              <div className="order-detail">
                                <h4>
                                  Delivered{" "}
                                  <span className="success-bg">Success</span>
                                </h4>
                                <h6 className="text-content">
                                  Cheese on toast cheesy grin cheesy grin cottage
                                  cheese caerphilly everyone loves cottage cheese the
                                  big cheese.
                                </h6>
                              </div>
                            </div>
                            <div className="product-order-detail">
                              <a
                                href="product-left-thumbnail.html"
                                className="order-image"
                              >
                                <img
                                  src="../assets/images/vegetable/product/2.png"
                                  alt=""
                                  className="blur-up lazyload"
                                />
                              </a>
                              <div className="order-wrap">
                                <a href="product-left-thumbnail.html">
                                  <h3>Cold Brew Coffee Instant Coffee 50 g</h3>
                                </a>
                                <p className="text-content">
                                  Pecorino paneer port-salut when the cheese comes out
                                  everybody's happy red leicester mascarpone blue
                                  castello cauliflower cheese.
                                </p>
                                <ul className="product-size">
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Price : </h6>
                                      <h5>$20.68</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Rate : </h6>
                                      <div className="product-rating ms-2">
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
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Sold By : </h6>
                                      <h5>Fresho</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Quantity : </h6>
                                      <h5>250 G</h5>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="order-box dashboard-bg-box">
                            <div className="order-container">
                              <div className="order-icon">
                                <i data-feather="box" />
                              </div>
                              <div className="order-detail">
                                <h4>
                                  Delivere <span>Panding</span>
                                </h4>
                                <h6 className="text-content">
                                  Cheesy grin boursin cheesy grin cheesecake blue
                                  castello cream cheese lancashire melted cheese.
                                </h6>
                              </div>
                            </div>
                            <div className="product-order-detail">
                              <a
                                href="product-left-thumbnail.html"
                                className="order-image"
                              >
                                <img
                                  src="../assets/images/vegetable/product/3.png"
                                  alt=""
                                  className="blur-up lazyload"
                                />
                              </a>
                              <div className="order-wrap">
                                <a href="product-left-thumbnail.html">
                                  <h3>
                                    Peanut Butter Bite Premium Butter Cookies 600 g
                                  </h3>
                                </a>
                                <p className="text-content">
                                  Cow bavarian bergkase mascarpone paneer squirty
                                  cheese fromage frais cheese slices when the cheese
                                  comes out everybody's happy.
                                </p>
                                <ul className="product-size">
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Price : </h6>
                                      <h5>$20.68</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Rate : </h6>
                                      <div className="product-rating ms-2">
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
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Sold By : </h6>
                                      <h5>Fresho</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Quantity : </h6>
                                      <h5>250 G</h5>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="order-box dashboard-bg-box">
                            <div className="order-container">
                              <div className="order-icon">
                                <i data-feather="box" />
                              </div>
                              <div className="order-detail">
                                <h4>
                                  Delivered{" "}
                                  <span className="success-bg">Success</span>
                                </h4>
                                <h6 className="text-content">
                                  Caerphilly port-salut parmesan pecorino croque
                                  monsieur dolcelatte melted cheese cheese and wine.
                                </h6>
                              </div>
                            </div>
                            <div className="product-order-detail">
                              <a
                                href="product-left-thumbnail.html"
                                className="order-image"
                              >
                                <img
                                  src="../assets/images/vegetable/product/4.png"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="order-wrap">
                                <a href="product-left-thumbnail.html">
                                  <h3>
                                    SnackAmor Combo Pack of Jowar Stick and Jowar
                                    Chips
                                  </h3>
                                </a>
                                <p className="text-content">
                                  The big cheese cream cheese pepper jack cheese
                                  slices danish fontina everyone loves cheese on toast
                                  bavarian bergkase.
                                </p>
                                <ul className="product-size">
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Price : </h6>
                                      <h5>$20.68</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Rate : </h6>
                                      <div className="product-rating ms-2">
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
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Sold By : </h6>
                                      <h5>Fresho</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="size-box">
                                      <h6 className="text-content">Quantity : </h6>
                                      <h5>250 G</h5>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-address"
                      role="tabpanel"
                      aria-labelledby="pills-address-tab"
                    >
                      <div className="dashboard-address">
                        <div className="title title-flex">
                          <div>
                            <h2>My Address Book</h2>
                            <span className="title-leaf">
                              <svg className="icon-width bg-gray">
                                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                              </svg>
                            </span>
                          </div>
                          <button
                            className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#add-address"
                          >
                            <i data-feather="plus" className="me-2" /> Add New Address
                          </button>
                        </div>
                        <div className="row g-sm-4 g-3">
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                            <div className="address-box">
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault2"
                                    defaultChecked=""
                                  />
                                </div>
                                <div className="label">
                                  <label>Home</label>
                                </div>
                                <div className="table-responsive address-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Jack Jennas</td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          <p>
                                            8424 James Lane South San Francisco, CA
                                            94080
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Pin Code :</td>
                                        <td>+380</td>
                                      </tr>
                                      <tr>
                                        <td>Phone :</td>
                                        <td>+ 812-710-3798</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="button-group">
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  <i data-feather="edit" />
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i data-feather="trash-2" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                            <div className="address-box">
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault3"
                                  />
                                </div>
                                <div className="label">
                                  <label>Office</label>
                                </div>
                                <div className="table-responsive address-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Terry S. Sutton</td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          <p>2280 Rose Avenue Kenner, LA 70062</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Pin Code :</td>
                                        <td>+25</td>
                                      </tr>
                                      <tr>
                                        <td>Phone :</td>
                                        <td>+ 504-228-0969</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="button-group">
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  <i data-feather="edit" />
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i data-feather="trash-2" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                            <div className="address-box">
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault4"
                                  />
                                </div>
                                <div className="label">
                                  <label>Neighbour</label>
                                </div>
                                <div className="table-responsive address-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Juan M. McKeon</td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          <p>
                                            1703 Carson Street Lexington, KY 40593
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Pin Code :</td>
                                        <td>+78</td>
                                      </tr>
                                      <tr>
                                        <td>Phone :</td>
                                        <td>+ 859-257-0509</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="button-group">
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  <i data-feather="edit" />
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i data-feather="trash-2" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                            <div className="address-box">
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault5"
                                  />
                                </div>
                                <div className="label">
                                  <label>Home 2</label>
                                </div>
                                <div className="table-responsive address-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Gary M. Bailey</td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          <p>
                                            2135 Burning Memory Lane Philadelphia, PA
                                            19135
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Pin Code :</td>
                                        <td>+26</td>
                                      </tr>
                                      <tr>
                                        <td>Phone :</td>
                                        <td>+ 215-335-9916</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="button-group">
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  <i data-feather="edit" />
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i data-feather="trash-2" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                            <div className="address-box">
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault1"
                                  />
                                </div>
                                <div className="label">
                                  <label>Home 2</label>
                                </div>
                                <div className="table-responsive address-table">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Gary M. Bailey</td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          <p>
                                            2135 Burning Memory Lane Philadelphia, PA
                                            19135
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Pin Code :</td>
                                        <td>+26</td>
                                      </tr>
                                      <tr>
                                        <td>Phone :</td>
                                        <td>+ 215-335-9916</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="button-group">
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  <i data-feather="edit" />
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm add-button w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i data-feather="trash-2" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-card"
                      role="tabpanel"
                      aria-labelledby="pills-card-tab"
                    >
                      <div className="dashboard-card">
                        <div className="title title-flex">
                          <div>
                            <h2>My Card Details</h2>
                            <span className="title-leaf">
                              <svg className="icon-width bg-gray">
                                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                              </svg>
                            </span>
                          </div>
                          <button
                            className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#editCard"
                          >
                            <i data-feather="plus" className="me-2" /> Add New Card
                          </button>
                        </div>
                        <div className="row g-4">
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                            <div className="payment-card-detail">
                              <div className="card-details">
                                <div className="card-number">
                                  <h4>XXXX - XXXX - XXXX - 2548</h4>
                                </div>
                                <div className="valid-detail">
                                  <div className="title">
                                    <span>valid</span>
                                    <span>thru</span>
                                  </div>
                                  <div className="date">
                                    <h3>08/05</h3>
                                  </div>
                                  <div className="primary">
                                    <span className="badge bg-pill badge-light">
                                      primary
                                    </span>
                                  </div>
                                </div>
                                <div className="name-detail">
                                  <div className="name">
                                    <h5>Audrey Carol</h5>
                                  </div>
                                  <div className="card-img">
                                    <img
                                      src="../assets/images/payment-icon/1.jpg"
                                      className="img-fluid blur-up lazyloaded"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="edit-card">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="javascript:void(0)"
                                >
                                  <i className="far fa-edit" /> edit
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i className="far fa-minus-square" /> delete
                                </a>
                              </div>
                            </div>
                            <div className="edit-card-mobile">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#editCard"
                                href="javascript:void(0)"
                              >
                                <i className="far fa-edit" /> edit
                              </a>
                              <a href="javascript:void(0)">
                                <i className="far fa-minus-square" />
                                delete
                              </a>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                            <div className="payment-card-detail">
                              <div className="card-details card-visa">
                                <div className="card-number">
                                  <h4>XXXX - XXXX - XXXX - 1536</h4>
                                </div>
                                <div className="valid-detail">
                                  <div className="title">
                                    <span>valid</span>
                                    <span>thru</span>
                                  </div>
                                  <div className="date">
                                    <h3>12/23</h3>
                                  </div>
                                  <div className="primary">
                                    <span className="badge bg-pill badge-light">
                                      primary
                                    </span>
                                  </div>
                                </div>
                                <div className="name-detail">
                                  <div className="name">
                                    <h5>Leah Heather</h5>
                                  </div>
                                  <div className="card-img">
                                    <img
                                      src="../assets/images/payment-icon/2.jpg"
                                      className="img-fluid blur-up lazyloaded"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="edit-card">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="javascript:void(0)"
                                >
                                  <i className="far fa-edit" /> edit
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i className="far fa-minus-square" /> delete
                                </a>
                              </div>
                            </div>
                            <div className="edit-card-mobile">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#editCard"
                                href="javascript:void(0)"
                              >
                                <i className="far fa-edit" /> edit
                              </a>
                              <a href="javascript:void(0)">
                                <i className="far fa-minus-square" />
                                delete
                              </a>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                            <div className="payment-card-detail">
                              <div className="card-details dabit-card">
                                <div className="card-number">
                                  <h4>XXXX - XXXX - XXXX - 1366</h4>
                                </div>
                                <div className="valid-detail">
                                  <div className="title">
                                    <span>valid</span>
                                    <span>thru</span>
                                  </div>
                                  <div className="date">
                                    <h3>05/21</h3>
                                  </div>
                                  <div className="primary">
                                    <span className="badge bg-pill badge-light">
                                      primary
                                    </span>
                                  </div>
                                </div>
                                <div className="name-detail">
                                  <div className="name">
                                    <h5>mark jecno</h5>
                                  </div>
                                  <div className="card-img">
                                    <img
                                      src="../assets/images/payment-icon/3.jpg"
                                      className="img-fluid blur-up lazyloaded"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="edit-card">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="javascript:void(0)"
                                >
                                  <i className="far fa-edit" /> edit
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProfile"
                                >
                                  <i className="far fa-minus-square" /> delete
                                </a>
                              </div>
                            </div>
                            <div className="edit-card-mobile">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#editCard"
                                href="javascript:void(0)"
                              >
                                <i className="far fa-edit" /> edit
                              </a>
                              <a href="javascript:void(0)">
                                <i className="far fa-minus-square" />
                                delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="dashboard-profile">
                        <div className="title">
                          <h2>My Profile</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <div className="profile-detail dashboard-bg-box">
                          <div className="dashboard-title">
                            <h3>Profile Name</h3>
                          </div>
                          <div className="profile-name-detail">
                            <div className="d-sm-flex align-items-center d-block">
                              <h3>Vicki E. Pope</h3>
                              <div className="product-rating profile-rating">
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
                              </div>
                            </div>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#editProfile"
                            >
                              Edit
                            </a>
                          </div>
                          <div className="location-profile">
                            <ul>
                              <li>
                                <div className="location-box">
                                  <i data-feather="map-pin" />
                                  <h6>Downers Grove, IL</h6>
                                </div>
                              </li>
                              <li>
                                <div className="location-box">
                                  <i data-feather="mail" />
                                  <h6>vicki.pope@gmail.com</h6>
                                </div>
                              </li>
                              <li>
                                <div className="location-box">
                                  <i data-feather="check-square" />
                                  <h6>Licensed for 2 years</h6>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="profile-description">
                            <p>
                              Residences can be classified by and how they are
                              connected to neighbouring residences and land. Different
                              types of housing tenure can be used for the same
                              physical type.
                            </p>
                          </div>
                        </div>
                        <div className="profile-about dashboard-bg-box">
                          <div className="row">
                            <div className="col-xxl-7">
                              <div className="dashboard-title mb-3">
                                <h3>Profile About</h3>
                              </div>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td>Gender :</td>
                                      <td>Female</td>
                                    </tr>
                                    <tr>
                                      <td>Birthday :</td>
                                      <td>21/05/1997</td>
                                    </tr>
                                    <tr>
                                      <td>Phone Number :</td>
                                      <td>
                                        <a href="javascript:void(0)">
                                          {" "}
                                          +91 846 - 547 - 210
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Address :</td>
                                      <td>549 Sulphur Springs Road, Downers, IL</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="dashboard-title mb-3">
                                <h3>Login Details</h3>
                              </div>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td>Email :</td>
                                      <td>
                                        <a href="javascript:void(0)">
                                          vicki.pope@gmail.com
                                          <span
                                            data-bs-toggle="modal"
                                            data-bs-target="#editProfile"
                                          >
                                            Edit
                                          </span>
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Password :</td>
                                      <td>
                                        <a href="javascript:void(0)">
                                          ●●●●●●
                                          <span
                                            data-bs-toggle="modal"
                                            data-bs-target="#editProfile"
                                          >
                                            Edit
                                          </span>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="col-xxl-5">
                              <div className="profile-image">
                                <img
                                  src="../assets/images/inner-page/dashboard-profile.png"
                                  className="img-fluid blur-up lazyload"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-security"
                      role="tabpanel"
                      aria-labelledby="pills-security-tab"
                    >
                      <div className="dashboard-privacy">
                        <div className="dashboard-bg-box">
                          <div className="dashboard-title mb-4">
                            <h3>Privacy</h3>
                          </div>
                          <div className="privacy-box">
                            <div className="d-flex align-items-start">
                              <h6>Allows others to see my profile</h6>
                              <div className="form-check form-switch switch-radio ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="redio"
                                  aria-checked="false"
                                />
                                <label className="form-check-label" htmlFor="redio" />
                              </div>
                            </div>
                            <p className="text-content">
                              all peoples will be able to see my profile
                            </p>
                          </div>
                          <div className="privacy-box">
                            <div className="d-flex align-items-start">
                              <h6>
                                who has save this profile only that people see my
                                profile
                              </h6>
                              <div className="form-check form-switch switch-radio ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="redio2"
                                  aria-checked="false"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="redio2"
                                />
                              </div>
                            </div>
                            <p className="text-content">
                              all peoples will not be able to see my profile
                            </p>
                          </div>
                          <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                            Save Changes
                          </button>
                        </div>
                        <div className="dashboard-bg-box mt-4">
                          <div className="dashboard-title mb-4">
                            <h3>Account settings</h3>
                          </div>
                          <div className="privacy-box">
                            <div className="d-flex align-items-start">
                              <h6>Deleting Your Account Will Permanently</h6>
                              <div className="form-check form-switch switch-radio ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="redio3"
                                  aria-checked="false"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="redio3"
                                />
                              </div>
                            </div>
                            <p className="text-content">
                              Once your account is deleted, you will be logged out and
                              will be unable to log in back.
                            </p>
                          </div>
                          <div className="privacy-box">
                            <div className="d-flex align-items-start">
                              <h6>Deleting Your Account Will Temporary</h6>
                              <div className="form-check form-switch switch-radio ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="redio4"
                                  aria-checked="false"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="redio4"
                                />
                              </div>
                            </div>
                            <p className="text-content">
                              Once your account is deleted, you will be logged out and
                              you will be create new account
                            </p>
                          </div>
                          <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                            Delete My Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* User Dashboard Section End */}
      </>
       
    )
}