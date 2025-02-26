import React, { useState } from "react";
import "./TuVan.scss";

const TuVan = () => {
  const [date, setDate] = useState("2025-02-23"); 
  const [appointments, setAppointments] = useState([
    { id: 1, 
      phone: "0919 220 124", 
      date: "2025-02-23", 
      time: "11:30-AM" 
    },
    { id: 2,
       phone: "0919 670 229", 
       date: "2025-02-25", 
       time: "14:00-PM" 
      },
    { id: 3, 
      phone: "0919 670 922", 
      date: "2025-02-23", 
      time: "09:45-AM" 
    },
    { id: 4, 
      phone: "0919 670 155", 
      date: "2025-02-25", 
      time: "10:30-AM" 
    },
    { id: 5, 
      phone: "0919 670 194", 
      date: "2025-02-23", 
      time: "13:15-PM" },
    { id: 6, 
      phone: "0919 670 100", 
      date: "2025-02-25", 
      time: "15:00-PM" },
    { id: 7, 
      phone: "0919 670 817", 
      date: "2025-02-23", 
      time: "16:45-PM" 
    },
    { id: 8, 
      phone: "0919 456 789", 
      date: "2025-02-25", 
      time: "17:30-PM" 
    },
    { id: 9, 
      phone: "0919 670 125", 
      date: "2025-02-23", 
      time: "18:00-PM" },
    { id: 10, 
      phone: "0935 149 084", 
      date: "2025-02-25", 
      time: "08:20-AM" },
    { id: 11, 
      phone: "0935 149 084", 
      date: "2025-02-24", 
      time: "12:45-AM" },
    { id: 12, 
      phone: "0935 149 084", 
      date: "2025-02-26", 
      time: "14:10-PM" },
    { id: 13, 
      phone: "0935 149 084", 
      date: "2025-02-26", 
      time: "19:30-PM" },
  ]);

  const handleTimeChange = (id, newTime) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appt) =>
        appt.id === id ? { ...appt, time: newTime } : appt
      )
    );
  };

  const filteredAppointments = appointments.filter((item) => item.date === date);

  return (
    <div className="container-tuvan">
      <div className="header-tuvan">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <table className="table-tuvan">
        <thead>
          <tr>
            <th>STT</th>
            <th>SỐ ĐIỆN THOẠI</th>
            <th>GIỜ HẸN</th>
            <th>NGÀY HẸN</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.phone}</td>
                <td>
                  {item.time}
                </td>
                <td>{new Date(item.date).toLocaleDateString("vi-VN")}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Không có lịch hẹn</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TuVan;
