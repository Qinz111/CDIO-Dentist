import React, { useState } from 'react';
import './AddEmployees.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoCheck } from 'react-icons/go';
import axios from 'axios';
const AddEmployees = (props) => {
    // props; truyền dữ liệu từ components cha sang con
    const [image, setImage] = useState(null);
    const notify = () => toast.success("Thêm nhân viên thành công!", {
        icon: <GoCheck style={{ color: '#0C2D79', fontSize: '24px'}} />,
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        style: {
            color: '#0C2D79',        // Đổi màu chữ thành xanh
            fontWeight: 'bold',      // Làm chữ đậm hơn
        }
    });
    const addEmployeeAPI = async () => {
        const token = localStorage.getItem('accessToken');
      
        const newEmployees = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            dob: document.getElementById('dob').value,
            male: document.getElementById('male').value === 'Nam' ? true : false,
        }
        if(props.isConsulting === true) {
            newEmployees.password = document.getElementById('password').value
        } else {
            newEmployees.experience = document.getElementById('experience').value
        }
        try {
            const url = props.checkRole 
            ? 'http://localhost:3001/api/v1/admin/consultant' 
            : 'http://localhost:3001/api/v1/admin/doctor';
            const response = await axios.post(url, newEmployees, {
                headers: {
                    "Authorization": `Bearer ${token}`,  // Thêm token vào headers
                    "Content-Type": "application/json" // Quan trọng khi gửi FormData
                  },
            });
            notify(response.data.message);
            props.onClose();
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message);
            }
        }
    }
//event.target.files[0]: Lấy file đầu tiên mà người dùng chọn.

// URL.createObjectURL(file): Tạo URL tạm thời để có thể hiển thị ảnh trong trình duyệt.

// setImage(imageUrl): Cập nhật state image với URL của ảnh.

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployeeAPI();
    };
// {image ? 'Thay đổi ảnh' : 'Tải ảnh lên'}  kiểm tra xem ảnh có giá trị hay không , có thì thay đổi ảnh
//{image && <img src={image} alt="Preview" className="image-preview" />}
// Đây là cú pháp điều kiện trong JSX để render một phần tử dựa trên giá trị của biến image.

// image &&:

// Nếu image có giá trị (truthy), phần tử sau dấu && sẽ được render.

// Nếu image không có giá trị (falsy), phần tử sau && sẽ không được render.
    return (
        <div className="AddEmployees-overlay" > 
            <div className="AddEmployees">           
                <div className="AddEmployees_header">
                    THÊM NHÂN VIÊN
                </div>
                <div className="AddEmployees_content">
                    <div className="AddEmployees_content_top">
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
                        <div className="AddEmployees_content_bottom">
                            <div className="AddEmployees_content_bottom_grid">
                                <p>HỌ TÊN: <input id='name' type="text" placeholder='Nhập họ tên' required /></p>
                                <p>NGÀY SINH: <input id='dob' type="date" placeholder='Nhập ngày sinh' required /></p>
                                <p>GIỚI TÍNH: 
                                    <select id='male' required>
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </p>
                                <p>SĐT: <input id='phone' type="tel" placeholder='Nhập số điện thoại' required /></p>
                                <p>EMAIL: <input id='email' type="email" placeholder='Nhập email' required /></p>
                                <p>ĐỊA CHỈ: <input id='location' type="text" placeholder='Nhập chức vụ' required /></p>
                                {props.isConsulting===true && (
                                    <p>Password: <input id='password' type="text" placeholder='Tạo mật khẩu cho nhân viên' required /></p>
                                )}
                                  {props.isConsulting===false && (
                                    <p>Kinh nghiệm: <input id='experience' type="textarea" placeholder='Nhập số năm kinh nghiệm' required /></p>
                                )}
                            </div>
                        </div>
                        <div className="AddEmployees_content_bottom_button">
                            <button type="button" onClick={props.onClose} className="cancel-btn">
                                Hủy
                            </button>
                            <button type="submit"  className="submit-btn"> Xác nhận 
                                <ToastContainer /> 
                            </button>
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

export default AddEmployees;

