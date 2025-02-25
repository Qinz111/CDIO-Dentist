import React, { useEffect } from "react";
import tongquat from "../../../../../assets/tongquat.jpg";
import "./TongQuat.scss";
import AOS from "aos";
import quytrinh from "../../../../../assets/quytrinh.png";
const TongQuat = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="tongquat">
      <div className="container mx-auto p-6 tongquat_container">
        <div className="p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-2/3">
            <div className="tongquat_title" data-aos="fade-up">
              NHA KHOA TỔNG QUÁT
            </div>
            <div
              className="text-xl font-bold mb-4 tongquat_detail"
              data-aos="fade-up"
            >
              Để có một hàm răng khỏe đẹp giúp chúng ta tự tin và thoải mái hơn
              trong mọi hoạt động của cuộc sống. Vì vậy, việc thăm khám nha khoa
              thường xuyên là rất quan trọng và cần được chú ý. Điều này giúp
              phát hiện sớm các vấn đề hoặc bệnh lý về răng miệng. Để đảm bảo
              sức khỏe răng miệng tốt, bạn nên thăm khám nha khoa tổng quát định
              kỳ ít nhất 6 tháng một lần. Vậy, bạn đã khám nha khoa tổng quát
              chưa? Hãy đến <a className="text-blue">CDIO DENTIST</a> để trãi
              nghiệm ngay nhé!
            </div>
            <h3
              className="text-lg font-semibold mb-2 text-small-title"
              data-aos="fade-up"
            >
              Nha khoa tổng quát là gì?
            </h3>
            <div className="tongquat_description" data-aos="fade-up">
              Nha Khoa Tổng Quát là một ngành trong lĩnh vực nha khoa chuyên tập
              trung vào việc chẩn đoán, điều trị và phòng ngừa các vấn đề liên
              quan đến răng miệng và đưa ra phương pháp điều trị phù hợp và kịp
              thời.
              <div className="tongquat_img" data-aos="fade-up">
                <img src={tongquat} alt="" />
              </div>
              Thường xuyên đi khám nha khoa tổng quát là cách tốt nhất để bảo vệ
              và ngăn ngừa các bệnh về răng miệng, giúp có một hàm răng khỏe
              mạnh, ăn nhai dễ dàng và thẩm mỹ. Giúp bạn tự tin và gặp nhiều
              thuận lợi trong cuộc sống. Việc thăm khám nha khoa tổng quát nên
              được thực hiện định kỳ, ít nhất là 6 tháng một lần để có thể can
              thiệp kịp thời và hiệu quả. Nếu không chữa trị kịp thời, các bệnh
              lý về răng miệng có thể dẫn đến việc mất răng sớm.
            </div>
            <h3 className="text-lg font-semibold mb-2" data-aos="fade-up">
              Dịch vụ nha khoa tổng quát bao gồm:
            </h3>
            <ul className="list-disc list-inside mb-4" data-aos="fade-up">
              <li data-aos="fade-up">
                ✔️ Khám răng định kỳ – Kiểm tra tổng quát giúp phát hiện sớm các
                bệnh lý răng miệng.
              </li>
              <li data-aos="fade-up">
                ✔️ Cạo vôi &amp; đánh bóng răng – Loại bỏ mảng bám, ngăn ngừa
                viêm nướu và sâu răng.
              </li>
              <li data-aos="fade-up">
                ✔️ Điều trị sâu răng – Trám răng thẩm mỹ với vật liệu an toàn,
                đảm bảo chức năng và tính thẩm mỹ.
              </li>
              <li data-aos="fade-up">
                ✔️ Điều trị viêm nướu &amp; viêm nha chu – Ngăn ngừa và điều trị
                bệnh nướu răng, bảo vệ chân răng chắc khỏe.
              </li>
              <li data-aos="fade-up">
                ✔️ Nhổ răng không đau – Áp dụng công nghệ hiện đại giúp giảm
                thiểu đau nhức.
              </li>
              <li data-aos="fade-up">
                ✔️ Tư vấn và hướng dẫn chăm sóc răng miệng – Giúp bạn duy trì
                hàm răng khỏe đẹp lâu dài.
              </li>
            </ul>
            <h3
              className="text-lg font-semibold mb-2 text-quy-trinh"
              data-aos="fade-up"
            >
              Quy trình thăm khám và điều trị
            </h3>
            <div data-aos="fade-up">
              Khi đến với Nha Khoa Quốc Tế SG, chúng tôi sẽ thăm khám và tư vấn
              cho bạn về tình trạng răng miệng của bạn để có một hàm răng khỏe
              mạnh và đẹp.
            </div>
            <div className="tongquat_img" data-aos="fade-up">
              <img src={quytrinh} alt="" />
            </div>
            <ul
              className="list-disc list-inside mb-4 quytrinh_detail"
              data-aos="fade-up"
            >
              <li data-aos="fade-up">
                Bước 1: Kiểm tra tổng quát về tình trạng răng miệng
              </li>
              <li data-aos="fade-up">
                Bước 2: Làm sạch răng, cạo vôi và đánh bóng.{" "}
              </li>
              <li data-aos="fade-up">
                Bước 3: Thực hiện các điều trị như trám răng, điều trị răng sâu,
                trám phòng ngừa cho trẻ em hoặc điều trị tủy.
              </li>
              <li data-aos="fade-up">
                Bước 4: Hướng dẫn bạn cách chăm sóc răng miệng đúng cách và đề
                xuất tái khám định kỳ 6 tháng một lần.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongQuat;
