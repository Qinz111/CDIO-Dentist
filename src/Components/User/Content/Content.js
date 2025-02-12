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
        <div className="home-page">
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
            <div className="btn-dk">
              <button onClick={() => setShowFormRegister(true)}>
                <img src="/images/dk-btn.png" alt="" />
              </button>
            </div>

            <div className="btn-phone">
              <a href="tel:1900123456">
                <button>
                  <img src="/images/phone-btn.png" alt="" />
                </button>
              </a>
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
