import React, { useState, useEffect } from "react";
import "./Header.scss";
import icon2 from "../../../assets/icon2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsList } from "react-icons/bs";
import Menu from "./Menu";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePhone = (e) => {
    if (window.innerWidth <= 1000) {
      setShowPhone(!showPhone);
      e.stopPropagation();
    }
  };

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

  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector(".header");
      const appBody = document.querySelector(".app-body");
      if (header && appBody) {
        const headerHeight = header.offsetHeight;
        appBody.style.marginTop = `${headerHeight}px`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <button className="menu" onClick={toggleMenu}>
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
                  <Link to="cdio" spy={true} smooth={true} duration={500}>
                    <div className="header_box_2_title">
                      VỀ NHA
                      <br />
                      KHOA CDIO
                    </div>
                  </Link>
                </li>
                <li className="header_box_2_menuSub">
                  <Link to="thammy" spy={true} smooth={true} duration={500}>
                    <div className="header_box_2_title">
                      NHA KHOA
                      <br />
                      THẨM MỸ
                    </div>
                  </Link>
                </li>
                <li className="header_box_2_menuSub">
                  <Link to="tongquat" spy={true} smooth={true} duration={500}>
                    <div className="header_box_2_title">
                      NHA KHOA
                      <br />
                      TỔNG QUÁT
                    </div>
                  </Link>
                </li>
                <li className="header_box_2_menuSub">
                  <Link to="hammat" spy={true} smooth={true} duration={500}>
                    <div className="header_box_2_title">
                      THẨM MỸ
                      <br />
                      HÀM MẶT
                    </div>
                  </Link>
                </li>
                <li className="header_box_2_menuSub">
                  <Link to="uudai" spy={true} smooth={true} duration={500}>
                    <div className="header_box_2_title">
                      BẢNG GIÁ
                      <br />
                      ƯU ĐÃI
                    </div>
                  </Link>
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
