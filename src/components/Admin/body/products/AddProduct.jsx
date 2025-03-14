
import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Rating } from '@mui/material';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddProduct() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [listBrands, setBrands] = useState([])
  const [listCategorys, setCategorys] = useState([])
  const [listDisocunts, setDiscouts] = useState([])
  const [images, setImages] = useState([]);
  const editorRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    brandDTO: {
      id: null,
      name: '',
    },
    categoryDTO: {
      id: null,
      categoryName: '',
    },
    discountDTO: null,
    ratingAvg: 0,
    quantity: 0,
    originalPrice: 0,
    unitPrice: 0,
    displayStatus: false,
    productStatus: '',
    listImage: [],
    configDTO: {
      category: null,
      listOtherConfigDTO: [],
    },
  });

  const handleSave = async () => {
    const editorContent = editorRef.current?.getInstance().getMarkdown() || '';
    const updatedFormData = {
      ...formData,
      description: editorContent
    };
    const uploadData = new FormData();
    uploadData.append('productDTO', JSON.stringify(updatedFormData));

    images.forEach(file => uploadData.append('files', file));

    try {
      const response = await axios.post('/api/products', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data;' }
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Sản phẩm đã được lưu thành công! 🎉',
          timer: 3000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/admin/products');
        }, 3000);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Có lỗi xảy ra, vui lòng thử lại! ❌',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };
  const addOption = () => {
    setFormData(prev => ({
      ...prev,
      configDTO: {
        ...prev.configDTO,
        listOtherConfigDTO: [...prev.configDTO.listOtherConfigDTO, { id: '', name: '', value: '' }]
      }
    }));
  };

  const handleChange = (index, field, value) => {
    setFormData(prev => {
      const newOptions = [...prev.configDTO.listOtherConfigDTO];
      newOptions[index] = { ...newOptions[index], [field]: value };
      return {
        ...prev,
        configDTO: {
          ...prev.configDTO,
          listOtherConfigDTO: newOptions
        }
      };
    });
  };

  const handleDeleteOption = (index) => {
    setFormData(prev => ({
      ...prev,
      configDTO: {
        ...prev.configDTO,
        listOtherConfigDTO: prev.configDTO.listOtherConfigDTO.filter((_, i) => i !== index)
      }
    }));
  };
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      brandDTO: {
        id: null,
        name: '',
      },
      categoryDTO: {
        id: null,
        categoryName: '',
      },
      discountDTO: null,
      ratingAvg: 0,
      quantity: 0,
      originalPrice: 0,
      unitPrice: 0,
      displayStatus: false,
      productStatus: '',
      listImage: [],
      configDTO: {
        category: null,
        listOtherConfigDTO: [],
      },
    });

    setImages([]);

    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown('');
    }
  };

  useEffect(() => {
    setLoading(true);
    resetForm()
    axios
      .get('/api/brands')
      .then((response) => {
        setBrands(response.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách thương hiệu.', 'error')
      })
    axios
      .get('/api/categories')
      .then((response) => {
        setCategorys(response.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách danh mục.', 'error')
      })
    // axios
    //   .get('/api/discountdetails')
    //   .then((response) => {
    //     listCategorys(response.data.data)
    //   })
    //   .catch((error) => {
    //     Swal.fire('Lỗi!', 'Không thể tải danh sách danh mục.', 'error')
    //   })
    if (isEditMode) {
      axios
        .get(`/api/products/${id}`)
        .then((response) => {
          setFormData(response.data.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải danh sách thương hiệu.', 'error')
        })
    }
    setLoading(false);
  }, [id, isEditMode])

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return
    };

    const imageArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData((formData) => ({ ...formData, listImage: [...imageArray] }));

    const fileArray = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setImages((prevImages) => [...prevImages, ...fileArray]);
  };

  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {loading ? <div className="loader-wrapper">Loading...</div> :
                <div className="col-sm-8 m-auto">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header-2">
                        <h5>Product Information</h5>
                      </div>
                      <form className="theme-form theme-form-2 mega-form">
                        <div className="mb-4 row align-items-center">
                          <label className="form-label-title col-sm-3 mb-0">
                            Tên sản phẩm
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              type="text"
                              value={formData.name}
                              placeholder="Product Name"
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Trạng thái sản phẩm
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="js-example-basic-single w-100"
                              value={formData.productStatus}
                              name="state"
                              onChange={(e) => setFormData({ ...formData, productStatus: e.target.value })}
                            >
                              <option disabled="">Static Menu</option>
                              <option value={'COMING_SOON'}>Coming soon</option>
                              <option value={'ON_SELL'}>Còn kinh doanh</option>
                              <option value={'OUT_OF_STOCK'}>Hết hàng</option>
                              <option value={'STOP_SELLING'}>Ngừng kinh doanh</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Danh mục
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="js-example-basic-single w-100"
                              name="categoryName"
                              value={formData.categoryDTO.categoryName}
                              onChange={(e) => setFormData({ ...formData, categoryDTO: { categoryName: e.target.value } })}

                            >
                              <option disabled="">Category Menu</option>
                              {listCategorys.map(cate => (<option key={cate.id}>{cate.categoryName}</option>))}
                            </select>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Khuyến mãi
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="js-example-basic-single w-100"
                              name="discountName"
                            // onChange={(e) => setFormData({ ...formData, categoryDTO: { categoryName: e.target.value } })}
                            >
                              <option disabled="">Discount Menu</option>
                              {/* {listCategorys.map(cate => (<option key={cate.id}>{cate.categoryName}</option>))} */}
                            </select>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Thương hiệu
                          </label>
                          <div className="col-sm-9">
                            <select className="js-example-basic-single w-100" name="brandName"
                              onChange={(e) => setFormData({ ...formData, brandDTO: { name: e.target.value } })}
                              value={formData.brandDTO.name}>
                              <option disabled="">Brand Menu</option>
                              {listBrands.map(brand => (<option key={brand.id}>{brand.name}</option>))}
                            </select>
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Giá gốc
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                              value={formData.originalPrice}
                              className="form-control"
                              placeholder="VND"
                              id="inputOriginalPrice"
                              data-role="tagsinput"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Giá bán
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                              value={formData.unitPrice}
                              className="form-control"
                              placeholder="VND"
                              id="inputUnitPrice"
                              data-role="tagsinput"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                          <label className="col-sm-3 col-form-label form-label-title">
                            Số lượng
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                              value={formData.quantity}
                              className="form-control"
                              placeholder="0"
                              id="inputQuantity"
                              data-role="tagsinput"
                              required
                            />
                          </div>
                        </div>
                        {isEditMode &&
                          (
                            <div className="mb-4 row align-items-center">
                              <label className="col-sm-3 col-form-label form-label-title">
                                Đánh giá sản phẩm
                              </label>
                              <div className="col-sm-9">
                                <Rating name="read-only" value={formData.ratingAvg} readOnly />
                              </div>
                            </div>
                          )}
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header-2">
                        <h5>Description</h5>
                      </div>
                      <Editor
                        initialValue={editorRef.current ? editorRef.current.getInstance().setHTML(formData.description) : ''}
                        initialEditType="wysiwyg"
                        previewStyle="vertical"
                        height="400px"
                        useCommandShortcut={true}
                        ref={editorRef}
                      />
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
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleImageChange}
                              className="form-control"
                            />
                            <div className="mt-3 d-flex flex-wrap gap-2">
                              {formData.listImage.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`Selected ${index}`}
                                  className="rounded"
                                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-header-2">
                        <h5>Product Variations</h5>
                      </div>
                      <form className="theme-form theme-form-2 mega-form">
                        {formData.configDTO.listOtherConfigDTO.map((option, index) => (
                          <div key={index} className="mb-3">
                            <div className="mb-2 row align-items-center">
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Option Name"
                                  value={option.name}
                                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                                />
                              </div>
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Option Value"
                                  value={option.value}
                                  onChange={(e) => handleChange(index, 'value', e.target.value)}
                                />
                              </div>
                              <div className="col-sm-2">
                                <DeleteIcon onClick={() => handleDeleteOption(index)} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </form>
                      <button onClick={addOption} className="btn btn-primary mt-3">
                        <i className="ri-add-line me-2" /> Add Another Option
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-sm-12 d-flex justify-content-end">
                          <button type="submit" className="btn btn-primary me-3" onClick={handleSave}>
                            {isEditMode ? 'Update Product' : 'Add Product'}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate('/admin/products')}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
