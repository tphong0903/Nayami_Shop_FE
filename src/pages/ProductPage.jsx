import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import BreadCrumbSection from '~/components/BreadCrumbSection';
import ProductSection from '~/components/product/ProductSection';
import ReletedProductSection from '~/components/product/ReletedProductSection';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function ProductPage() {
  const [product, setProduct] = useState()
  const { id } = useParams();

  const [user, setUser] = useState()
  const [userPurchaseCheck, setUserPurchaseCheck] = useState()
  const [rate, setRate] = useState()
  const [isRate, setIsRate] = useState(false)
  const [responses, setResponse] = useState()

  let decoded;
  if (localStorage.getItem('access_token')) {
    const token = localStorage.getItem('access_token')
    decoded = jwtDecode(token);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(null);
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải sản phẩm.', 'error')
      })

    if (decoded) {
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/api/users`, { email: decoded.email })
        .then(res => {
          setUser(res.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải user.', 'error')
        })

      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/api/users/check`, { proId: id, email: decoded.email })
        .then(res => {
          setUserPurchaseCheck(res.data.data)
        })
        .catch(() => {
          Swal.fire('Lỗi!', 'Không thể tải user.', 'error')
        })
    }

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/comments/${id}`)
      .then((response) => {
        setRate(response.data.data)
        console.log(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải đánh giá.', 'error')
      })

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/responses/${id}`)
      .then((response) => {
        setResponse(response.data.data)
        // console.log(response.data.data)
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể tải phản hồi.', 'error')
      })

  }, [id, isRate])
  return (
    <>
      <Header />
      <BreadCrumbSection title='Chi tiết sản phẩm' page={product?.name} />
      <ProductSection product={product} user={user} rate={rate} purchaseCheck={userPurchaseCheck} response={responses} setIsRate={setIsRate} isRate={isRate} />
      <ReletedProductSection product={product} />
      <Footer />
    </>
  );
}
