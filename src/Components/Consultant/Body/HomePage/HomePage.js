import React from "react";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="left">
        <div className="thongtincanhanh">
          <div className="contener">
            <div className="j97">
              <img src="/images/j97.png" alt="?" />
            </div>
            <div className="thongtin">
              <h1>THÔNG TIN CÁ NHÂN</h1>
              <p>Họ tên: Trịnh Trần Phương Tuấn</p>
              <p>MSNV: CDIO0316</p>
              <p>Chức vụ: Nhân viên tư vấn</p>
            </div>
          </div>
        </div>
        <div className="thongtincanhanh2">
          <div className="contener2">
            <div className="anhcanhan">
              <img src="/images/anhcanhan.png" alt="?" />
            </div>
            <div className="thongtin2">
              <h1>SỐ KHÁCH HÀNG TRONG NGÀY</h1>
              <p>11</p>
            </div>
          </div>
        </div>
        <div className="thongtincanhanh3">
          <div className="contener3">
            <div className="hinhanh2">
              <img src="/images/anhcanhan2.png" alt="?" />
            </div>
            <div className="thongtin3">
              <h1>LỊCH HẸN SẮP TỚI</h1>
              <p>Thời gian: 7:00-8:00</p>
              <p>Bác sĩ: Đàm Ngọc Trâm</p>
              <p>Bệnh nhân: 0763 130 647</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
