import { useNavigate } from 'react-router-dom';

const AxiosInterceptorProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);

  return children;
};

export default AxiosInterceptorProvider;
