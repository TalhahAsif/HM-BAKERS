import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ButtonGroup } from "@heroui/button";
import { Image } from "@heroui/image";
import Home from "./Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import DeshboardLayout from "./Pages/Deshboard/DeshboardLayout";
import Statistics from "./Pages/Deshboard/Statistics";
import Custumers from "./Pages/Deshboard/Custumers";
import ProductPage from "./Pages/ProductPage";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ProductHandle from "./Pages/Deshboard/ProductHandle";
import ManageAdmins from "./Pages/Deshboard/Employes";
import Navbar from "./Component/Navbar";
import NavbarCmp from "./Component/Navbar";

function App() {
  const [userRole, setUserRole] = useState("admin");
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarCmp/>}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductPage />} />
        </Route>

        {/* Auth */}
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Deshboard */}
        <Route
          path="/admin"
          element={
            userRole == "admin" || userRole == "manager" ? (
              <DeshboardLayout />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<Statistics />} />
          <Route path="custumers" element={<Custumers />} />
          <Route path="manage-admins" element={<ManageAdmins />} />
          <Route path="products" element={<ProductHandle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
