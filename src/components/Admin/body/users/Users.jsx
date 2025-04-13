import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Users() {
  const [users,getAllUsers] = useState([]);
  useEffect(() => {
    fetchUsers()
  })
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users/get-all-users');
      console.log(response.data.data);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  }


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
