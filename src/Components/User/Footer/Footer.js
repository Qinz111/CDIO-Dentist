import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <footer className="bg-body-tertiary text-center footer-container">
        Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam
        <div className="container p-1">
          <section className="mb-4">
            <p>
              PĐKKD: 0107473432 do sở KH & ĐT TP. Hà Nội cấp ngày 11/01/2025.
              Giấy phép hoạt động khám bệnh, chữa bệnh số: 3028/SYT - GPHĐ do Sở
              Y tế TP. Hà Nội cấp ngày 11/01/2025.
              <br />
              Chịu trách nhiệm nội dung: Ban truyền thông Công ty TNHH Nha Khoa
              CDIO
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">contact</h5>

                <ul className="list-unstyled mb-0">
                  <li>facebook: facebook.com/cupoftea</li>
                  <li>Phone: 1900 6900</li>
                  <li>Email: tuvan@nhakhoacdio.vn.</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">location</h5>

                <ul className="list-unstyled mb-0">
                  <li>Bae, Quang Nam, Vietnam</li>
                  <li>Baby, Ho Chi Minh, Vietnam</li>
                  <li>My Love, Ha Noi, Vietnam</li>
                  <li>Dog, Da Nang , Vietnam</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3">
          @2025:
          <a className="text-reset fw-bold" href="/">
            Công ty nha khoa CDIO.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
