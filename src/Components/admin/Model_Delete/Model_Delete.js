import React from 'react'
import "./Model_Delete.scss"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
function Model_Delete({onClose,DeleteEmployeeID,isDeleteConsultant}) {
    const notify_delete = () =>
        toast.error("Xoá thành công!", {
            icon: <AiOutlineDelete style={{ color: "#0C2D79", fontSize: "24px" }} />,
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            style: {
                color: "#0C2D79",
                fontWeight: "bold",
            },
        });

// Call API delete information of a employee
    const deleteEmployeeAPI = async () => {
        const token = localStorage.getItem("accessToken");
            const url = isDeleteConsultant
                ? `http://localhost:3001/api/v1/admin/consultant/${DeleteEmployeeID}`
                : `http://localhost:3001/api/v1/admin/doctor/${DeleteEmployeeID}`;
        try {
            const response = await axios.delete(url, {
                headers: { Authorization: `Bearer ${token}` },
            })
            notify_delete(response.data.message);
            setTimeout(() => {
              onClose(); // Đóng form sau khi cập nhật
              window.location.reload();
          }, 500);
        } catch (error) {
             if(error.response) {
                toast.error(error.response.data.message);
                        }
        }
    };
  return (
    <div className="overlay">
    <div className="dialog">
      <div className="content">
        {/* Header */}
        <div className="delete_top">
          <h5 className="title">Xoá nhân viên</h5>
        </div>
        {/* Body */}
        <div className="body">
          Xác nhận xoá nhân viên này
        </div>
        {/* Footer */}
        <div className="footer">
          <button className="close" onClick={onClose}>Huỷ</button>
          <button className="confirm" onClick={deleteEmployeeAPI}>Xoá </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Model_Delete