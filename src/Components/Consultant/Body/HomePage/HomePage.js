import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { getInfo } from "../../../../services/ConsultantService";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const id = localStorage.getItem("consultantId"); // Lấy id từ localStorage

        if (!token || !id) {
          console.error("Không có token hoặc ID, vui lòng đăng nhập.");
          return;
        }

        // Gọi API với token
        const res = await getInfo({
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) {
          setUserInfo(res.data); // Lưu thông tin vào state
        } else {
          console.error("Không nhận được dữ liệu hợp lệ:", res);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
      }
    };

    console.log(userInfo);
    fetchInfo();
  }, []);

  return (
    <div className="home-page-container">
      <div className="left">
        <div className="thongtincanhanh">
          <div className="contener">
            <div className="j97">
              <img
                src={`http://localhost:3001/${userInfo?.profile_image}`}
                alt="?"
              />
            </div>
            <div className="thongtin">
              <h1>THÔNG TIN CÁ NHÂN</h1>
              {userInfo ? (
                <>
                  <p>Họ tên: {userInfo.name}</p>
                  <p>MSNV: {userInfo.id}</p>
                  <p>Email: {userInfo.email}</p>
                  <p>Phone: {userInfo.phone}</p>
                </>
              ) : (
                <p>Đang tải thông tin...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
