import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./CalenderManage.scss";
import { getDoctorSchedule } from "../../../../../services/ConsultantService";

const CalendarManage = () => {
  const location = useLocation();
  const dentist_manage = location.state?.dentist_manage;
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSchedule = async () => {
      if (!dentist_manage?.id) return;

      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Không có token trong localStorage.");
          return;
        }

        const response = await getDoctorSchedule(dentist_manage.id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Dữ liệu API trả về:", response.data); // Debug dữ liệu API

        // Kiểm tra dữ liệu API
        if (!response.data) {
          console.error("API không trả về dữ liệu hợp lệ.");
          return;
        }

        let events = [];
        if (Array.isArray(response.data)) {
          // Trường hợp API trả về danh sách
          events = response.data
            .filter((event) => event.start_time && event.end_time)
            .map((event) => ({
              id: event.id,
              title: event.user_name || "Lịch trống",
              start: event.start_time,
              end: event.end_time,
              backgroundColor: event.is_available ? "green" : "red",
            }));
        } else {
          // Trường hợp API chỉ trả về một object
          const event = response.data;
          if (event.start_time && event.end_time) {
            events = [
              {
                id: event.id,
                title: event.user_name || "Lịch trống",
                start: event.start_time,
                end: event.end_time,
                backgroundColor: event.is_available ? "green" : "red",
              },
            ];
          }
        }

        setSchedule(events);
      } catch (error) {
        console.error("Lỗi khi lấy lịch bác sĩ:", error);
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
            <a
              className="fancy"
              onClick={() => navigate("/consultant/quan-li-bs")}
            >
              <span className="top-key"></span>
              <span className="text">Trở về</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
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
              right: "dayGridMonth,timeGridWeek,timeGridDay", // Thêm chế độ xem theo tháng
            }}
            allDaySlot={false}
            slotMinTime="07:00:00"
            slotMaxTime="19:00:00"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarManage;
