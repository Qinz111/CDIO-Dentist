import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" className="menu-link">
            Trang chủ
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Giới thiệu
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Dịch vụ
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            Liên hệ
          </a>
        </li>
        {/* Thêm các menu item khác tương tự */}
      </ul>
    </div>
  );
};

export default Menu;
