import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, isCheckingLoggedInState, children }) => {
  if (isCheckingLoggedInState) {
    return <div>Loading...</div>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;