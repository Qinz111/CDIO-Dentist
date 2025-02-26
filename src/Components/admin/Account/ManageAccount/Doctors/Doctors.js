import React, { useEffect, useMemo, useState } from "react";
import "./Doctors.scss";
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";

function Doctors_Admin() {
  const [doctorsList, setDoctorsList] = useState([]);
  const [addEmployees, setAddEmployees] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Tìm kiếm Doctors theo tên
  const filteredDoctors = useMemo(() => {
    return doctorsList.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [doctorsList, searchText]);
  // Hiển thị Doctors
  const currentDoctors = useMemo(() => {
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    return filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  }, [filteredDoctors, currentPage]);
  // Tính trang
  const totalPages = useMemo(() => {
    return Math.ceil(filteredDoctors.length / doctorsPerPage);
  }, [filteredDoctors]);
  // Tải danh sách bác sĩ từ API
  const getDoctors = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://localhost:3001/api/v1/admin/doctors",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDoctorsList(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bác sĩ:", error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  // Xử lý tìm kiếm
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };
  return (
    <div className="Doctors">
      <div className="Doctors_header">Danh sách Doctors</div>
      <div className="Doctors_middle">
        <button
          className="Doctors_middle_button"
          onClick={() => setAddEmployees(true)}
        >
          <FaUserPlus />
          Thêm nhân viên
        </button>
        <div className="Doctors_middle_right">
          <div className="Doctors_container">
            <input
              type="text"
              placeholder="Nhập tên nhân viên"
              value={searchText}
              onChange={handleSearch}
            />
            <IoSearchSharp className="iconSearch" />
          </div>
        </div>
      </div>
      <div className="Doctors_content">
        <div className="Doctors_list">
          <table className="table table-hover table-striped table-bordered">
            <thead>
              <tr className="title">
                <th className="title" scope="col">
                  STT
                </th>
                <th className="title" scope="col">
                  Họ và tên
                </th>
                <th className="title" scope="col">
                  Giới tính
                </th>
                <th className="title" scope="col">
                  Vị trí
                </th>
                <th className="title" scope="col">
                  Số điện thoại
                </th>
                <th className="title" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {currentDoctors.map((doctor, index) => (
                <tr key={doctor.id}>
                  <th scope="row">
                    {(currentPage - 1) * doctorsPerPage + index + 1}
                  </th>
                  <td>{doctor.name}</td>
                  <td>{doctor.male ? "Nam" : "Nữ"}</td>
                  <td>{doctor.location}</td>
                  <td>{doctor.phone}</td>
                  <td>
                    <button
                      className="check_view"
                      onClick={() => {
                        setSelectedEmployeeId(doctor.id);
                        setShowInformation(true);
                      }}
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredDoctors.length === 0 && (
            <p className="text-center">Không tìm thấy bác sĩ nào</p>
          )}
        </div>
      </div>
      <div className="Doctors_bottom">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {addEmployees && (
        <AddEmployees
          onClose={() => setAddEmployees(false)}
          isConsulting={false}
          checkRole={false}
        />
      )}
      {showInformation && (
        <ShowInformation
          onClose={() => setShowInformation(false)}
          isConsulting={false}
          employeeId={selectedEmployeeId}
        />
      )}
    </div>
  );
}

export default Doctors_Admin;
