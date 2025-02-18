import React, { useEffect } from "react";
import SolutionStep from "./SolutionStep";
import Doctor from "../../../../../assets/doctor-group.png";
import "./CDIO.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import s1 from "../../../../../assets/s1.png";
import s2 from "../../../../../assets/s2.png";
import s3 from "../../../../../assets/s3.png";
import s4 from "../../../../../assets/s4.png";
import s5 from "../../../../../assets/s5.png";
import s6 from "../../../../../assets/s6.png";
import video from "../../../../../assets/home.mp4";

const CDIO = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 50 });
  }, []);

  return (
    <>
      <div className="cdio-section" id="cdio">
        <div className="container">
          <div className="cdio-content">
            <div className="cdio-image-content" data-aos="fade-up">
              <img src={Doctor} alt="Doctor Group" className="cdio-image1" />
            </div>

            <div className="cdio-text-content" data-aos="fade-up">
              <h3 className="cdio-title">
                <span>CDIO Dentist</span>
              </h3>
              <p className="cdio-description">
                Chào mừng bạn đến với CIDO-Dentist, đối tác chăm sóc răng miệng
                đáng tin cậy của bạn, cam kết nâng cao sức khỏe răng miệng. Các
                nha sĩ chuyên nghiệp của chúng tôi cung cấp dịch vụ tư vấn trực
                tuyến và điều trị chuyên sâu, với mục tiêu bảo vệ nụ cười và sức
                khỏe của bạn. Hãy cùng chúng tôi trên hành trình hướng tới một
                sức khỏe răng miệng tốt hơn và nụ cười tự tin hơn.
              </p>

              <h4 className="cdio-text-title">Giải pháp của bạn</h4>

              <SolutionStep
                title="Chọn Chuyên Gia"
                description="Tìm kiếm chuyên gia phù hợp và đặt lịch dễ dàng tại Health Plus. Các bác sĩ giàu kinh nghiệm luôn ưu tiên sức khỏe của bạn, cung cấp dịch vụ chăm sóc tận tâm và phù hợp."
              />

              <SolutionStep
                title="Đặt Lịch Hẹn"
                description="Chọn ngày và giờ phù hợp nhất với bạn, và đội ngũ y tế tận tâm của chúng tôi sẽ đảm bảo chăm sóc sức khỏe của bạn một cách tốt nhất."
              />

              <SolutionStep
                title="Nhận Giải Pháp"
                description="Các bác sĩ và chuyên gia giàu kinh nghiệm của chúng tôi sẵn sàng tư vấn và đưa ra kế hoạch điều trị cá nhân hóa, giúp bạn đạt được sức khỏe tốt nhất có thể."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="service-container">
          <div className="content">
            <div className="content-title">Dịch vụ của chúng tôi</div>
            <div className="content-container">
              <div className="content-container-icon">
                <img src={s1} alt="" />
                Làm trắng răng
              </div>
              <div className="content-container-icon">
                <img src={s5} alt="" />
                Niềng răng
              </div>
              <div className="content-container-icon">
                <img src={s6} alt="" />
                Trồng răng
              </div>
              <div className="content-container-icon">
                <img src={s2} alt="" />
                Kiểm tra tổng quát
              </div>
              <div className="content-container-icon">
                <img src={s3} alt="" />
                Thẩm mỹ
              </div>
              <div className="content-container-icon">
                <img src={s4} alt="" />
                Tư vấn
              </div>
            </div>
          </div>
          <div className="video-container">
            <div className="video">
              <video autoPlay muted loop playsInline controls={false}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CDIO;
