import { Navigate, Outlet } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({roles}) => {
    const token = sessionStorage.getItem("token"); 
    console.log("From protectedRoute: ",token);

    //Khong hop le
    if(token == null){
        return <Navigate to="/login" replace />;
    }else{
        try {
            const decoded = jwtDecode(token);
            console.log(decoded.roles[0]);
            if(decoded.roles[0] != roles){
                console.log("InValid");
                return <Navigate to="/login" replace />;
            }else
            {
                console.log("Valid");
                return <Outlet />;
            }
        } catch (error) {
            console.log(error)
            localStorage.removeItem("token");
            return <Navigate to="/login" replace />;
        }
    }
};

export default ProtectedRoute;
