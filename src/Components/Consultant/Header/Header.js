import React, { useState, useEffect } from "react";
import "./Header.scss";
import icon2 from "../../../assets/icon2.jpg";
import log_out from "../../../assets/log-out.png";
import logo2 from "../../../assets/logo2.png";
import { BsList } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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

    window.location.href = "/login";
  };

  const handleTrangChu = () => {
    navigate("/consultant");
    toggleMenu();
  };

  const handleBacSi = () => {
    navigate("/consultant/quan-li-bs");
    toggleMenu();
  };

  const handleTuVan = () => {
    navigate("/consultant/dang-ki-tu-van");
    toggleMenu();
  };

  return (
    <>
      <div className="header-consultant">
        <div className="header_top">
          <p>Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam</p>
        </div>
        <div className="header_content">
          <div className="header_content_left">
            <img
              className="logo-const"
              src={logo2}
              alt="logo2"
              onClick={() => navigate("/consultant")}
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
              <BsList className="icon" onClick={() => toggleMenu()} />
            </div>

            <div
              className={`header_bottom_left_menu ${
                menuVisible ? "show-menu" : ""
              }`}
            >
              <ul>
                <li onClick={() => handleTrangChu()}>
                  <a className="dropdown-item">
                    <FaUserDoctor />
                    Trang chủ
                  </a>
                </li>
                <li onClick={() => handleBacSi()}>
                  <a className="dropdown-item">
                    <FaPhoneAlt />
                    Quản lý bác sĩ
                  </a>
                </li>
                <li onClick={() => handleTuVan()}>
                  <a className="dropdown-item">
                    <FaPhoneAlt />
                    Đăng kí tư vấn
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
      </div>
    </>
  );
};

export default Header;
