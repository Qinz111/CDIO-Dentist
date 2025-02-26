import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./Components/User/User";
import Calendar from "./Components/User/Content/Calendar/Calendar";
import Content from "./Components/User/Content/Content";
import Consultant from "./Components/Consultant/Consultant";
import HomePage from "./Components/Consultant/Body/HomePage/HomePage";
import QuanLy from "./Components/Consultant/Body/QuanLy/QuanLy";
import TuVan from "./Components/Consultant/Body/TuVan/TuVan";
import Header_Admin from "./Components/admin/header/Header";
import Homepage_Admin from "./Components/admin/Homepage/Homepage";
import Consultants_Admin from "./Components/admin/Account/ManageAccount/Consultants/Consultants";
import Doctors_Admin from "./Components/admin/Account/ManageAccount/Doctors/Doctors";
import Admin from "./Components/admin/Admin";
import CalendarManage from "./Components/Consultant/Body/QuanLy/Calender/CalenderManage";
import Loginpage from "./Components/Consultant/Body/LoginPage/Loginpage";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<User />}>
          <Route index element={<Content />} />
          <Route path="dentist-calendar/:id" element={<Calendar />} />
        </Route>
      </Route>
      <Route path="/login" element={<Admin />}>
        <Route index element={<Homepage_Admin />} />
        <Route element={<Header_Admin />}>
          <Route path="consultants" element={<Consultants_Admin />} />
          <Route path="doctors" element={<Doctors_Admin />} />
        </Route>
      </Route>
      {/* <Route path="/login-consultant" element={<Loginpage />} /> */}
      <Route path="/consultant" element={<Consultant />}>
        <Route index element={<HomePage />} />
        <Route path="/consultant/quan-li-bs" element={<QuanLy />} />
        <Route
          path="/consultant/quan-li-bs/calendar/:id"
          element={<CalendarManage />}
        />
        <Route path="/consultant/dang-ki-tu-van" element={<TuVan />} />
      </Route>
    </Routes>
  );
};

export default Layout;
