// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/Custumer/Landingpage";
import Signup from "./Pages/Custumer/Auth/Signup";
import Login from "./Pages/Custumer/Auth/Login";
import AdminSignup from "./Pages/Custumer/Auth/Signup";
import AdminLogin from "./Pages/Custumer/Auth/Login";
import Layout from "./Pages/Custumer/Layout";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
