import React, { useState } from "react";
import "./AddEmployees.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import { addEmployees } from "../../../services/adminService";

const validatePhoneNumber = (phone, setErrors, setValidated) => {
  let vnf_regex = /^(0[3|5|7|8|9])[0-9]{8}$/;
  let mobile = phone.trim();

  if (!mobile) {
    setErrors((prev) => ({ ...prev, phone: "Bạn chưa điền số điện thoại!" }));
    setValidated((prev) => ({ ...prev, phone: false }));
    return false;
  }

  if (!vnf_regex.test(mobile)) {
    setErrors((prev) => ({
      ...prev,
      phone: "Số điện thoại không đúng định dạng!",
    }));
    setValidated((prev) => ({ ...prev, phone: false }));
    return false;
  }

  setErrors((prev) => ({ ...prev, phone: "" }));
  setValidated((prev) => ({ ...prev, phone: true }));
  return true;
};

const AddEmployees = (props) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState({ phone: true });

  const notify = (message) => {
    toast.success(message || "Thêm nhân viên thành công!", {
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
  };

  const addEmployeeAPI = async () => {
    const token = localStorage.getItem("accessToken");

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
    if (props.isConsulting === true) {
      formData.append("password", document.getElementById("password").value);
    } else {
      formData.append(
        "experience",
        document.getElementById("experience").value
      );
    }
    if (imageFile) {
      formData.append("profile_image", imageFile);
    }

    try {
      const response = await addEmployees(props.isConsulting, formData);
      notify(response.data.message);
      setTimeout(() => {
        props.onClose();
        window.location.reload();
      }, 1500);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Đã xảy ra lỗi khi thêm nhân viên!");
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = document.getElementById("phone").value;

    if (!validatePhoneNumber(phone, setErrors, setValidated)) {
      return;
    }

    addEmployeeAPI();
  };

  return (
    <div className="AddEmployees-overlay">
      <div className="AddEmployees">
        <div className="AddEmployees_header">
          <h2>
            {props.isConsulting ? "Thêm nhân viên tư vấn" : "Thêm bác sĩ"}
          </h2>
        </div>
        <div className="AddEmployees_content">
          <div className="AddEmployees_content_top">
            <div className="image-upload-section">
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload" className="upload-label">
                {image ? "Thay đổi ảnh" : "Tải ảnh lên"}
              </label>
              {image && (
                <img src={image} alt="Preview" className="image-preview" />
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="AddEmployees_content_bottom">
              <div className="AddEmployees_content_bottom_grid">
                <p>
                  HỌ TÊN:{" "}
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập họ tên"
                    required
                  />
                </p>
                <p>
                  NGÀY SINH:{" "}
                  <input
                    id="dob"
                    type="date"
                    placeholder="Nhập ngày sinh"
                    required
                    className="NgaySinh"
                    max={new Date().toISOString().split("T")[0]}
                  />
                </p>
                <p>
                  GIỚI TÍNH:
                  <select id="male" required>
                    <option value="">Chọn giới tính</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </p>
                <p>
                  SĐT:{" "}
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    required
                    className={validated.phone ? "" : "error-input"}
                  />
                  {!validated.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </p>
                <p>
                  EMAIL:{" "}
                  <input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    required
                  />
                </p>
                <p>
                  ĐỊA CHỈ:{" "}
                  <input
                    id="location"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    required
                  />
                </p>
                {props.isConsulting && (
                  <p>
                    PASSWORD:{" "}
                    <input
                      id="password"
                      type="password"
                      placeholder="Tạo mật khẩu cho nhân viên"
                      required
                    />
                  </p>
                )}
                {!props.isConsulting && (
                  <p>
                    KINH NGHIỆM:{" "}
                    <textarea
                      id="experience"
                      placeholder="Nhập kinh nghiệm chi tiết"
                      required
                      rows="3"
                      className="experience-textarea"
                    ></textarea>
                  </p>
                )}
              </div>
            </div>
            <div className="AddEmployees_content_bottom_button">
              <button
                type="button"
                onClick={props.onClose}
                className="cancel-btn"
              >
                Hủy
              </button>
              <button type="submit" className="submit-btn">
                Xác nhận
                <ToastContainer />
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

export default AddEmployees;
