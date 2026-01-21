import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

// user components
import Dashboard from "./user/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutWithoutNav from "./components/LayoutWithoutNav";
import Anatomy from "./user/Anatomy";
import AnatomyChild from "./user/AnatomyChild";
import Text from "./user/Text";
import Images from "./user/Images";
import Vedios from "./user/Vedios";
import ImgDisc from "./user/ImgDisc";
import Setting from "./user/Setting";
import ChangePass from "./components/pages/ChangePass";
import TextSeries from "./user/TextSeries";
import UserSecurity from "./user/UserSecurity";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected with Navbar Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutWithoutNav />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/anatomy" element={<Anatomy />} />
            <Route path="/images" element={<Images />} />
            <Route path="/video" element={<Vedios />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/test-series" element={<TextSeries/>}/>  
            <Route path="/anatomy/upper-limb" element={<AnatomyChild />} />
            <Route path="/user/security" element={<UserSecurity/>}/>
          </Route>  
        </Route>

        {/* Protected but without Navbar Layout */}
        <Route element={<ProtectedRoute />}>
          <Route path="/anatomy/text" element={<Text />} />
          <Route path="/anatomy/discription" element={<ImgDisc />} />
            <Route path="/user/changePassword" element={<ChangePass/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;
