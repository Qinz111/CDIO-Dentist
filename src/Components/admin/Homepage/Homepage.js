import React, { useState } from "react";
import "./Homepage.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import s1 from "../../../assets/cdio-dentist.png";
import s2 from "../../../assets/hp2.png";
import s3 from "../../../assets/hp3.png";
import s4 from "../../../assets/hp4.png";
import axios from "axios";
const Homepage_Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const storeTokenData = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  // Xử lý đăng nhập
  const GoAhead = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/admin/login",
        { email, password }
      );
      const { accessToken, refreshToken } = response.data; // dữ liệu trả về từ API
      storeTokenData(accessToken, refreshToken);
      navigate("Doctors");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="home-page">
        <img src={s1} alt="" />
        <img src={s2} alt="" />
        <img src={s3} alt="" />
        <img src={s4} alt="" />
      </div>
      <div className="login__card">
        <div className="login__custom">CIDO</div>
        <h1 className="login__title">Đăng nhập</h1>

        <form onSubmit={GoAhead}>
          <div className="login__input-container">
            <input
              type="email"
              placeholder="Nhập Email"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="login__icon" />
          </div>
          <div className="login__input-container">
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="login__icon" />
          </div>
          <div className="errorMessage">{errorMessage}</div>
          <button type="submit" className="login__button">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage_Admin;
