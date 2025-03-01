import React, { useState } from "react";
import "./AddEmployees.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import axios from "axios";

const AddEmployees = (props) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

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
    if (!token) {
      toast.error("Bạn chưa đăng nhập!");
      return;
    }

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("dob", document.getElementById("dob").value);

    const genderValue = document.getElementById("male").value;
    formData.append(
      "male",
      genderValue === "Nam" ? 1 : genderValue === "Nữ" ? 0 : ""
    );

    if (props.isConsulting) {
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
      const url = props.checkRole
        ? "http://localhost:3001/api/v1/admin/consultant"
        : "http://localhost:3001/api/v1/admin/doctor";

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      notify(response.data.message);
      props.onClose(); // Đóng form trước khi reload
      setTimeout(() => window.location.reload(), 1500);
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
      if (image) {
        URL.revokeObjectURL(image); // Giải phóng URL cũ
      }
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployeeAPI();
  };

  return (
    <div className="AddEmployees-overlay">
      <div className="AddEmployees">
        <div className="AddEmployees_header">THÊM NHÂN VIÊN</div>
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
                  HỌ TÊN:
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập họ tên"
                    required
                  />
                </p>
                <p>
                  NGÀY SINH:
                  <input id="dob" type="date" required />
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
                  SĐT:
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </p>
                <p>
                  EMAIL:
                  <input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    required
                  />
                </p>
                <p>
                  ĐỊA CHỈ:
                  <input
                    id="location"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    required
                  />
                </p>
                {props.isConsulting && (
                  <p>
                    PASSWORD:
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
                    KINH NGHIỆM:
                    <input
                      id="experience"
                      type="text"
                      placeholder="Nhập số năm kinh nghiệm"
                      required
                    />
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
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEmployees;
