import React, { useEffect, useState } from "react";
import thammy from "../../../../../assets/thammy.jpg";
import "./ThamMy.scss";
import { GiConfirmed } from "react-icons/gi";
import loiich from "../../../../../assets/loiich.jpg";
import AOS from "aos";
const ThamMy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" id="thammy">
      <div className="thammy_container">
        <div className="thammy_title">
          <div className="thammy_title_header" data-aos="fade-up">
            NHA KHOA THẨM MỸ
          </div>
          <div className="thammy_title_detail" data-aos="fade-up">
            Nha khoa thẩm mỹ là lĩnh vực nha khoa tập trung vào việc cải thiện
            thẩm mỹ nụ cười, khắc phục các khiếm khuyết về răng, nướu. Trên hành
            trình hơn 10 năm chăm chút nụ cười khỏe đẹp cho cộng đồng,
            CDIO-DENTIST đã mang đến nhiều giải pháp chuyên sâu, quy trình đạt
            chuẩn quốc tế, giúp hàng ngàn khách hàng tìm lại nét rạng rỡ cho
            chính mình.
          </div>
        </div>
        <div className="thammy_content">
          <div className="thammy_content_img" data-aos="fade-up">
            <img src={thammy} alt="" />
          </div>
          <div className="thammy_content_detail">
            <div className="thamy_content_detail_header1">
              <div
                className="thamy_content_detail_header1_top"
                data-aos="fade-up"
              >
                Các Tình Trạng Răng Của Khách hàng
              </div>
              <div
                className="thamy_content_detail_header1_bot"
                data-aos="fade-up"
              >
                Với lợi thế về cải thiện thẩm mỹ, nha khoa thẩm mỹ có thể khắc
                phục các khiếm khuyết của răng về màu sắc, hình dáng và các vấn
                đề về nướu.
              </div>
            </div>
            <div className="thammy_content_detail_1">
              <div className="thammy_content_detail_bot1" data-aos="fade-up">
                <GiConfirmed className="thammy_icon" />
                Người có màu răng gốc xỉn màu hoặc bị nhiễm tetracycline, nhiễm
                florua cảm thấy thiếu tự tin, ngại giao tiếp.
              </div>
              <div className="thammy_content_detail_bot1" data-aos="fade-up">
                <GiConfirmed className="thammy_icon" />
                Người bị răng thưa (hở kẽ), răng lệch lạc nhẹ hoặc nứt, mẻ do
                chấn thương kém thẩm mỹ.
              </div>
              <div className="thammy_content_detail_bot1" data-aos="fade-up">
                <GiConfirmed className="thammy_icon" />
                Người có nướu răng lộ ra quá nhiều khi cười, ảnh hưởng đến thẩm
                mỹ khuôn mặt.
              </div>
              <div className="thammy_content_detail_bot1" data-aos="fade-up">
                <GiConfirmed className="thammy_icon" />
                Người có răng bị sâu nhiều, viêm tủy hoặc vỡ lớn gây khó khăn
                trong khi ăn nhai.
              </div>
              <div className="thammy_content_detail_bot1" data-aos="fade-up">
                <GiConfirmed className="thammy_icon" />
                Người có nướu răng bị thâm đen ảnh hưởng đến thẩm mỹ nụ cười.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thammy_loiich_container">
        <div className="loiich_title" data-aos="fade-up">
          Lợi Ích Khi <br /> Làm Thẩm Mỹ Răng
        </div>
        <div className="loiich_title_detail" data-aos="fade-up">
          Thẩm mỹ răng là giải pháp được nhiều khách hàng lựa chọn để cải thiện
          khiếm khuyết răng nướu và lấy lại hàm răng khỏe đẹp, trắng sáng cùng
          nụ cười rạng rỡ.
        </div>
        <div className="loiich_content">
          <div className="loiich_img" data-aos="fade-up">
            <img src={loiich} alt="?" />
          </div>

          <div className="loiich_content_detail" data-aos="fade-up">
            <div
              className={`loiich_info ${
                activeIndex === 0 ? "active-info" : ""
              }`}
              onClick={() => handleClickInfo(0)}
            >
              Răng trắng sáng tự nhiên, không hại men răng
              {activeIndex === 0 && (
                <div className="loiich_info_detail">
                  Răng sáng màu, sở hữu màu trắng ngà tự nhiên nhờ công nghệ tẩy
                  trắng răng hiện đại, an toàn và không gây hại cho men răng.
                </div>
              )}
            </div>
            <div
              className={`loiich_info ${
                activeIndex === 1 ? "active-info" : ""
              }`}
              onClick={() => handleClickInfo(1)}
            >
              Khôi phục hàm răng đều đẹp, dáng răng thẩm mỹ
              {activeIndex === 1 && (
                <div className="loiich_info_detail">
                  Hàm răng được điều chỉnh đều hơn, khoảng cách kẽ răng nhỏ lại
                  và không còn sứt mẻ, giúp cười nói thêm tự tin.
                </div>
              )}
            </div>
            <div
              className={`loiich_info ${
                activeIndex === 2 ? "active-info" : ""
              }`}
              onClick={() => handleClickInfo(2)}
            >
              Nướu răng đạt tỷ lệ chuẩn, không lộ nướu quá nhiều khi cười
              {activeIndex === 2 && (
                <div className="loiich_info_detail">
                  Nướu răng sau khi cắt làm thân răng dài ra và chỉ để lộ khoảng
                  1 – 2 mm khi cười, nhờ vậy nụ cười trở nên duyên dáng và ấn
                  tượng hơn.
                </div>
              )}
            </div>
            <div
              className={`loiich_info ${
                activeIndex === 3 ? "active-info" : ""
              }`}
              onClick={() => handleClickInfo(3)}
            >
              Nướu răng hồng hào, duy trì hiệu quả lâu dài
              {activeIndex === 3 && (
                <div className="loiich_info_detail">
                  Với công nghệ hiện đại, nướu răng thâm đen trở nên hồng hào và
                  đều màu, duy trì lâu dài mà không làm ảnh hưởng đến khoang
                  miệng.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThamMy;
