import React from "react";
import { useLocation } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./CalenderManage.scss";

const CalenderManage = () => {
  const location = useLocation();
  const dentist_manage = location.state?.dentist_manage;

  if (!dentist_manage) {
    return <div>Loading vl...</div>;
  }

  // console.log("dentist:", dentist_manage);
  return (
    <div>
      <div className="modal-content">
        <div className="calendar-container">
          <div className="dentist-calendar">
            <div className="dentist-image">
              <img src={dentist_manage.image} alt={dentist_manage.name} />
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
              events={dentist_manage.schedule || []}
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
      </div>
    </div>
  );
};

export default CalenderManage;
