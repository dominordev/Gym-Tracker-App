import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../routes/ProtectedRoute";

export default function AppRouter({ session }) {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={
          session
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          session
            ? <Navigate to="/dashboard" replace />
            : <Register />
        }
      />

      {/* Dashboard protegido */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute session={session}>
            <Dashboard session={session} />
          </ProtectedRoute>
        }
      />

      {/* Ruta por defecto */}
      <Route
        path="*"
        element={
          <Navigate
            to={session ? "/dashboard" : "/login"}
            replace
          />
        }
      />

    </Routes>
  );
}