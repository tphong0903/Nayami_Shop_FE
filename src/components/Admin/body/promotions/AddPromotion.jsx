import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

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
    const [interactionImages, setInteractionImages] = useState([])
    const navigate = useNavigate();
    const isEditMode = false;
    const { id } = useParams();

    useEffect(() => {
        updateInfo()
    }, []);

    // useEffect(() => {
    //     console.log(formData)
    //     console.log(selectedImage)
    //     console.log(interactionImages)
    // }, [formData, selectedImage]);

    const updateInfo = async () => {
        if (id) {
            try {
                const res = await axios.get(`/api/promotions/${id}`)
                setFormData(res.data.data)
                setInteractionImages(res.data.data.promotionImages)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleRemoveImage = (itemName, itemURL) => {
        let objFound;
        if (!itemName) {
            objFound = interactionImages.find(item => item.url == itemURL)
        }
        else {
            objFound = interactionImages.find(item => item.name == itemName)
        }
        if (Object.keys(objFound).length > 2) {
            Swal.fire({
                title: "Bạn muốn gỡ ảnh này (đã lưu)?",
                // text: 'Sau khi xoá sẽ không thể khôi phục!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Gỡ',
                cancelButtonText: 'Hủy'
            })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        await axios.post('/api/images', { url: objFound.url })
                            .then(() => {
                                Swal.fire({
                                    title: "Gỡ ảnh thành công",
                                    // text: 'Sau khi xoá sẽ không thể khôi phục!',
                                    icon: 'success',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    timer: 1500
                                })
                                    .then(() => {
                                        window.location.reload();
                                    })
                            })
                    }
                })
        }
        else {
            setSelectedImage(prev => prev.filter((item) => item.name != itemName))
            setInteractionImages(prev => prev.filter((item) => item.name != itemName))
        }

    }

    const handleImageChange = (event) => {
        const fileList = Array.from(event.target.files);
        if (!fileList)
            return
        const imageData = []
        for (var f of fileList) {
            imageData.push(f)
        }
        setSelectedImage(imageData)

        const imagePromises = fileList.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve({
                        name: file.name,
                        url: e.target.result
                    });
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then(images => {
            setInteractionImages(prev => [...prev, ...images])
        });

        event.target.value = null
    }

    const createPromotion = async () => {
        const uploadedImages = [];
        console.log(formData)

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

        if (!id) {
            setFormData(prevState => {
                const updatedFormData = {
                    ...prevState,
                    promotionImages: [...prevState.promotionImages, ...uploadedImages]
                };

                axios.post("/api/promotions", updatedFormData)
                    .then(api_response => {
                        Swal.fire({
                            title: "Thêm quảng cáo thành công",
                            icon: "success",
                            timer: 3000
                        })
                        navigate("/admin/promotions");
                    })
                    .catch(err => console.log(err));

                return updatedFormData;
            });
        }
        else {
            setFormData(prevState => {
                const updatedFormData = {
                    ...prevState,
                    promotionImages: [...prevState.promotionImages, ...uploadedImages]
                };

                console.log(formData)

                // axios.post("/api/promotions", updatedFormData)
                //     .then(api_response => {
                //         Swal.fire({
                //             title: "Thêm quảng cáo thành công",
                //             icon: "success",
                //             timer: 3000
                //         })
                //         navigate("/admin/promotions");
                //     })
                //     .catch(err => console.log(err));

                axios.put(`/api/promotions/${id}`, updatedFormData)
                    .then(api_response => {
                        console.log(api_response);
                        navigate("/admin/promotions");
                    })
                    .catch(err => console.log(err));

                return updatedFormData;
            });

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
                                                            {interactionImages?.length > 0
                                                                ? interactionImages.map((image, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="position-relative"
                                                                        style={{ width: '100px', height: '100px' }}
                                                                    >
                                                                        <img
                                                                            src={image?.url}
                                                                            alt={image?.name}
                                                                            className="rounded"
                                                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                                        />
                                                                        <a
                                                                            href="#"
                                                                            className="text-danger"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                handleRemoveImage(image?.name, image?.url)
                                                                            }}
                                                                            style={{
                                                                                position: 'absolute',
                                                                                top: '2px',
                                                                                right: '2px',
                                                                            }}
                                                                        >
                                                                            <i className="ri-delete-bin-5-fill" />
                                                                        </a>
                                                                        {/* <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveImage(index)}
                                                                            className="btn-close"
                                                                            aria-label="Close"
                                                                            style={{
                                                                                position: 'absolute',
                                                                                top: '2px',
                                                                                right: '2px',
                                                                            }}
                                                                        ></button> */}
                                                                    </div>
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