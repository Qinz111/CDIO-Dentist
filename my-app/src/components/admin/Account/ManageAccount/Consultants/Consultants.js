import React, { useEffect, useState } from "react";
import './Consultants.scss';
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Adjust from "../../../ModelAdjust/Adjust";
function Consultants() {
    const [consultantsList, setConsultantsList] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [addEmployees, setAddEmployees] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const consultantsPerPage = 6; // Set this to 6

    // Calculate the consultants to display on the current page
    const indexOfLastConsultant = currentPage * consultantsPerPage;
    const indexOfFirstConsultant = indexOfLastConsultant - consultantsPerPage;
    const currentConsultants = consultantsList.slice(indexOfFirstConsultant, indexOfLastConsultant);
    // Calculate the total number of pages
    const totalPages = Math.ceil(consultantsList.length / consultantsPerPage);
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // call API
    const getConsultants = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.get("http://localhost:3001/api/v1/admin/consultants", {
                headers: { "Authorization": `Bearer ${token}` },
            });
            setConsultantsList(response.data); // Cập nhật danh sách từ API
        } catch (error) {

        }
    };
    useEffect(() => {
        getConsultants();
    }, []);
    console.log()
    return (
        <div className="Consultants">
            <div className="Consultants_header">
                Danh sách Consultants
            </div>
            <div className="Consultants_middle">
                <button className="Consultants_middle_button" onClick={() => setAddEmployees(true)}>
                    <FaUserPlus />
                    Thêm nhân viên
                </button>
            </div>
            <div className="Consultants_content">
                <div className="Consultants_list">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr className="title">
                                <th className="title" scope="col">STT</th>
                                <th className="title" scope="col">Họ và tên</th>
                                <th className="title" scope="col">Giới tính</th>
                                <th className="title" scope="col">Vị trí</th>
                                <th className="title" scope="col">Số điện thoại</th>
                                <th className="title" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentConsultants.map((consul, index) => (
                                <tr key={consul.id}> 
                                    <th scope="row">{indexOfFirstConsultant + index + 1}</th>
                                    <td>{consul.name}</td>
                                    <td>{consul.male ? "Nam" : "Nữ"}</td>
                                    <td>{consul.location}</td>
                                    <td>{consul.phone}</td>
                                    <td><button className="check_view" onClick={() => { 
                                        setSelectedEmployeeId(consul.id); 
                                        setShowInformation(true);
                                    }                                           
                                    } >Chi tiết</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Doctors_bottom">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={() => handleClick(currentPage - 1)}>Previous</a>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handleClick(index + 1)}>{index + 1}</a>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={() => handleClick(currentPage + 1)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {addEmployees === true && (
                <AddEmployees 
                onClose={() => setAddEmployees(false) } 
                isConsulting = {true}
                checkRole={true}
                />
            )}
            {showInformation === true && (
                <ShowInformation onClose={() => setShowInformation(false)}
                isConsulting = {true} 
                employeeId={selectedEmployeeId} />
            )}
            {/* <Adjust  isConsulting = {true}
                     employeeId={selectedEmployeeId} />   */}
        </div>
    );
}

export default Consultants;