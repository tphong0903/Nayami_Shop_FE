import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';
import Swal from 'sweetalert2';

export default function Promotions() {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            const response = await axios.get('/api/promotions');
            setPromotions(response.data.data);
        } catch (err) {
            console.error('Error fetching promotions:', err);
        }
    };

    const dataTest = () => {
        console.log(promotions)
    }

    const deletePromotion = async (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xoá?',
            text: 'Sau khi xoá sẽ không thể khôi phục!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Xoá',
            cancelButtonText: 'Hủy'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/api/promotions/${id}`);
                    setPromotions((prevCategories) => prevCategories.filter(category => category.id !== id));

                    Swal.fire('Đã xoá!', 'Quảng cáo đã được xoá thành công.', 'success');
                } catch (err) {
                    Swal.fire('Lỗi!', 'Không thể xoá danh mục.', 'error');
                    console.error('Lỗi khi xoá danh mục:', err);
                }
            }
        });
    };


    return (
        <>
            <div className="page-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="title-header option-title">
                                        <h5>All Promotions</h5>
                                        <div className="d-inline-flex">
                                            <Link to="/admin/add-new-promotion" className="align-items-center btn btn-theme d-flex">
                                                <i className="ri-add-line me-2"></i> Add New
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="table-responsive category-table">
                                        <table className="table all-package theme-table" id="table_id">
                                            <thead>
                                                <tr>
                                                    <th>Promotion Title</th>
                                                    <th>Promotion Description</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Display Status</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {promotions.length != 0 ? (
                                                    promotions.map((promotion) => (
                                                        <tr key={promotion.id}>
                                                            <td>{promotion.title}</td>
                                                            <td>{promotion.description}</td>
                                                            <td>{promotion.startDate}</td>
                                                            <td>{promotion.endDate}</td>
                                                            <td>{promotion.displayStatus
                                                                ? <CheckCircleIcon color="success" />
                                                                : <BlockIcon color="error" />}</td>
                                                            <td>
                                                                <ul>
                                                                    <li>
                                                                        <Link to={`/admin/update-promotion/${promotion.id}`}>
                                                                            <i className="ri-pencil-line" />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-danger"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                deletePromotion(promotion.id);
                                                                            }}
                                                                        >
                                                                            <i className="ri-delete-bin-line" />
                                                                        </a>

                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5">Không có danh mục nào</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
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