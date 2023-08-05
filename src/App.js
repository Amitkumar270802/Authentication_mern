import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "./components/core/auth/OpenRoute";
import VerifyOtp from "./pages/VerifyOtp";
import MyProfile from "./components/core/auth/MyProfile";
import PrivateRoute from "./components/core/auth/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="w-screen  bg-richblack-900 flex flex-col font-inter h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/dashboard/my-profile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        />
        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
