import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Content from "./Components/User/Content/Content";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Content />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
