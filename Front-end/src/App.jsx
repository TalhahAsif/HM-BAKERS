import { Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/Custumer/Landingpage";
import Signup from "./Pages/Custumer/Auth/Signup";
import Login from "./Pages/Custumer/Auth/Login";
import AdminSignup from "./Pages/Custumer/Auth/Signup";
import AdminLogin from "./Pages/Custumer/Auth/Login";
import Layout from "./Pages/Custumer/Layout";
import Main from "./Pages/Custumer/Store/Main";
import StoreLayout from "./Pages/Custumer/Store/Layout";
import Categories from "./Pages/Custumer/Store/Categories";
import SingleCategory from "./Pages/Custumer/Store/SingleCategory";
import Cart from "./Pages/Custumer/Store/Cart";

function App() {
  return (
    <>
      <div className="font-display">
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route path="admin">
            <Route path="signup" element={<AdminSignup />} />
            <Route path="login" element={<AdminLogin />} />
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
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
