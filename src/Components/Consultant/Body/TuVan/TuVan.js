import React, { useState, useEffect } from "react";
import "./TuVan.scss";
import { getApoinReq } from "../../../../services/ConsultantService";
import { format } from "date-fns";
import "./TuVan.scss";

const TuVan = () => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    const getAppoinment = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Không có token trong localStorage.");
          return;
        }

        // Gọi API với headers
        const res = await getApoinReq({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data && Array.isArray(res.data.appointmentRequests)) {
          setAppointment(res.data.appointmentRequests);
        } else {
          console.error("Dữ liệu lịch hẹn không hợp lệ:", res.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy lịch hẹn:", error);
      }
    };

    getAppoinment();
  }, []);

  // Hàm định dạng thời gian
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), "dd/MM/yyyy HH:mm");
  };

  return (
    <div className="container-tuvan">
      <table className="table-tuvan">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>ID DOCTOR</th>
            <th>TÊN KHÁCH HÀNG</th>
            <th>SỐ ĐIỆN THOẠI</th>
            <th>GIỜ HẸN</th>
            <th>NGÀY TẠO</th>
          </tr>
        </thead>
        <tbody>
          {appointment.length > 0 ? (
            appointment.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.doctor_id}</td>
                <td>{item.customer_name}</td>
                <td>{item.customer_phone}</td>
                <td>{formatDate(item.preferred_time)}</td>
                <td>{formatDate(item.created_at)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                Không có lịch hẹn
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TuVan;
