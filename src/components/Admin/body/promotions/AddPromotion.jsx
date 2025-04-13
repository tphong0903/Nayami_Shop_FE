import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddPromotion(view) {
    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        displayStatus: false,
        promotionImages: []
    });
    const [selectedImage, setSelectedImage] = useState([])
    const navigate = useNavigate();
    const isEditMode = false;
    const { id } = useParams();

    useEffect(() => {
        updateInfo()
    }, []);

    // useEffect(() => {
    //     console.log(formData)
    // }, [formData]);

    const updateInfo = async () => {
        if (id) {
            try {
                const res = await axios.get(`/api/promotions/${id}`)
                setFormData(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleImageChange = (e) => {
        const fileList = e.target.files;
        console.log(e.target.files)
        if (!fileList)
            return
        const imageData = []
        for (var f of fileList) {
            imageData.push(f)
        }
        setSelectedImage(imageData)
    }

    const createPromotion = async () => {
        const uploadedImages = [];
        console.log(formData)

        if (!id) {
            try {
                for (const f of selectedImage) {
                    const formData = new FormData();
                    formData.append("file", f);
                    formData.append("upload_preset", "electric_devices");
                    formData.append("cloud_name", "dwijkd4xi");

                    const res = await fetch(
                        "https://api.cloudinary.com/v1_1/dwijkd4xi/image/upload",
                        {
                            method: "POST",
                            body: formData,
                        }
                    );

                    const returned_data = await res.json();
                    uploadedImages.push({ url: returned_data.url });
                }
            } catch (error) {
                console.log(error)
            }

            setFormData(prevState => {
                const updatedFormData = {
                    ...prevState,
                    promotionImages: [...prevState.promotionImages, ...uploadedImages]
                };

                axios.post("/api/promotions", updatedFormData)
                    .then(api_response => {
                        console.log(api_response);
                        navigate("/admin/promotions");
                    })
                    .catch(err => console.log(err));

                return updatedFormData;
            });
        }
        else {
            axios.put(`/api/promotions/${id}`, formData)
                .then(api_response => {
                    console.log(api_response);
                    navigate("/admin/promotions");
                })
                .catch(err => console.log(err));
        }

    }


    return (
        <>
            <div className="page-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm-8 m-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header-2">
                                                <h5>Thông tin quảng cáo</h5>
                                            </div>
                                            <form className="theme-form theme-form-2 mega-form">
                                                <div className="mb-4 row align-items-center">
                                                    <label className="form-label-title col-sm-3 mb-0">
                                                        Tên quảng cáo
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            value={formData.title}
                                                            placeholder="Tên quảng cáo"
                                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <label className="form-label-title col-sm-3 mb-0">
                                                        Mô tả quảng cáo
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            value={formData.description}
                                                            placeholder="Mô tả quảng cáo"
                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-sm-3 col-form-label form-label-title">
                                                        Ngày bắt đầu
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                            value={formData.startDate}
                                                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-sm-3 col-form-label form-label-title">
                                                        Ngày kết thúc
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                            value={formData.endDate}
                                                            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-sm-3 col-form-label form-label-title">
                                                        Hiển thị
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Checkbox color='success' checked={formData.displayStatus} onChange={(e) => setFormData({ ...formData, displayStatus: e.target.checked })} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-header-2">
                                                <h5>Hình ảnh quảng cáo</h5>
                                            </div>
                                            <form className="theme-form theme-form-2 mega-form">
                                                <div className="mb-4 row align-items-center">
                                                    <label className="col-sm-3 col-form-label form-label-title">
                                                        Hình ảnh
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
                                                            {formData.promotionImages.length != 0
                                                                ? formData.promotionImages.map((image, index) => (
                                                                    <img
                                                                        key={index}
                                                                        src={image.url}
                                                                        alt={`Selected ${index}`}
                                                                        className="rounded"
                                                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                                    />
                                                                ))
                                                                : <></>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-sm-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary me-3" onClick={createPromotion}>
                                                        {id ? 'Lưu' : 'Thêm'}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={() => navigate('/admin/promotions')}
                                                    >
                                                        Quay lại
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
        </>
    )
}