import React, { useEffect, useState } from "react";
import "./ShowInformation.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineDelete } from "react-icons/ai";
import Adjust from "../ModelAdjust/Adjust";
import axios from "axios";

const ShowInformation = ({ onClose, isConsulting, employeeId }) => {
    const [showAdjust, setShowAdjust] = useState(false);
    const [employee, setEmployee] = useState(null);

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
    // Gọi API show thông tin
    useEffect(() => {
        const showEmployeesId = async () => {
            if (!employeeId) return;
    
            const token = localStorage.getItem("accessToken");
            const url = isConsulting
                ? `http://localhost:3001/api/v1/admin/consultant/${employeeId}`
                : `http://localhost:3001/api/v1/admin/doctor/${employeeId}`;
            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setEmployee(response.data[0]); 
            
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                }
            }
        };
    
        showEmployeesId();
    }, [employeeId, isConsulting]);

    // Kiểm tra nếu employee chưa có dữ liệu // bug
    if (!employee) {
        return <p>Đang tải dữ liệu...</p>;
    }
    // gọi API xoá thông xin\
    const deleteEmployee = async () => {
        const token = localStorage.getItem("accessToken");
            const url = isConsulting
                ? `http://localhost:3001/api/v1/admin/consultant/${employeeId}`
                : `http://localhost:3001/api/v1/admin/doctor/${employeeId}`;
        try {
            const response = await axios.delete(url, {
                headers: { Authorization: `Bearer ${token}` },
            })
            notify_delete();
        } catch (error) {
             if(error.response) {
                toast.error(error.response.data.message);
                        }
        }
    };
    return (
        <div className="show-information-overlay">
            <div className="show-information-content">
                <h2>THÔNG TIN NHÂN VIÊN</h2>
                <form className="information_detail" key={employee.id}>
                    <div className="form-group">
                        <label>Họ và tên:</label>
                        {employee.name}
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh:</label>
                        {employee.dob ? new Date(employee.dob).toISOString().split("T")[0] : "" }
                    </div>
                    <div className="form-group">
                        <label>Giới tính:</label>
                        {employee.male ? "Nam" : "Nữ"}
                    </div>
                    <div className="form-group">
                        <label>MSNV:</label>
                        {employee.id}
                    </div>
                    <div className="form-group">
                        <label>SĐT:</label>
                        {employee.phone}
                    </div>
                    <div className="form-group">
                        <label>EMAIL:</label>
                        {employee.email}
                    </div>
                    <div className="form-group">
                        <label>ĐỊA CHỈ:</label>
                        {employee.location}
                    </div>
                    {!isConsulting && (
                        <div className="form-group">
                            <label>KINH NGHIỆM:</label>
                            {employee.experience}
                        </div>
                    )}
                    <div className="button-group">
                        <div className="button-group-right">
                            <button className="button-close" type="button" onClick={onClose}>
                                Hủy
                            </button>
                        </div>
                        <div className="button-group-left">
                            <button className="button-delete" type="button" onClick={deleteEmployee}>
                                Xoá
                            </button>
                            <button className="button-adjust" type="button" onClick={() => setShowAdjust(true)}>
                                Điều chỉnh
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={1200} hideProgressBar={false} closeOnClick pauseOnHover={false} draggable={false} theme="light" />
            {showAdjust && <Adjust onClose={() => setShowAdjust(false)}
                            adjustEmployeeId = {employee.id}
                            isAdjustConsulting = {isConsulting}                     />}
        </div>
    );
};

export default ShowInformation;
