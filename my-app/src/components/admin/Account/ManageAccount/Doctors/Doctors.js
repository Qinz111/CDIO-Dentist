import React, { useState } from "react";
import './Doctors.scss';
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import 'bootstrap/dist/css/bootstrap.min.css';
function Doctors() {
    const doctorsList = [
        {
            id: 1,
            name: "Bruno Fernandes",
            Gender: "Male",
            Position: "First",
        },
        {
            id: 2,
            name: "Bruno Fernandes",
            Gender: "Male",
            Position: "First",
        },
        {
            id: 3,
            name: "Bruno Fernandes",
            Gender: "Male",
            Position: "First",
        },
        {
            id: 4,
            name: "Bruno ",
            Gender: "Male",
            Position: "First",
        },
        {
            id: 5,
            name: "Bruno Fernandes",
            Gender: "Male",
            Position: "First",
        },
        {
            id: 6,
            name: "Bruno Fernandes",
            Gender: "Male",
            Position: "First",
        },
    ];
    const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0]);
    const [addEmployees, setAddEmployees] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
    return (
        <div className="Doctors">
            <div className="Doctors_header">
                Danh sách Doctors
            </div>
            <div className="Doctors_middle">
                <button className="Doctors_middle_button"
                 onClick={() => setAddEmployees(true)}>
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
                                    {
                                doctorsList.map((doctor, index) => (  // Vị trí và giá trị của phần tử trong mảng
                                    <tr key={doctor.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.Gender}</td>
                                    <td>{doctor.Position}</td>
                                    <td><button className="check_view" onClick={() =>setShowInformation(true)}>Chi tiết</button></td>
                                </tr>
                                ))
                                    }        
                            </tbody>
                    </table>
                </div>
            </div>
            <div className="Doctors_bottom">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
            {addEmployees && (
                <AddEmployees 
                    onClose={() => setAddEmployees(false)}
                />
            )}
             {showInformation && (
                <ShowInformation 
                    onClose={() => setShowInformation(false)}
                />
            )}
        </div>
    );
}

export default Doctors;