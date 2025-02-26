import React from 'react';
import './ManageAccount.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageAccount = () => {
    return (
        <div className="ManageAccount">
            <div className="ManageAccount_title">
                QUẢN LÝ NHÂN SỰ
            </div>
            <div className="ManageAccount_content">
                <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                  
                </table>
            </div>
        </div>
    );
};

export default ManageAccount;
