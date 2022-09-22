import { Navigate } from "react-router-dom";

function ProtectedRoutes({children,isLogin}) {
    if(!isLogin) {
      return <Navigate to="/login" />
    } 
    return children;
}

export default ProtectedRoutes;
