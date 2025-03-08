import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { getSchedule } from "../../../../services/userService";

const CalendarManage = () => {
  const location = useLocation();
  const dentist_manage = location.state?.dentist;
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        if (!dentist_manage?.id) {
          console.warn("Dentist ID chưa có, không thể lấy lịch.");
          return;
        }

        console.log("Fetching schedule for dentist ID:", dentist_manage.id);

        const response = await getSchedule(dentist_manage.id);
        console.log("Dữ liệu API trả về:", response.data);

        let events = [];

        // Kiểm tra nếu response.data.schedules là một mảng
        if (Array.isArray(response.data.schedules)) {
          events = response.data.schedules
            .filter((event) => event.start_time && event.end_time) // Lọc ra những event hợp lệ
            .map((event) => ({
              id: event.id,
              title: event.user_name || "Lịch trống",
              start: new Date(event.start_time).toISOString(), // Chuyển đổi sang định dạng ISO 8601
              end: new Date(event.end_time).toISOString(),
              backgroundColor: event.is_available ? "green" : "red",
            }));
        }

        console.log("Danh sách sự kiện sau khi xử lý:", events);

        setSchedule(events);
      } catch (error) {
        console.error("Lỗi khi lấy lịch trình:", error);
      }
    };

    fetchSchedule();
  }, [dentist_manage]);

  if (!dentist_manage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-content">
      <div className="calendar-container">
        <div className="dentist-calendar">
          <div className="dentist-image">
            <img src={dentist_manage.profile_image} alt="Dentist" />
          </div>
          <div className="dentist-status">
            <button className="btn-schedule">Lịch</button>
          </div>
        </div>
        <div className="user-calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="timeGridDay"
            events={schedule}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            allDaySlot={false}
            height="auto"
            slotMinTime="07:00:00" // Bắt đầu từ 7h sáng
            slotMaxTime="17:00:00" // Kết thúc lúc 17h chiều
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarManage;
