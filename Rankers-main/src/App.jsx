import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";

// user components
import Dashboard from "./user/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutWithoutNav from "./components/LayoutWithoutNav";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* user Layout */}
        <Route element={<LayoutWithoutNav />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
