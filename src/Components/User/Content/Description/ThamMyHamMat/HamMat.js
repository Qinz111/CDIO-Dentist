import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HamMat.scss";
const HamMat = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="hammat">
      <section className="facial-aesthetics">
        <div className="container-hammat">
          <h2 data-aos="fade-up" className="hammat-title">
            Thẩm mỹ hàm mặt
          </h2>
          <div data-aos="fade-up" className="hammat-detail">
            Cải thiện nụ cười và đường nét khuôn mặt với các dịch vụ thẩm mỹ hàm
            mặt chuyên sâu tại nha khoa quốc tế.
          </div>
          <div className="services">
            <div className="service-item item-nr" data-aos="fade-up">
              <h3>Niềng răng chỉnh nha</h3>
              <p>Giúp hàm răng đều đẹp, cải thiện chức năng ăn nhai.</p>
            </div>
            <div className="service-item" data-aos="fade-up">
              <h3>Phẫu thuật hàm</h3>
              <p>Chỉnh hình hàm lệch, cải thiện khớp cắn.</p>
            </div>
            <div className="service-item" data-aos="fade-up">
              <h3>Bọc răng sứ</h3>
              <p>Đem lại nụ cười trắng sáng, tự nhiên.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HamMat;
