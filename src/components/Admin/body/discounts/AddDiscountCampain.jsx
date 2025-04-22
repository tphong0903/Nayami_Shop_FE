
import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddDiscount from './AddDiscount';

export default function AddDiscountCampain() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const editorRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [selectedDiscountDetail, setSelectedDiscountDetail] = useState(null);
  const [discountCampainModel, setDiscountCampainModel] = useState({
    id: null,
    name: '',
    description: '',
    active: null,
    startDate: null,
    endDate: null,
    discountDetailDTOList: [],

  });
  useEffect(() => {

  }, [discountCampainModel])
  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`/api/discounts/${id}`)
        .then((response) => {
          setDiscountCampainModel(response.data.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải danh sách thương hiệu.', 'error')
        })
    }
  }, [id, isEditMode])
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setHTML(discountCampainModel.description);
    }
  }, [discountCampainModel.description]);
  const handleAddDiscountDetail = (discountDetailModel) => {
    setDiscountCampainModel(prev => ({
      ...prev,
      discountDetailDTOList: [...prev.discountDetailDTOList, discountDetailModel]
    }));
  };

  const handleUpdateDiscountDetail = (discountDetailModel) => {
    setDiscountCampainModel(prev => ({
      ...prev,
      discountDetailDTOList: prev.discountDetailDTOList
        .filter(detail => detail !== selectedDiscountDetail)
        .concat(discountDetailModel)
    }));

    setSelectedDiscountDetail(null);
  };
  const handleDeleteOption = (index) => {
    setDiscountCampainModel(prev => ({
      ...prev,
      discountDetailDTOList: [...prev.discountDetailDTOList].filter((_, i) => i !== index)
    }));
  }
  const handleEditDiscountDetail = (discountDetail) => {
    setSelectedDiscountDetail(discountDetail);
    setOpenModalEdit(v => !v);
  };
  const handleSave = async () => {
    const editorContent = editorRef.current?.getInstance().getMarkdown() || '';
    setDiscountCampainModel(prev => ({ ...prev, description: editorContent }))

    try {
      const response = await axios.post('/api/discounts', JSON.stringify(discountCampainModel), {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Khuyến mãi đã được lưu thành công! 🎉',
          timer: 3000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/admin/discounts');
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
  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="title-header option-title">
                      <h5>Chiến dịch khuyến mãi</h5>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                      >
                        <form className="theme-form theme-form-2 mega-form">

                          <div className="row">
                            <div className="mb-4 row align-items-center">
                              <label className="form-label-title col-lg-2 col-md-3 mb-0">
                                Tên khuyến mãi
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="text" value={discountCampainModel.name} onChange={(e) => setDiscountCampainModel(v => ({ ...v, name: e.target.value }))} />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Mô tả khuyến mãi
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <Editor
                                  initialValue=""
                                  initialEditType="wysiwyg"
                                  previewStyle="vertical"
                                  height="400px"
                                  useCommandShortcut={true}
                                  ref={editorRef}
                                />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Ngày bắt đầu
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="date" value={discountCampainModel.startDate} onChange={(e) => setDiscountCampainModel(v => ({ ...v, startDate: e.target.value }))} />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Ngày kết thúc
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="date" value={discountCampainModel.endDate} onChange={(e) => setDiscountCampainModel(v => ({ ...v, endDate: e.target.value }))} />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header-2">
                      <h5>Khuyến mãi</h5>
                    </div>
                    <form className="theme-form theme-form-2 mega-form">
                      {discountCampainModel.discountDetailDTOList.map((option, index) => (
                        <div key={index} className="mb-3">
                          <div className="mb-2 row align-items-center">
                            <div className="col-sm-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Option Name"
                                value={option.percentage}
                                readOnly
                              />
                            </div>
                            <div className="col-sm-5">
                              <EditIcon className='m-3' onClick={() => handleEditDiscountDetail(option)} />
                              <DeleteIcon className='m-3' onClick={() => handleDeleteOption(index)} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </form>
                    {/* <button onClick={addOption} className="btn btn-primary mt-3">
                      <i className="ri-add-line me-2" /> Add Another Option
                    </button> */}
                    <button onClick={() => setOpenModal(v => !v)} className="btn btn-primary mt-3">
                      <i className="ri-add-line me-2" /> Thêm mã khuyến mãi
                    </button>
                    {openModalEdit && (<AddDiscount discountDetail={selectedDiscountDetail} openModal={openModalEdit} setOpenModal={setOpenModalEdit} handleAddDiscountDetail={handleAddDiscountDetail} handleUpdateDiscountDetail={handleUpdateDiscountDetail} isEdit={1} />)}
                    {openModal && (<AddDiscount discountDetail={{ percentage: '', productID: [] }} openModal={openModal} setOpenModal={setOpenModal} handleAddDiscountDetail={handleAddDiscountDetail} isEdit={0} />)}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-sm-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary me-3" onClick={handleSave}>
                          {isEditMode ? 'Cập nhật' : 'Thêm'}
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => navigate('/admin/discounts')}
                        >
                          Cancel
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
  )
}

