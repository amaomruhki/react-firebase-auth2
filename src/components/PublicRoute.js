import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const PublicRoute = (props) => {
	const { user } = useAuthContext();
	return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
