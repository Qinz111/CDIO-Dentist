import React, { useState, useEffect } from "react";
import "./TuVan.scss";
import {
  confirmReq,
  getApoinReq,
} from "../../../../services/ConsultantService";
import { format } from "date-fns";
import "./TuVan.scss";

const TuVan = () => {
  const [appointment, setAppointment] = useState([]);

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
  useEffect(() => {
    getAppoinment();

    const interval = setInterval(() => {
      getAppoinment();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Hàm định dạng thời gian
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return format(new Date(dateString), "dd/MM/yyyy HH:mm");
  };

  const handleConfirmAppointment = async (id, status) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Không có token trong localStorage.");
        return;
      }

      // Gọi API với body chứa status
      const res = await confirmReq(
        id,
        { status: status },
        {
          // Thêm status vào body
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data) {
        console.log("Lịch hẹn đã được duyệt:", res.data);

        // Gọi lại API để cập nhật danh sách lịch hẹn
        getAppoinment();
      } else {
        console.error("Phản hồi không hợp lệ:", res);
      }
    } catch (error) {
      console.error("Lỗi khi duyệt lịch hẹn:", error);
    }
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
            <th>Duyệt</th>
            <th>Từ Chối</th>
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
                <td>
                  <button
                    className="btn-confirm-appointment"
                    onClick={() => handleConfirmAppointment(item.id, 1)}
                  >
                    OK
                  </button>
                </td>
                <td>
                  <button
                    className="btn-confirm-appointment"
                    onClick={() => handleConfirmAppointment(item.id, 0)}
                  >
                    No
                  </button>
                </td>
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
