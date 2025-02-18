import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./Components/User/User";
import Admin from "./Components/admin/Admin";
import Calendar from "./Components/User/Content/Calendar/Calendar";
import Content from "./Components/User/Content/Content";
import Consultant from "./Components/Consultant/Consultant";
import HomePage from "./Components/Consultant/Body/HomePage/HomePage";
import QuanLy from "./Components/Consultant/Body/QuanLy/QuanLy";
import TuVan from "./Components/Consultant/Body/TuVan/TuVan";
import CalendarManage from "./Components/Consultant/Body/QuanLy/Calendar/CalenderManage";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<User />}>
          <Route index element={<Content />} />
          <Route path="dentist-calendar/:id" element={<Calendar />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/consultant" element={<Consultant />}>
        <Route index element={<HomePage />} />
        <Route path="quan-li-bs" element={<QuanLy />} />
        <Route path="quan-li-bs/calendar/:id" element={<CalendarManage />} />
        <Route path="dang-ki-tu-van" element={<TuVan />} />
      </Route>
    </Routes>
  );
};

export default Layout;
