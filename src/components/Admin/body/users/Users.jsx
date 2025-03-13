import React from 'react'

export default function Users() {
  return (
    <div className="page-body">
      {/* All User Table Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="title-header option-title">
                  <h5>All Users</h5>
                  <form className="d-inline-flex">
                    <a
                      href="add-new-user.html"
                      className="align-items-center btn btn-theme d-flex"
                    >
                      <i data-feather="plus" />
                      Add New
                    </a>
                  </form>
                </div>
                <div className="table-responsive table-product">
                  <table className="table all-package theme-table" id="table_id">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-image">
                            <img
                              src="assets/images/users/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Everett C. Green</span>
                            <span>Essex Court</span>
                          </div>
                        </td>
                        <td>+ 802 - 370 - 2430</td>
                        <td>EverettCGreen@rhyta.com</td>
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
                              src="assets/images/users/2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Caroline L. Harris</span>
                            <span>Davis Lane</span>
                          </div>
                        </td>
                        <td>+ 720 - 276 - 9403</td>
                        <td>CarolineLHarris@rhyta.com</td>
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
                              src="assets/images/users/3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Lucy j. Morile</span>
                            <span>Clifton</span>
                          </div>
                        </td>
                        <td>+ 351 - 756 - 6549</td>
                        <td>LucyMorile456@gmail.com</td>
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
                              src="assets/images/users/4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Jennifer A. Straight</span>
                            <span>Brunswick</span>
                          </div>
                        </td>
                        <td>+ 912 - 265 - 1550</td>
                        <td>JenniferAStraight@rhyta.com</td>
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
                              src="assets/images/users/5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Louise J. Stiles</span>
                            <span>Indianapolis</span>
                          </div>
                        </td>
                        <td>+ 304 - 921 - 8122</td>
                        <td>KevinAMillett@jourrapide.com</td>
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
                              src="assets/images/users/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Scott T. Thomas</span>
                            <span>Kotzebue</span>
                          </div>
                        </td>
                        <td>+ 907 - 442 - 8122</td>
                        <td>scott.thomas@packiu.com</td>
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
                              src="assets/images/users/2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Everett C. Green</span>
                            <span>Essex Court</span>
                          </div>
                        </td>
                        <td>+ 218 - 244 - 7026</td>
                        <td>KevinAMillett@jourrapide.com</td>
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
                              src="assets/images/users/3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Dillon J. Bradshaw</span>
                            <span>Redbud Drive</span>
                          </div>
                        </td>
                        <td>+ 347 - 649 - 7283</td>
                        <td>DillonJBradshaw@teleworm.us</td>
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
                              src="assets/images/users/4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Lorna M. Bonner</span>
                            <span>Broadway Street</span>
                          </div>
                        </td>
                        <td>+ 843 - 765 - 6166</td>
                        <td>LornaMBonner@teleworm.us</td>
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
                              src="assets/images/users/5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Everett C. Green</span>
                            <span>Essex Court</span>
                          </div>
                        </td>
                        <td>+ 802 - 370 - 2430</td>
                        <td>EverettCGreen@rhyta.com</td>
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
                              src="assets/images/users/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="user-name">
                            <span>Lorraine D. McDowell</span>
                            <span>Woodland Terrace</span>
                          </div>
                        </td>
                        <td>+ 916 - 942 - 7555</td>
                        <td>LorraineDMcDowell@dayrep.com</td>
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
      {/* All User Table Ends*/}
      <div className="container-fluid">
        {/* footer start*/}
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
        {/* footer end*/}
      </div>
    </div>

  )
}
