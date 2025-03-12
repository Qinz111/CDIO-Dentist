import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HomePage.scss";
import { getInfo } from "../../../../services/ConsultantService";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate(); // Hook để điều hướng

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const id = localStorage.getItem("consultantId");

        if (!token || !id) {
          handleLogout();
          return;
        }

        const res = await getInfo({
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) {
          setUserInfo(res.data);
        } else {
          console.error("Không nhận được dữ liệu hợp lệ:", res);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          handleLogout();
        }
      }
    };

    fetchInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("consultantId");
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

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
