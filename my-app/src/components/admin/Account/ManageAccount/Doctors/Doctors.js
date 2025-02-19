import React, { useState } from "react";
import './Doctors.scss';
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Doctors() {
    const doctorsList = [
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
    const doctorsPerPage = 6; // Set this to 6

    // Calculate the doctors to display on the current page
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = doctorsList.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Calculate the total number of pages
    const totalPages = Math.ceil(doctorsList.length / doctorsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="Doctors">
            <div className="Doctors_header">
                Danh sách Doctors
            </div>
            <div className="Doctors_middle">
                <button className="Doctors_middle_button" onClick={() => setAddEmployees(true)}>
                    <FaUserPlus />
                    Thêm nhân viên
                </button>
            </div>
            <div className="Doctors_content">
                <div className="Doctors_list">
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
                            {currentDoctors.map((doctor, index) => (
                                <tr >
                                    <th scope="row">{indexOfFirstDoctor + index + 1}</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.Gender}</td>
                                    <td>{doctor.Position}</td>
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
                <AddEmployees onClose={() => 
                    setAddEmployees(false)} 
                    isConsulting={false}
                    checkRole={false}    
                />
            )}
            {showInformation === true && (
                <ShowInformation onClose={() => setShowInformation(false)} />
            )}
        </div>
    );
}

export default Doctors;