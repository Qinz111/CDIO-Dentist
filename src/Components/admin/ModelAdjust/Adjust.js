import React, { useEffect, useState } from "react";
import "./Adjust.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoCheck } from "react-icons/go";
import axios from "axios";

const Adjust = ({ onClose, adjustEmployeeId, isAdjustConsulting }) => {
  const [image, setImage] = useState(null);
  const [employee, setEmployee] = useState({
    profile_image: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    dob: "",
    male: "",
    experience: "",
  });

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
      style: { color: "#0C2D79", fontWeight: "bold" },
    });

  useEffect(() => {
    if (!adjustEmployeeId) return;

    const token = localStorage.getItem("accessToken");
    const url = isAdjustConsulting
      ? `http://localhost:3001/api/v1/admin/consultant/${adjustEmployeeId}`
      : `http://localhost:3001/api/v1/admin/doctor/${adjustEmployeeId}`;

    const fetchEmployee = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;

        setEmployee({
          ...data,
          male: data.male ? "Nam" : "Nữ",
        });
        setImage(data.profile_image || null);
      } catch (error) {
        toast.error(error.response?.data?.message || "Lỗi khi tải dữ liệu!");
      }
    };

    fetchEmployee();
  }, [adjustEmployeeId, isAdjustConsulting]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: name === "male" ? (value === "Nam" ? 1 : 0) : value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setEmployee((prev) => ({
        ...prev,
        profile_image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    const url = isAdjustConsulting
      ? `http://localhost:3001/api/v1/admin/consultant/${adjustEmployeeId}`
      : `http://localhost:3001/api/v1/admin/doctor/${adjustEmployeeId}`;

    const formData = new FormData();
    Object.keys(employee).forEach((key) => {
      formData.append(key, employee[key]);
    });

    try {
      await axios.put(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      notify();
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Cập nhật thất bại!");
    }
  };

  return (
    <div className="Adjust-overlay">
      <div className="Adjust">
        <div className="Adjust_header">CẬP NHẬT NHÂN VIÊN</div>
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
                {image ? "Thay đổi ảnh" : "Tải ảnh lên"}
              </label>
              {image && (
                <img src={image} alt="Preview" className="image-preview" />
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="Adjust_content_bottom">
              <div className="Adjust_content_bottom_grid">
                <p>
                  HỌ TÊN:
                  <input
                    name="name"
                    type="text"
                    placeholder="Nhập họ tên"
                    value={employee.name || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  NGÀY SINH:
                  <input
                    name="dob"
                    type="date"
                    value={
                      employee.dob
                        ? new Date(employee.dob).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  GIỚI TÍNH:
                  <select
                    name="male"
                    value={employee.male === 1 ? "Nam" : "Nữ"}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </p>
                <p>
                  SĐT:
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={employee.phone || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  EMAIL:
                  <input
                    name="email"
                    type="email"
                    placeholder="Nhập email"
                    value={employee.email || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                <p>
                  ĐỊA CHỈ:
                  <input
                    name="location"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={employee.location || ""}
                    onChange={handleInputChange}
                    required
                  />
                </p>
                {!isAdjustConsulting && (
                  <p>
                    KINH NGHIỆM:
                    <input
                      name="experience"
                      type="text"
                      placeholder="Nhập kinh nghiệm"
                      value={employee.experience || ""}
                      onChange={handleInputChange}
                      required
                    />
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
