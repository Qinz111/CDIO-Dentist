import React, { useEffect, useState } from "react";
import "./ShowInformation.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineDelete } from "react-icons/ai";
import Adjust from "../ModelAdjust/Adjust";
import axios from "axios";
import { FiMoreHorizontal } from "react-icons/fi";
import Model_Delete from "../../admin/Model_Delete/Model_Delete";
import { showEmployeesByID } from "../../../services/adminService";
const ShowInformation = ({ onClose, isConsulting, employeeId }) => {
  const [showAdjust, setShowAdjust] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [modelDelete, setModelDelete] = useState(false);
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
  // Call API show information of a employee
  const showEmployeesIdAPI = async () => {
    if (!employeeId) return;
    try {
      const response = await showEmployeesByID(employeeId, isConsulting);
      setEmployee(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    showEmployeesIdAPI();
  }, [employeeId, isConsulting]);
  return (
    <div className="show-information-overlay">
      <div className="show-information-content">
        <div className="content">
        <h2>{isConsulting ? "Thông tin nhân viên tư vấn" : "Thông tin bác sĩ"}</h2>
          <FiMoreHorizontal
            className="icon"
            onClick={() => setDeleteVisible(!deleteVisible)}
          />
        </div>
        <div className={`content-delete ${deleteVisible ? "show-menu" : ""}`}>
          <li onClick={() => setModelDelete(true)}>Xoá nhân viên</li>
        </div>
        <form className="information_detail" key={employee?.id}>
          <div div className="form-group image-container">
            {employee?.profile_image ? (
              <img
                src={employee?.profile_image}
                alt="Employee"
                className="employee-image"
              />
            ) : (
              <p>Chưa có ảnh</p>
            )}
          </div>
          <div className="form-group">
            <label>MSNV:</label>
            {employee?.id}
          </div>
          <div className="form-group">
            <label>Họ và tên:</label>
            {employee?.name}
          </div>
          <div className="form-group">
            <label>Giới tính:</label>
            {employee?.male ? "Nam" : "Nữ"}
          </div>
          <div className="form-group">
            <label>Ngày sinh:</label>
            {employee?.dob
              ? new Date(employee.dob).toISOString().split("T")[0]
              : ""}
          </div>
          <div className="form-group">
            <label>SĐT:</label>
            {employee?.phone}
          </div>
          <div className="form-group">
            <label>EMAIL:</label>
            {employee?.email}
          </div>
          <div className="form-group">
            <label>ĐỊA CHỈ:</label>
            {employee?.location}
          </div>
          {!isConsulting && (
            <div className="form-group">
              <label>KINH NGHIỆM:</label>
              <pre className="experience-text">{employee?.experience}</pre>
            </div>
          )}
          <div className="button-group">
            <div className="button-group-right">
              <button className="button-close" type="button" onClick={onClose}>
                Hủy
              </button>
            </div>
            <div className="button-group-left">
              <button
                className="button-adjust"
                type="button"
                onClick={() => setShowAdjust(true)}
              >
                Điều chỉnh
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        theme="light"
      />
      {showAdjust && (
        <Adjust
          onClose={() => setShowAdjust(false)}
          adjustEmployeeId={employee.id}
          isAdjustConsulting={isConsulting}
        />
      )}
      {modelDelete && (
        <Model_Delete
          onClose={() => setModelDelete(false)}
          DeleteEmployeeID={employee.id}
          isDeleteConsultant={isConsulting}
        />
      )}
    </div>
  );
};

export default ShowInformation;
