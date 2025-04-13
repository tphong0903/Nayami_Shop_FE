import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function ResetPassword() {
  const [searchParams,setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() =>
  {
      const token = getTokenFromURL();
      if(token)
      {
        sessionStorage.setItem('resetPasswordToken', token);
        navigate('/enter-new-password');
      }
  }, []);
  const getTokenFromURL = () => {
    const token = searchParams.get('token'); // Lấy token từ URL
    return token;
  };
  return (
    <>
      <div>Processing token</div>
    </>
  )
}