import React, { useState } from "react";
import "./Content.scss";
import GroupInforUser from "./GroupInforUser/GroupInforUser";
import LocationModal from "./Location/LocationModal";
import DentistModal from "./Dentist/DentistModal";
import FormRegister from "./FormRegister/FormRegister";
import Calendar from "./Calendar/Calendar";
import UuDai from "./Description/BangGiaUuDai/UuDai";
import CDIO from "./Description/VeNhaKhoaCDIO/CDIO";
import ThamMy from "./Description/NhaKhoaThamMy/ThamMy";
import TongQuat from "./Description/NhaKhoaTongQuat/TongQuat";
import HamMat from "./Description/ThamMyHamMat/HamMat";

const Content = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showDentist, setShowDentist] = useState(false);
  const [showFormRegister, setShowFormRegister] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDentist, setSelectedDentist] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowDentist(true);
  };

  const handleDentistSelect = (dentist) => {
    setSelectedDentist(dentist);
    setShowDentist(false);
    setShowCalendar(true);
  };

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="container">
          <div className="content">
            <GroupInforUser />
          </div>
        </div>

        <div className="fixed-buttons">
          <div className="btn-image">
            <div className="btn-dk">
              <button onClick={() => setShowLocation(true)}>
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

      <LocationModal
        show={showLocation}
        setShow={setShowLocation}
        onSelectLocation={handleLocationSelect}
      />

      <DentistModal
        show={showDentist}
        setShow={setShowDentist}
        onSelectDentist={handleDentistSelect}
      />

      <Calendar
        show={showCalendar}
        setShow={setShowCalendar}
        dentist={selectedDentist}
      />

      <FormRegister show={showFormRegister} setShow={setShowFormRegister} />
    </div>
  );
};

export default Content;
