import React, { useState } from "react";
import "./Content.scss";
import GroupInforUser from "./GroupInforUser/GroupInforUser";
import FormRegister from "./FormRegister/FormRegister";
import UuDai from "./Description/BangGiaUuDai/UuDai";
import CDIO from "./Description/VeNhaKhoaCDIO/CDIO";
import ThamMy from "./Description/NhaKhoaThamMy/ThamMy";
import TongQuat from "./Description/NhaKhoaTongQuat/TongQuat";
import HamMat from "./Description/ThamMyHamMat/HamMat";
// import HomePage from "./HomePage/HomePage";
import s1 from "../../../assets/cdio-dentist.png";
import s2 from "../../../assets/hp2.png";
import s3 from "../../../assets/hp3.png";
import s4 from "../../../assets/hp4.png";
const Content = () => {
  const [showFormRegister, setShowFormRegister] = useState(false);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="home-page-user">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
        </div>
        <div className="container">
          <div className="content">
            <GroupInforUser />
          </div>
        </div>

        <div className="fixed-buttons">
          <div className="btn-image">
            <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                <div className="hotline-phone-ring-circle"></div>
                <div className="hotline-phone-ring-circle-fill"></div>
                <div className="hotline-phone-ring-img-circle">
                  <a
                    href="tel: 123456789"
                    className="pps-btn-img"
                    rel="nofollow"
                  >
                    <img src="/images/btn-phone.png" alt="Gọi ngay" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hotline-register-ring-wrap">
              <div className="hotline-register-ring">
                <div className="hotline-register-ring-circle"></div>
                <div className="hotline-register-ring-circle-fill"></div>
                <div
                  className="hotline-register-ring-img-circle"
                  onClick={() => setShowFormRegister(true)}
                >
                  <img src="/images/dk-btn.png" alt="Register" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CDIO />
      <ThamMy />
      <TongQuat />
      <HamMat />
      <UuDai />

      <FormRegister show={showFormRegister} setShow={setShowFormRegister} />
    </div>
  );
};

export default Content;
