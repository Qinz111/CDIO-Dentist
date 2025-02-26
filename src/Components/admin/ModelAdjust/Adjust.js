import React, { useEffect, useState } from 'react';
import './Adjust.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoCheck } from 'react-icons/go';
import axios from 'axios';

const Adjust = ({ onClose, adjustEmployeeId, isAdjustConsulting }) => {
    const [image, setImage] = useState(null);
    const [employee, setEmployee] = useState(null);

    const notify = () => toast.success("Cập nhật thành công!", {
        icon: <GoCheck style={{ color: '#0C2D79', fontSize: '24px' }} />,
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        style: {
            color: '#0C2D79',
            fontWeight: 'bold',
        }
    });
    // call APL show Employees'information 
    const token = localStorage.getItem("accessToken");
    const url = isAdjustConsulting
        ? `http://localhost:3001/api/v1/admin/consultant/${adjustEmployeeId}`
        : `http://localhost:3001/api/v1/admin/doctor/${adjustEmployeeId}`;
    const fetchEmployee = async () => {
        try {
            const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setEmployee(response.data);
                
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                }
            }
        };
    useEffect(() => {
        fetchEmployee();
    }, [adjustEmployeeId, isAdjustConsulting]);
    // API update Employees'information 
    const adjustEmployee = async () => {
        const adjustedEmployees = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            dob: document.getElementById('dob').value,
            male: document.getElementById('male').value === 'Nam' ? true : false,
        }
        if(isAdjustConsulting === false) {
            adjustedEmployees.experience = document.getElementById('experience').value
        }
        try {
            const response = await axios.put(url,adjustedEmployees, {
                headers: {
                    "Authorization": `Bearer ${token}`, 
                    "Content-Type": "application/json"
                  },
            });
            notify(response.data.message);
            setTimeout(() => {
                onClose(); // Đóng form sau khi cập nhật
                window.location.reload();
            }, 500);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            }
        }
    }
    //onchange
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        
        let newValue = value;
        if (id === "male") {
            newValue = value === "Nam"; 
        }
    
        setEmployee((prev) => ({
            ...prev,
            [id]: newValue
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        adjustEmployee();
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
                                {image ? 'Thay đổi ảnh' : 'Tải ảnh lên'}
                            </label>
                            {image && <img src={image} alt="Preview" className="image-preview" />}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="Adjust_content_bottom">
                            <div className="Adjust_content_bottom_grid">
                                <p>HỌ TÊN:
                                    <input id='name' type="text" placeholder='Nhập họ tên'
                                        value={employee?.name || ''}
                                        onChange={handleInputChange} required />
                                </p>
                                <p>NGÀY SINH:
                                    <input id='dob' type="date" placeholder='Nhập ngày sinh'
                                        value={employee?.dob ? new Date(employee.dob).toISOString().split("T")[0] : ""}
                                        onChange={handleInputChange} required />
                                </p>
                                <p>GIỚI TÍNH:
                                    <select id='male' value={employee?.male ? "Nam" : "Nữ"} onChange={handleInputChange} required>
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </p>
                                <p>SĐT:
                                    <input id='phone' type="tel" placeholder='Nhập số điện thoại'
                                        value={employee?.phone || ''}
                                        onChange={handleInputChange} required />
                                </p>
                                <p>EMAIL:
                                    <input id='email' type="email" placeholder='Nhập email'
                                        value={employee?.email || ''}
                                        onChange={handleInputChange} required />
                                </p>
                                <p>ĐỊA CHỈ:
                                    <input id='location' type="text" placeholder='Nhập địa chỉ'
                                        value={employee?.location || ''}
                                        onChange={handleInputChange} required />
                                </p>
                                {!isAdjustConsulting && (
                                    <p>KINH NGHIỆM:
                                        <input id='experience' type="text" placeholder='Nhập kinh nghiệm'
                                            value={employee?.experience || ''}
                                            onChange={handleInputChange} required />
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="Adjust_content_bottom_button">
                            <button type="button" onClick={onClose} className="cancel-btn">Hủy</button>
                            <button type="submit" className="submit-btn">Cập nhật <ToastContainer /></button>
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
