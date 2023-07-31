import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, isCheckingUserinfo, children }) => {
  if (isCheckingUserinfo) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;