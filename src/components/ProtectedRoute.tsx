import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    navigate("/login");
  }

  return children;
}

export default ProtectedRoute;
