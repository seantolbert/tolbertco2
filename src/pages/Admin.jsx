import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminForms from "./AdminForms";
import AdminLogin from "./AdminLogin";

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/forms" element={<AdminForms />} />
      </Routes>
    </div>
  );
};

export default Admin;
