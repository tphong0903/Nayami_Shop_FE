import React from 'react'

export default function AddUser() {
  return (
    <div className="page-body">
      {/* New User start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="title-header option-title">
                      <h5>Add New User</h5>
                    </div>
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                        >
                          Account
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                        >
                          Pernission
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                      >
                        <form className="theme-form theme-form-2 mega-form">
                          <div className="card-header-1">
                            <h5>Product Information</h5>
                          </div>
                          <div className="row">
                            <div className="mb-4 row align-items-center">
                              <label className="form-label-title col-lg-2 col-md-3 mb-0">
                                First Name
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Email Address
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="email" />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Password
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="password" />
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Confirm Password
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="password" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                      >
                        <div className="card-header-1">
                          <h5>Product Related Permition</h5>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Add Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Update Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Delete Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Apply Discount</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="card-header-1">
                          <h5>Category Related Permition</h5>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Add Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Update Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Delete Product</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-md-2 mb-0">Apply Discount</label>
                          <div className="col-md-9">
                            <form className="radio-section">
                              <label>
                                <input
                                  type="radio"
                                  name="opinion"
                                  defaultChecked=""
                                />
                                <i />
                                <span>Allow</span>
                              </label>
                              <label>
                                <input type="radio" name="opinion" />
                                <i />
                                <span>Deny</span>
                              </label>
                            </form>
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
      </div>
      {/* New User End */}
      {/* footer start */}
      <div className="container-fluid">
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
      </div>
      {/* footer end */}
    </div>

  )
}
