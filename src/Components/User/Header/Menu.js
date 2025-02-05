import React from "react";
import "./Menu.scss";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item">
          <Link
            to="cdio"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            className="menu-link"
          >
            VỀ NHA KHOA CDIO
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="thammy"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            className="menu-link"
          >
            NHA KHOA THẨM MỸ
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="tongquat"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            className="menu-link"
          >
            NHA KHOA TỔNG QUÁT
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="hammat"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            className="menu-link"
          >
            THẨM MỸ HÀM MẶT
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="uudai"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
            className="menu-link"
          >
            BẢNG GIÁ ƯU ĐÃI
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
