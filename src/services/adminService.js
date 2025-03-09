import axios from "axios";

// Khởi tạo instance Axios với baseURL
const instance = axios.create({
  baseURL: "http://localhost:3001/",
});
// Lấy token từ localStorage
const token = localStorage.getItem("accessToken");
// Đăng nhập
const loginAdmin = (email, password) => {
  const url = "api/v1/admin/login";
  return instance.post(url, { email, password });
};
// Hàm xóa nhân viên
const deleteEmployees = (employeeID, checkRole) => {
  const url = checkRole
    ? `api/v1/admin/consultant/${employeeID}`
    : `api/v1/admin/doctor/${employeeID}`;
  return instance.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
// Xem thông tin 1 nhân viên
const showEmployeesByID = (employeeID, checkRole) => {
  const url = checkRole
    ? `api/v1/admin/consultant/${employeeID}`
    : `api/v1/admin/doctor/${employeeID}`;
  return instance.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
// thêm nhân viên
const addEmployees = (checkRole, employee) => {
  const url = checkRole ? `api/v1/admin/consultant` : `api/v1/admin/doctor`;
  return instance.post(url, employee, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
// In ra toàn bộ nhân viên
const showEmployees = (checkRole) => {
  const url = checkRole ? `api/v1/admin/consultants` : `api/v1/admin/doctors`;
  const token = localStorage.getItem("accessToken"); // Lấy token mới nhất
  return instance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
// Các hàm quản lý nhân viên (chưa triển khai)
const adjustEmployees = (employeeID, checkRole, employee) => {
  const url = checkRole
    ? `api/v1/admin/consultant/${employeeID}`
    : `api/v1/admin/doctor/${employeeID}`;
  return instance.put(url, employee, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export {
  deleteEmployees,
  loginAdmin,
  showEmployeesByID,
  showEmployees,
  addEmployees,
  adjustEmployees,
};
