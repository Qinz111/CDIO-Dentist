import React, { useEffect, useState } from "react";
import "./Header.scss";
import icon2 from "../../../assets/icon2_admin.jpg";
import log_out from "../../../assets/log-out.png";
import logo2 from "../../../assets/logo2.png";
import { BsList } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Header_Admin = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    if (!token) {
      navigate("/login"); // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
    }
  }, [navigate]);

  const ReturnHomepage = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");

    window.location.href = "/";
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const GoAheadDoctor = () => {
    window.location.href = "Doctors";
  };

  const GoAheadConsultants = () => {
    window.location.href = "Consultants";
  };

  return (
    <div className="header_admin">
      <div className="header_top">
        <p>Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam</p>
      </div>
      <div className="header_content">
        <div className="header_content_left">
          <img
            onClick={() => window.location.reload()}
            src={logo2}
            alt="logo2"
          />
        </div>
        <div className="header_content_right">
          <div className="header_content_right_icon">
            <img src={icon2} alt="icon2" />
          </div>
          <div className="header_content_right_text">
            <ul>
              <li>Hỗ Trợ</li>
              <li>0935149084</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <div className="header_bottom_left_icon">
            <BsList className="icon" onClick={toggleMenu} />
          </div>

          <div
            className={`header_bottom_left_menu ${
              menuVisible ? "show-menu" : ""
            }`}
          >
            <ul>
              <li onClick={GoAheadDoctor}>
                <a className="dropdown-item" href="#">
                  <FaUserDoctor />
                  Quản lý bác sĩ
                </a>
              </li>
              <li onClick={GoAheadConsultants}>
                <a className="dropdown-item" href="#">
                  <FaPhoneAlt />
                  Quản lý tư vấn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header_bottom_right" onClick={ReturnHomepage}>
          <div className="header_bottom_right_icon">
            <img src={log_out} alt="log_out" />
          </div>
          <div className="header_bottom_right_text">Đăng xuất</div>
        </div>
      </div>
      <div className="header_bottom_bottom">
        <div className="header_bottom_bottom_text">
          Nha khoa CDIO – Hệ thống chuỗi nha khoa tiêu chuẩn Pháp tại Việt Nam
        </div>
      </div>
      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
};

export default Header_Admin;
