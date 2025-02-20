import React from "react";
import { useLocation } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./Calendar.scss";

const Calendar = () => {
  const location = useLocation();
  const dentist = location.state?.dentist;

  if (!dentist) {
    return <div>Loading...</div>;
  }

  console.log(dentist);
  return (
    <div>
      <div className="modal-content">
        <div className="calendar-container">
          <div className="dentist-calendar">
            <div className="dentist-image">
              <img src={dentist.image} alt={dentist.name} />
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
              events={dentist.schedule || []}
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

export default Calendar;
