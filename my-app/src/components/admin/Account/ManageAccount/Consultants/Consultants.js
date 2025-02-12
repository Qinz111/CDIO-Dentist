import React, { useState } from "react";
import './Consultants.scss';
import { FaUserPlus } from "react-icons/fa";
import AddEmployees from "../../../AddEmployees/AddEmployees";
import ShowInformation from "../../../ShowInformation/ShowInformation";
import 'bootstrap/dist/css/bootstrap.min.css';
function Consultants() {
    const consultantsList = [
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
    const [selectedConsultant, setSelectedConsultant] = useState(consultantsList[0]);
    const [addEmployees, setAddEmployees] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
  return (
    <div className="Consultants">
        <div className="Consultants_header">
            Danh sách Consultants
        </div>
        <div className="Consultants_middle">
                <button className="Consultants_middle_button"
                 onClick={() => setAddEmployees(true)}>
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
                                    {
                                consultantsList.map((consul, index) => (  // Vị trí và giá trị của phần tử trong mảng
                                    <tr key={consul.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{consul.name}</td>
                                    <td>{consul.Gender}</td>
                                    <td>{consul.Position}</td>
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
  )
}

export default Consultants