import React, { useState } from "react";
import './Consultants.scss';
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Consultants() {
    const consultantsList = [
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
        {name: "ád Fernandes", Gender: "Male", Position: "First"},
    ];

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
                                <th className="title" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentConsultants.map((consul, index) => (
                                <tr>
                                    <th scope="row">{indexOfFirstConsultant + index + 1}</th>
                                    <td>{consul.name}</td>
                                    <td>{consul.Gender}</td>
                                    <td>{consul.Position}</td>
                                    <td><button className="check_view" onClick={() => setShowInformation(true)}>Chi tiết</button></td>
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
                <AddEmployees onClose={() => setAddEmployees(false) } isConsulting ={true} />
            )}
            {showInformation === true && (
                <ShowInformation onClose={() => setShowInformation(false)} />
            )}
        </div>
    );
}

export default Consultants;