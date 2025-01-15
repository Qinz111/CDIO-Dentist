import React, { useState, useEffect } from "react";
import "./Header.scss";
import icon2 from "../../../assets/icon2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import Menu from "./Menu";
import { BsList } from "react-icons/bs";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePhone = (e) => {
    if (window.innerWidth <= 1000) {
      setShowPhone(!showPhone);
      e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    }
  };

  // Đóng phone number khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = () => {
      if (showPhone) {
        setShowPhone(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPhone]);

  //lấy size
  let handleResize = () => {
    const header = document.querySelector(".header");
    const appBody = document.querySelector(".app-body");

    if (header && appBody) {
      const headerHeight = header.offsetHeight;
      appBody.style.marginTop = `${headerHeight}px`;
    }

    // Thêm resize listener để cập nhật khi kích thước màn hình thay đổi
    const handleResize = () => {
      if (header && appBody) {
        const headerHeight = header.offsetHeight;
        appBody.style.marginTop = `${headerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(handleResize, []);

  return (
    <div className="header">
      <div className="header_box">
        <div className="header_box_top">
          <div className="header_box_top_text">
            Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam
          </div>
        </div>
        <div className="header_box_1">
          <div className="container">
            <div className="header_box1_main">
              <div className="header_box1Left">
                <div className="header_box1Logo">
                  <a href="/">
                    <img src="/logo2.png" alt="?" />
                  </a>
                </div>
              </div>
              <div className="header_box1Right">
                <div className="header_box1Address">
                  <ul>
                    <li>Mở cửa từ 8h - 18h</li>
                    <li>Từ T2 - CN</li>
                  </ul>
                </div>
                <div className="header_box1Call">
                  <img
                    src={icon2}
                    alt=""
                    className="icon2"
                    onClick={togglePhone}
                  />
                  <ul className={`text ${showPhone ? "show" : ""}`}>
                    <li>Tư vấn miễn phí</li>
                    <li>
                      <b>123456789</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header_box1_menu">
                <button className="menu" onClick={() => toggleMenu()}>
                  <BsList />
                </button>
                {isMenuOpen && (
                  <div
                    className="mobile-menu-overlay"
                    onClick={(e) => {
                      if (e.target.className === "mobile-menu-overlay") {
                        toggleMenu();
                      }
                    }}
                  >
                    <div className="mobile-menu-content">
                      <Menu />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header_box_2">
          <div className="container">
            <div className="header_box_2Main">
              <ul className="header_box_2_menu">
                <li className="header_box_2_menuSub">
                  <div className="header_box_2_title">
                    VỀ NHA
                    <br />
                    KHOA PARIS
                  </div>
                </li>
                <li className="header_box_2_menuSub">
                  <div className="header_box_2_title">
                    VỀ NHA
                    <br />
                    KHOA PARIS
                  </div>
                </li>
                <li className="header_box_2_menuSub">
                  <div className="header_box_2_title">
                    VỀ NHA
                    <br />
                    KHOA PARIS
                  </div>
                </li>
                <li className="header_box_2_menuSub">
                  <div className="header_box_2_title">
                    VỀ NHA
                    <br />
                    KHOA PARIS
                  </div>
                </li>
                <li className="header_box_2_menuSub">
                  <div className="header_box_2_title">
                    VỀ NHA
                    <br />
                    KHOA PARIS
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
