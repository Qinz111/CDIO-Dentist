import React, { useState, useEffect } from "react";
import "./TuVan.scss";
import {
  confirmReq,
  getApoinReq,
} from "../../../../services/ConsultantService";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import { MdError } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
const TuVan = () => {
  const [appointment, setAppointment] = useState([]);

  const getAppoinment = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Không có token trong localStorage.");
        return;
      }

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
      toast.error("Lỗi khi tải lịch hẹn. Vui lòng thử lại!", {
        icon: <MdError style={{ color: "red", fontSize: "24px" }} />,
      });
    }
  };

  useEffect(() => {
    getAppoinment();
    const interval = setInterval(() => {
      getAppoinment();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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

      const res = await confirmReq(
        id,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data) {
        toast.success(
          status === 1
            ? "Lịch hẹn đã được duyệt thành công!"
            : "Lịch hẹn đã bị từ chối!",
          {
            icon: <GoCheck style={{ color: "#0C2D79", fontSize: "24px" }} />,
          }
        );
        getAppoinment();
      } else {
        toast.error("Phản hồi không hợp lệ từ server!");
      }
    } catch (error) {
      console.error("Lỗi khi duyệt lịch hẹn:", error);
      toast.error("Đã có người đặt thời gian này", {
        icon: <MdError style={{ color: "red", fontSize: "24px" }} />,
      });
    }
  };

  return (
    <div className="container-tuvan">
      <ToastContainer />
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
                <td className="btn-confirm-appointment">
                  <button
                    // className="btn-confirm-appointment"
                    onClick={() => handleConfirmAppointment(item.id, 1)}
                  >
                    Xác nhận
                  </button>
                </td>
                <td className="btn-reject-appointment">
                  <button
                    className="btn-confirm-appointment"
                    onClick={() => handleConfirmAppointment(item.id, 0)}
                  >
                    Từ chối
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>
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
