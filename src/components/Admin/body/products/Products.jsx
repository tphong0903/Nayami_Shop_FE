
export default function Products() {
  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title d-sm-flex d-block">
                  <h5>Products List</h5>
                  <div className="right-options">
                    <ul>
                      <li>
                        <a href="javascript:void(0)">import</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Export</a>
                      </li>
                      <li>
                        <a className="btn btn-solid" href="add-new-product.html">
                          Add Product
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="table-responsive">
                    <table
                      className="table all-package theme-table table-product"
                      id="table_id"
                    >
                      <thead>
                        <tr>
                          <th>Product Image</th>
                          <th>Product Name</th>
                          <th>Category</th>
                          <th>Current Qty</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Option</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/1.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Aata Buscuit</td>
                          <td>Buscuit</td>
                          <td>12</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-danger">
                            <span>Pending</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/2.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Cold Brew Coffee</td>
                          <td>Drinks</td>
                          <td>10</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/3.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Peanut Butter Cookies</td>
                          <td>Cookies</td>
                          <td>9</td>
                          <td className="td-price">$86.35</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/4.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Wheet Flakes</td>
                          <td>Flakes</td>
                          <td>8</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-danger">
                            <span>Pending</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/5.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Potato Chips</td>
                          <td>Chips</td>
                          <td>23</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/6.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Tuwer Dal</td>
                          <td>Dals</td>
                          <td>50</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/7.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Almond Milk</td>
                          <td>Milk</td>
                          <td>25</td>
                          <td className="td-price">$121.43</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/11.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Wheat Bread</td>
                          <td>Breads</td>
                          <td>6</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-danger">
                            <span>Pending</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/8.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Dog Food</td>
                          <td>Pet Food</td>
                          <td>11</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/9.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Fresh Meat</td>
                          <td>Meats</td>
                          <td>18</td>
                          <td className="td-price">$95.97</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-image">
                              <img
                                src="assets/images/product/10.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>Classic Coffee</td>
                          <td>Coffee</td>
                          <td>25</td>
                          <td className="td-price">$86.35</td>
                          <td className="status-close">
                            <span>Approved</span>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <a href="order-detail.html">
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <i className="ri-pencil-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container-fluid Ends*/}
      <div className="container-fluid">
        {/* footer start*/}
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
      </div>
    </div>

  )
}
