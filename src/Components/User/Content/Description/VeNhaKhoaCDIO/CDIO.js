import React, { useEffect } from "react";
import SolutionStep from "./SolutionStep";
import Doctor from "../../../../../assets/doctor-group.png";
import Chanh from "../../../../../assets/chanh.jpg";
import "./CDIO.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const CDIO = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 50 });
  }, []);
  return (
    <>
      <div className="cdio-section" id="cdio">
        <div className="container">
          <div className="cdio-content">
            <div className="cdio-image-content" data-aos="fade-right">
              <img src={Doctor} alt="Doctor Group" className="cdio-image1" />
            </div>

            <div className="cdio-text-content" data-aos="fade-left">
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

      <div className="ba-section">
        <div className="container">
          <div className="ba-content">
            <div className="ba-image-content" data-aos="zoom-in">
              <img src={Chanh} alt="Doctor Group" className="ba-image1" />
            </div>

            <div className="ba-text-content" data-aos="fade-up">
              <h3 className="ba-title">
                <span>Tại Sao Chọn CIDO-Dentist?</span>
              </h3>
              <p className="ba-description">
                Khám phá lý do tại sao CIDO-Dentist là lựa chọn tốt nhất cho sức
                khỏe răng miệng của bạn. Chúng tôi mang đến dịch vụ chuyên
                nghiệp, tiện lợi và giải pháp cá nhân hóa, giúp bạn có một nụ
                cười khỏe mạnh và tự tin hơn.
              </p>

              <p className="ba-checks ba-check-first">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#1E8FFD" }}
                />{" "}
                Đội ngũ nha sĩ chuyên nghiệp
              </p>
              <p className="ba-checks">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#1E8FFD" }}
                />{" "}
                Chăm sóc khẩn cấp 24/7
              </p>

              <p className="ba-checks ba-check-last">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#1E8FFD" }}
                />{" "}
                Đăng ký đơn giản, dễ dàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CDIO;
