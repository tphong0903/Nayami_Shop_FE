import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProtectedRouteAdmin = () => {
    const token = localStorage.getItem('access_token');
    const [isAuthorized, setIsAuthorized] = useState(null); // null = đang kiểm tra

    useEffect(() => {
        const checkToken = async () => {
            if (!token) {
                setIsAuthorized(false);
                return;
            }

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/api/check-token-customer`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const status = response.data.status;
                if (status === 200) {
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                setIsAuthorized(false);
            }
        };

        checkToken();
    }, [token]);

    // Đang kiểm tra -> hiển thị loading hoặc null
    if (isAuthorized === null) {
        return <div></div>;
    }

    if (isAuthorized === true) {
        return <Outlet />;
    }

    return <Navigate to="/error/404" replace />;
};

export default ProtectedRouteAdmin;
