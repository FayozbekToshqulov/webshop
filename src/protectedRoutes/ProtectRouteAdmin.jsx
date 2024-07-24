import { Navigate } from "react-router-dom";

function ProtectRouteAdmin({ children }) {
    let sign = JSON.parse(localStorage.getItem("users"));

    if(sign){
        return children;
    } else{
        return <Navigate to={'/signin'}/>
    }
}

export default ProtectRouteAdmin