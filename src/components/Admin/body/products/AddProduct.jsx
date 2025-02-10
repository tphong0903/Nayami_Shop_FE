

export default function AddProduct() {
  return (
    <div className="page-body">
      {/* New Product Add Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product Information</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Product Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Product Name"
                          />
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Product Type
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option disabled="">Static Menu</option>
                            <option>Simple</option>
                            <option>Classified</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Category
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option disabled="">Category Menu</option>
                            <option>Electronics</option>
                            <option>TV &amp; Appliances</option>
                            <option>Home &amp; Furniture</option>
                            <option>Another</option>
                            <option>Baby &amp; Kids</option>
                            <option>Health, Beauty &amp; Perfumes</option>
                            <option>Uncategorized</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Subcategory
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option disabled="">Subcategory Menu</option>
                            <option>Ethnic Wear</option>
                            <option>Ethnic Bottoms</option>
                            <option>Women Western Wear</option>
                            <option>Sandels</option>
                            <option>Shoes</option>
                            <option>Beauty &amp; Grooming</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Brand
                        </label>
                        <div className="col-sm-9">
                          <select className="js-example-basic-single w-100">
                            <option disabled="">Brand Menu</option>
                            <option value="puma">Puma</option>
                            <option value="hrx">HRX</option>
                            <option value="roadster">Roadster</option>
                            <option value="zara">Zara</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Unit
                        </label>
                        <div className="col-sm-9">
                          <select className="js-example-basic-single w-100">
                            <option disabled="">Unit Menu</option>
                            <option>Kilogram</option>
                            <option>Pieces</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Tags
                        </label>
                        <div className="col-sm-9">
                          <div className="bs-example">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type tag & hit enter"
                              id="#inputTag"
                              data-role="tagsinput"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Exchangeable
                        </label>
                        <div className="col-sm-9">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="switch-state" />
                          </label>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Refundable
                        </label>
                        <div className="col-sm-9">
                          <label className="switch">
                            <input type="checkbox" defaultChecked="" />
                            <span className="switch-state" />
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Description</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="row">
                        <div className="col-12">
                          <div className="row">
                            <label className="form-label-title col-sm-3 mb-0">
                              Product Description
                            </label>
                            <div className="col-sm-9">
                              <div id="editor" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product Images</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Images
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control form-choose"
                            type="file"
                            id="formFile"
                            multiple=""
                          />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Thumbnail Image
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control form-choose"
                            type="file"
                            id="formFileMultiple1"
                            multiple=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product Videos</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Video Provider
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option>Vimeo</option>
                            <option>Youtube</option>
                            <option>Dailymotion</option>
                            <option>Vimeo</option>
                          </select>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Video Link
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Video Link"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product variations</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Option Name
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option>Color</option>
                            <option>Size</option>
                            <option>Material</option>
                            <option>Style</option>
                          </select>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Option Value
                        </label>
                        <div className="col-sm-9">
                          <div className="bs-example">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type tag & hit enter"
                              id="#inputTag"
                              data-role="tagsinput"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <a href="#" className="add-option">
                      <i className="ri-add-line me-2" /> Add Another Option
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Shipping</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Weight (kg)
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Weight"
                          />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Dimensions (cm)
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option>Length</option>
                            <option>Width</option>
                            <option>Height</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product Price</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 form-label-title">price</label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="number"
                            placeholder={0}
                          />
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 form-label-title">
                          Compare at price
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="number"
                            placeholder={0}
                          />
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 form-label-title">
                          Cost per item
                        </label>
                        <div className="col-sm-5">
                          <input
                            className="form-control"
                            type="number"
                            placeholder={0}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label>Margin:</label>
                          <span>25%</span>
                        </div>
                        <div className="col-sm-2">
                          <label>Profit:</label>
                          <span>$5</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Product Inventory</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          SKU
                        </label>
                        <div className="col-sm-9">
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">
                          Stock Status
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="js-example-basic-single w-100"
                            name="state"
                          >
                            <option>In Stock</option>
                            <option>Out Of Stock</option>
                            <option>On Backorder</option>
                          </select>
                        </div>
                      </div>
                    </form>
                    <table className="table variation-table table-responsive-sm">
                      <thead>
                        <tr>
                          <th scope="col">Variant</th>
                          <th scope="col">Price</th>
                          <th scope="col">SKU</th>
                          <th scope="col">Quantity</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Red</td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <ul className="order-option">
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-toggle="modal"
                                  data-target="#deleteModal"
                                >
                                  <i className="ri-delete-bin-line" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Blue</td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              placeholder={0}
                            />
                          </td>
                          <td>
                            <ul className="order-option">
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-toggle="modal"
                                  data-target="#deleteModal"
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
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Link Products</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Upsells
                        </label>
                        <div className="col-sm-9">
                          <input className="form-control" type="search" />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Cross-Sells
                        </label>
                        <div className="col-sm-9">
                          <input className="form-control" type="search" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Search engine listing</h5>
                    </div>
                    <div className="seo-view">
                      <span className="link">https://fastkart.com</span>
                      <h5>
                        Buy fresh vegetables &amp; Fruits online at best price
                      </h5>
                      <p>
                        Online Vegetable Store - Buy fresh vegetables &amp; Fruits
                        online at best prices. Order online and get free delivery.
                      </p>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">
                          Page title
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Fresh Fruits"
                          />
                        </div>
                      </div>
                      <div className="mb-4 row">
                        <label className="form-label-title col-sm-3 mb-0">
                          Meta description
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            rows={3}
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="form-label-title col-sm-3 mb-0">
                          URL handle
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            type="search"
                            placeholder="https://fastkart.com/fresh-veggies"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Product Add End */}
      {/* footer Start */}
      <div className="container-fluid">
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
            </div>
          </div>
        </footer>
      </div>
      {/* footer En */}
    </div>

  )
}
