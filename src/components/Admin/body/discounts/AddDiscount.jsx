import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import '@toast-ui/editor/dist/toastui-editor.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import $ from 'jquery'
import 'datatables.net-bs5'
import '/src/assets/Admin/css/customPagination.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '85%',
  borderRadius: '25px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddDiscount({ discountDetail, openModal, setOpenModal, handleAddDiscountDetail }) {
  const [products, setProducts] = useState([])
  const [discountDetailDTO, setDiscountDetailDTO] = useState({ percentage: '', productID: [] })
  const tableRef = useRef(null)
  const [listProducts, setListProducts] = useState([])
  const [percent, setPercent] = useState('');

  const addListProducts = (id) => {
    setListProducts((prevList) => {
      const newList = [...prevList];
      const index = newList.indexOf(id);
      if (index !== -1) {
        newList.splice(index, 1);
      } else {
        newList.push(id);
      }
      setDiscountDetailDTO(prev => ({ ...prev, productID: newList }));
      return newList;
    });
  };

  const saveDiscount = () => {
    handleAddDiscountDetail(discountDetailDTO)
    setOpenModal(v => !v)
  }
  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => {
        setProducts(response.data.data)
      })
      .catch((error) => {
        Swal.fire('Lỗi!', 'Không thể tải danh sách sản phẩm.', 'error')
      })
    if (discountDetail) {
      setDiscountDetailDTO({
        percentage: discountDetail.percentage || '',
        productID: discountDetail.productID || [],
      });
    }
    console.log(discountDetail)
    console.log(discountDetailDTO)
  }, [discountDetailDTO]);

  useEffect(() => {
    if (products.length > 0) {
      $(tableRef.current).DataTable()
    }
  }, [products])

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(v => !v)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="card-body">
          <div className="title-header option-title">
            <h5>Khuyến mãi</h5>
          </div>
          <div className=" row align-items-center">
            <div className="col-sm-4">
              <label className="col-form-label form-label-title">
                Phần trăm
              </label>

            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="%"
                value={discountDetailDTO.percentage}
                onChange={(e) => setDiscountDetailDTO({
                  ...discountDetailDTO,
                  percentage: e.target.value
                })}
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="title-header option-title">
            <h5>Product List</h5>

          </div>
          <div>
            <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table
                ref={tableRef}
                className="table all-package coupon-list-table table-hover theme-table"
                id="table_id"
              >
                <thead>
                  <tr>
                    <th>
                      {/* <span className="form-check user-checkbox m-0 p-0">
                        <input
                          className="checkbox_animated checkall"
                          type="checkbox"
                          defaultValue=""
                        />
                      </span> */}
                    </th>
                    <th>Tên sản phẩm</th>
                    <th>Trạng thái</th>
                    <th>Danh mục</th>
                    <th>Thương hiệu</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <span className="form-check user-checkbox m-0 p-0">
                          <input
                            onChange={() => addListProducts(product.id)}
                            className="checkbox_animated check-it"
                            checked={listProducts.includes(product.id)}
                            type="checkbox"
                            defaultValue=""
                          />
                        </span>
                      </td>
                      <td>{product.name}</td>
                      <td className={product.displayStatus === false ? 'status-danger' : 'status-close'}>
                        <span>{product.displayStatus === false ? 'Inactive' : 'Active'}</span>
                      </td>
                      <td>{product.categoryDTO.categoryName}</td>
                      <td>{product.brandDTO.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-12 d-flex justify-content-end m-3">
              <button type="submit" className="btn btn-primary me-3" onClick={() => saveDiscount()}>Save
                {/* {isEditMode ? 'Update Product' : 'Add Product'} */}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenModal(v => !v)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
