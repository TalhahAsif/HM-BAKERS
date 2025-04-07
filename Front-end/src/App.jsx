import { Route, Routes, Navigate } from "react-router-dom";
import Landingpage from "./Pages/Custumer/Landingpage";
import Signup from "./Pages/Custumer/Auth/Signup";
import Layout from "./Pages/Custumer/Layout";
import Main from "./Pages/Custumer/Store/Main";
import StoreLayout from "./Pages/Custumer/Store/Layout";
import Categories from "./Pages/Custumer/Store/Categories";
import SingleCategory from "./Pages/Custumer/Store/SingleCategory";
import Cart from "./Pages/Custumer/Store/Cart";
import AdminLayout from "./Pages/Admin/Portal/Layout";
import { useState } from "react";
import Deshboard from "./Pages/Admin/Portal/Deshboard";
import ManageUser from "./Pages/Admin/Portal/ManageUser";
import ManageProductMain from "./Pages/Admin/Portal/ManageProduct/Main";
import Category from "./Pages/Admin/Portal/ManageProduct/Category";
import Login from "./Pages/Admin/Auth/Login";

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <div className="font-display">
        <Routes>
          <Route path="login" element={<Login />} />

          <Route
            path="admin"
            element={
              <PrivateRoute isAuthenticated={user}>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Deshboard />} />
            <Route path="manageuser" element={<ManageUser />} />
            <Route path="manageinventory">
              <Route index element={<ManageProductMain />} />
              <Route path="manageCategory" element={<Category />} />
            </Route>
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Landingpage />} />
          </Route>

          <Route path="/store" element={<StoreLayout />}>
            <Route index element={<Main />} />
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route path="single" element={<SingleCategory />} />
            </Route>
            <Route
              path="cart"
              element={
                <PrivateRoute isAuthenticated={user}>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
