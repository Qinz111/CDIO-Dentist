import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<User />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Layout;
