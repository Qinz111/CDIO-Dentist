import React, { useState } from "react";
import "./Header.scss";
import icon2 from "../../../assets/icon2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //khi bấm vào thì hiện list dưới
  };

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
                  <img src={icon2} alt="" className="icon2" />
                  <ul className="text">
                    <li>Tư vấn miễn phí</li>
                    <li>
                      <b>123456789</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header_box1_menu">
                <button className="menu" onClick={toggleMenu}>
                  ☰
                </button>
                {/* //button để khi bấm vào thì hiện list dưới */}
              </div>
            </div>
          </div>
        </div>
        <div className="header_box_2">
          <div className="container">
            <div className="header_box_2Main">
              <img src="" alt="nha khoa" />
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
