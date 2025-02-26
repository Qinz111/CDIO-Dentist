import React, { useEffect, useState, useMemo } from "react";
import "./Consultants.scss";
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";

function Consultants_Admin() {
  const [consultantsList, setConsultantsList] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [addEmployees, setAddEmployees] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const consultantsPerPage = 6;
  const [searchText, setSearchText] = useState("");

  // Lọc danh sách consultants dựa trên searchText với useMemo
  const filteredConsultants = useMemo(() => {
    return consultantsList.filter((consul) =>
      consul.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [consultantsList, searchText]);

  // Lấy danh sách consultants cần hiển thị trên trang hiện tại
  const currentConsultants = useMemo(() => {
    const indexOfLastConsultant = currentPage * consultantsPerPage;
    const indexOfFirstConsultant = indexOfLastConsultant - consultantsPerPage;
    return filteredConsultants.slice(
      indexOfFirstConsultant,
      indexOfLastConsultant
    );
  }, [filteredConsultants, currentPage]);

  // Tính tổng số trang
  const totalPages = useMemo(() => {
    return Math.ceil(filteredConsultants.length / consultantsPerPage);
  }, [filteredConsultants]);

  // Xử lý sự kiện tìm kiếm
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  // Gọi API lấy danh sách consultants
  const getConsultants = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://localhost:3001/api/v1/admin/consultants",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setConsultantsList(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách consultants:", error);
    }
  };

  useEffect(() => {
    getConsultants();
  }, []);

  return (
    <div className="Consultants">
      <div className="Consultants_header">Danh sách Consultants</div>
      <div className="Consultants_middle">
        <button
          className="Consultants_middle_button"
          onClick={() => setAddEmployees(true)}
        >
          <FaUserPlus />
          Thêm nhân viên
        </button>
        <div className="Consultants_middle_right">
          <div className="Consultants_container">
            <input
              type="text"
              placeholder="Nhập tên nhân viên"
              prefix={<IoSearchSharp />}
              value={searchText}
              onChange={handleSearch}
            />
            <IoSearchSharp className="iconSearch" />
          </div>
        </div>
      </div>
      <div className="Consultants_content">
        <div className="Consultants_list">
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
              {currentConsultants.map((consul, index) => (
                <tr key={consul.id}>
                  <th scope="row">
                    {(currentPage - 1) * consultantsPerPage + index + 1}
                  </th>
                  <td>{consul.name}</td>
                  <td>{consul.male ? "Nam" : "Nữ"}</td>
                  <td>{consul.location}</td>
                  <td>{consul.phone}</td>
                  <td>
                    <button
                      className="check_view"
                      onClick={() => {
                        setSelectedEmployeeId(consul.id);
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
          {filteredConsultants.length === 0 && (
            <p className="text-center">Không tìm thấy nhân viên nào</p>
          )}
        </div>
      </div>
      <div className="Consultants_bottom">
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
          isConsulting={true}
          checkRole={true}
        />
      )}
      {showInformation && (
        <ShowInformation
          onClose={() => setShowInformation(false)}
          isConsulting={true}
          employeeId={selectedEmployeeId}
        />
      )}
    </div>
  );
}

export default Consultants_Admin;
