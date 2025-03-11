import React, { useState } from "react";
import "./AddEmployees.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import { addEmployees } from "../../../services/adminService";
const AddEmployees = (props) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const notify = (message) => {
    // Xóa async vì toast.success không cần Promise
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
      // Gọi notify trước, sau đó đóng form và reload
      notify(response.data.message);
      setTimeout(() => {
        props.onClose(); // Đóng form trước
        window.location.reload(); // Reload trang sau khi thông báo hiển thị
      }, 1500); // Delay 1.5s để người dùng thấy thông báo trước khi reload
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Đã xảy ra lỗi khi thêm nhân viên!");
      }
    }
  };

  //
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
                    pattern="[0-9]{10}"
                    title="Số điện thoại phải có đúng 10 chữ số"
                  />
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
                {props.isConsulting === true && (
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
                {props.isConsulting === false && (
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
