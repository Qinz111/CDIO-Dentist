import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./Calendar.scss";
import FormRegister from "../FormRegister/FormRegister";

const Calendar = ({ show, setShow, dentist }) => {
  const [showFormRegister, setShowFormRegister] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    setShowFormRegister(true);
  };

  if (!dentist) {
    return null;
  }

  return (
    <>
      <Modal show={show} size="xl">
        <div className="modal-content">
          <div className="calendar-container">
            <div className="dentist-calendar">
              <div className="dentist-image">
                <img src={dentist?.image} alt="dentist" />
              </div>
              <div className="dentist-status">
                <div className="free">Chưa đặt</div>
                <div className="busy">Đã đặt</div>
              </div>
            </div>
            <div className="user-calendar-container">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView="timeGridDay"
                events={dentist?.schedule || []}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "timeGridDay,timeGridWeek",
                }}
                allDaySlot={false}
                slotMinTime="08:00:00"
                slotMaxTime="18:00:00"
                height="auto"
              />
            </div>
          </div>

          <div className="calendar-footer">
            <button className="submit-btn" onClick={handleSubmit}>
              Đặt lịch
            </button>
          </div>

          <div className="box-close" onClick={handleClose}>
            <div className="close-icon">
              <IoMdClose />
            </div>
          </div>
        </div>
      </Modal>

      <FormRegister show={showFormRegister} setShow={setShowFormRegister} />
    </>
  );
};

export default Calendar;
