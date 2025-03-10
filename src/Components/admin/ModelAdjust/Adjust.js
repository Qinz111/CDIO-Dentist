import React, { useEffect, useState } from "react";
import "./Adjust.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import { showEmployeesByID } from "../../../services/adminService";
import { adjustEmployees } from "../../../services/adminService";
const Adjust = ({ onClose, adjustEmployeeId, isAdjustConsulting }) => {
  const [employee, setEmployee] = useState(null);
  const [imageFile, setImageFile] = useState();
  const [image, setImage] = useState(false);
  const notify = () =>
    toast.success("Cập nhật thành công!", {
      icon: <GoCheck style={{ color: "#0C2D79", fontSize: "24px" }} />,
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
  // call APL show Employees'information
  const fetchEmployee = async () => {
    try {
      const response = await showEmployeesByID(
        adjustEmployeeId,
        isAdjustConsulting
      );
      setEmployee(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    fetchEmployee();
  }, [adjustEmployeeId, isAdjustConsulting]);
  const adjustEmployee = async () => {
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("dob", document.getElementById("dob").value);
    formData.append(
      "male",
      document.getElementById("male").value === "Nam" ? 1 : 0
    );

    if (!isAdjustConsulting) {
      formData.append(
        "experience",
        document.getElementById("experience").value
      );
    }

    // Chỉ thêm ảnh nếu người dùng chọn ảnh mới
    if (imageFile) {
      formData.append("profile_image", imageFile);
    } else if (employee?.profile_image) {
      formData.append("profile_image", employee.profile_image);
    }

    try {
      const response = await adjustEmployees(
        adjustEmployeeId,
        isAdjustConsulting,
        formData
      );
      notify(response.data.message);
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 500);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  //onchange
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    let newValue = value;
    if (id === "male") {
      newValue = value === "Nam";
    }

    setEmployee((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEmployee((prev) => ({
        ...prev,
        profile_image: imageUrl,
      }));
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adjustEmployee();
  };

  return (
    <div className="Adjust-overlay">
      <div className="Adjust">
      <div className="Adjust_header">
           {isAdjustConsulting ? "Cập nhật nhân viên tư vấn" : "Cập nhật bác sĩ"}
      </div>
        <div className="Adjust_content">
          <div className="Adjust_content_top">
            <div className="image-upload-section">
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload" className="upload-label">
                {employee?.profile_image ? "Thay đổi ảnh" : "Tải ảnh lên"}
              </label>

              {/* Hiển thị ảnh mới được chọn hoặc ảnh từ dữ liệu ban đầu */}
              {employee?.profile_image ? (
                <img
                  src={employee?.profile_image}
                  alt="Employee"
                  className="employee-image-adjust"
                />
              ) : (
                <p>Chưa có ảnh</p>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="Adjust_content_bottom">
              <div className="Adjust_content_bottom_grid">
                <p>
                  HỌ TÊN:
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập họ tên"
                    value={employee?.name || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  NGÀY SINH:
                  <input
                    id="dob"
                    type="date"
                    placeholder="Nhập ngày sinh"
                    value={
                      employee?.dob
                        ? new Date(employee.dob).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={handleInputChange}
                    required
                    className="NgaySinh"
                  />
                </p>
                <p>
                  GIỚI TÍNH:
                  <select
                    id="male"
                    value={employee?.male ? "Nam" : "Nữ"}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </p>
                <p>
                  SĐT:
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={employee?.phone || ""}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    title="Số điện thoại phải có đúng 10 chữ số"
                  />
                </p>
                <p>
                  EMAIL:
                  <input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    value={employee?.email || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  ĐỊA CHỈ:
                  <input
                    id="location"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={employee?.location || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                {!isAdjustConsulting && (
                  <p>
                    KINH NGHIỆM:
                    <textarea
                      id="experience"
                      placeholder="Nhập kinh nghiệm chi tiết"
                      required
                      rows="3"
                      value={employee?.experience || ""}
                      onChange={handleInputChange}
                      className="experience-textarea"
                    ></textarea>
                  </p>
                )}
              </div>
            </div>
            <div className="Adjust_content_bottom_button">
              <button type="button" onClick={onClose} className="cancel-btn">
                Hủy
              </button>
              <button type="submit" className="submit-btn">
                Cập nhật <ToastContainer />
              </button>
            </div>
          </form>
        </div>
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
    </div>
  );
};

export default Adjust;
