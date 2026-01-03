import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          user?.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/customers/dashboard"
        element={
          user?.role === "customer" ? (
            <CustomerDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/admin/restaurants/update/:id"
        element={
          user?.role === "admin" ? (
            <UpdateRestaurant />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
