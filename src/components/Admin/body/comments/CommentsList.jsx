import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Rating } from '@mui/material'
import Swal from 'sweetalert2'

export default function CommentsList() {

    const { id } = useParams()
    const [comments, setComments] = useState([])
    const [responses, setResponses] = useState([])
    const [replyData, setReplyData] = useState({
        id: 0,
        staff: 'demotranbao111@gmail.com',
        reply: ''
    })
    const [disabledButton, setDisabledButton] = useState(false)

    const fetchData = async () => {
        await axios.get(`/api/comments/${id}`).then((response) => {
            setComments(reverseByProperty(response.data.data, 'id'))
        }).catch(err => {
            console.log(err)
        })

        await axios.get(`/api/responses/${id}`).then((response) => {
            setResponses(reverseByProperty(response.data.data, 'id'))
        }).catch(err => {
            console.log(err)
        })
    }

    function reverseByProperty(array, property) {
        return array.sort((a, b) => {
            if (typeof a[property] === 'string') {
                return b[property].localeCompare(a[property]);
            }
            return b[property] - a[property];
        });
    }

    useState(() => {
        fetchData()
    }, [])

    // useState(() => {
    //     console.log(replyData)
    // }, [replyData])

    const toggleActive = (id, active) => {
        const popUpTitle = () => {
            return active ? 'Bạn có chắc chắn muốn ẩn?' : 'Bạn có chắc chắn muốn hiện?'
        }

        const acceptButton = () => {
            return active ? 'Ẩn' : 'Hiện'
        }

        Swal.fire({
            title: popUpTitle(),
            // text: 'Sau khi xoá sẽ không thể khôi phục!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: acceptButton(),
            cancelButtonText: 'Hủy',
            timer: 1500
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.post('/api/comments/active', { id: id })
                    .then(() => {
                        fetchData()
                    })
            }
        })
    }

    const sendReply = async () => {
        const modal = document.getElementById('replyModal');
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        await axios.post('/api/responses', replyData)
            .then(() => {
                Swal.fire({
                    title: 'Phản hồi thành công',
                    icon: 'success',
                    timer: 1500
                }).then(() => {
                    fetchData()
                })
            })
    }

    const checkResponse = (id) => {
        return (responses.find(item => {
            return id == item.comment.id
        })?.description)
    }

    const changeResponse = (id) => {
        const res = checkResponse(id)
        if (res) {
            setReplyData(prev => ({ ...prev, id: id, reply: res }))
            setDisabledButton(true)
        }
        else {
            setReplyData(prev => ({ ...prev, id: id, reply: '' }))
            setDisabledButton(false)
        }
    }

    return (
        <>
            <div className="page-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="title-header option-title">
                                        <Link to="/admin/comments" className="btn btn-danger">Back</Link>
                                        <h5>Product Reviews</h5>
                                    </div>
                                    <div>
                                        <div className="table-responsive">
                                            <table className="user-table ticket-table review-table theme-table table" id="table_id">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Customer Name</th>
                                                        <th>Rating</th>
                                                        <th>Comment</th>
                                                        <th>Published</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        comments.length > 0
                                                            ? comments.map((item, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>{item.id}</td>
                                                                        <td>{item.userName}</td>
                                                                        <td>
                                                                            <Rating size='medium' name="read-only" value={item?.rating ?? 0} readOnly />
                                                                        </td>
                                                                        <td>{item.description}</td>
                                                                        <td style={{ fontSize: '20px' }}>
                                                                            {
                                                                                item?.active
                                                                                    ? <i className="ri-checkbox-circle-line text-success"></i>
                                                                                    : <i className="ri-close-circle-line text-danger"></i>
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>
                                                                                    <Link data-bs-toggle="modal" data-bs-target="#replyModal" onClick={() => changeResponse(item.id)}>
                                                                                        {
                                                                                            checkResponse(item.id)
                                                                                                ? <i className='ri-pushpin-2-fill text-success'></i>
                                                                                                : <i className="ri-reply-fill text-primary" />
                                                                                        }

                                                                                    </Link>
                                                                                </li>
                                                                                <div className="modal fade" id="replyModal" tabIndex="-1">
                                                                                    <div className="modal-dialog">
                                                                                        <div className="modal-content">
                                                                                            <div className="modal-header">
                                                                                                <h5 className="modal-title" id="replyModalLabel">Reply</h5>
                                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                            </div>
                                                                                            <div className="modal-body">
                                                                                                <form>
                                                                                                    <div className="mb-3">
                                                                                                        <input type="hidden" name="id" value={item.id} />
                                                                                                        <textarea value={replyData.reply} onChange={(e) => { setReplyData(prev => ({ ...prev, reply: e.target.value })) }} className="form-control" id="replyInput" rows="4" placeholder="Type your reply here..."></textarea>
                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                            <div className="modal-footer">
                                                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                                                                <button id='sendBtn' onClick={() => sendReply()} disabled={disabledButton} type="button" className="btn btn-primary">Send Reply</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <li>
                                                                                    <Link
                                                                                        className="text-danger"
                                                                                        onClick={(e) => {
                                                                                            e.preventDefault()
                                                                                            toggleActive(item.id, item.active)
                                                                                        }}
                                                                                    >
                                                                                        <i className='ri-eye-line' />
                                                                                    </Link>

                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                            : <tr>
                                                                <td colSpan="6">Không có đánh giá nào</td>
                                                            </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <footer className="footer">
                        <div className="row">
                            <div className="col-md-12 footer-copyright text-center">
                                <p className="mb-0">Copyright 2022 © Fastkart theme by pixelstrap</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}