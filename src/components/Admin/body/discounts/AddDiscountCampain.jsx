
import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Rating } from '@mui/material';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import discountCampainItem from './DiscountCampainItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddDiscount from './AddDiscount';

export default function AddDiscountCampain() {
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
  const handleAddDiscountDetail = (discountDetailModel) => {
    setDiscountCampainModel(prev => ({
      ...prev,
      discountDetailDTOList: [...prev.discountDetailDTOList, discountDetailModel]
    }));
  };
  const handleDeleteOption = (index) => {
    setDiscountCampainModel(prev => ({
      ...prev,
      discountDetailDTOList: [...prev.discountDetailDTOList].filter((_, i) => i !== index)
    }));
  }
  const handleEditDiscountDetail = (discountDetail) => {
    setSelectedDiscountDetail(discountDetail);
    setOpenModalEdit(true);
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
                                Coupon Title
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                Coupon Code
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <Editor
                                  // initialValue={editorRef.current ? editorRef.current.getInstance().setHTML(formData.description) : ''}
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
                                Start Date
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="date" />
                              </div>
                            </div>
                            <div className="mb-4 row align-items-center">
                              <label className="col-lg-2 col-md-3 col-form-label form-label-title">
                                End Date
                              </label>
                              <div className="col-md-9 col-lg-10">
                                <input className="form-control" type="date" />
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
                      <i className="ri-add-line me-2" /> Add Another Option
                    </button>
                    {openModalEdit && (<AddDiscount discountDetail={selectedDiscountDetail} openModalEdit={openModalEdit} setOpenModalEdit={setOpenModalEdit} handleAddDiscountDetail={handleAddDiscountDetail} />)}
                    {openModal && (<AddDiscount openModal={openModal} setOpenModal={setOpenModal} handleAddDiscountDetail={handleAddDiscountDetail} />)}
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

