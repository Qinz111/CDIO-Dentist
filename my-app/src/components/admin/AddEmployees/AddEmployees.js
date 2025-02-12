import React, { useState } from 'react';
import './AddEmployees.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoCheck } from 'react-icons/go';

const AddEmployees = ({ onClose }) => {
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
                                <p>HỌ TÊN: <input type="text" placeholder='Nhập họ tên' required /></p>
                                <p>NGÀY SINH: <input type="date" placeholder='Nhập ngày sinh' required /></p>
                                <p>GIỚI TÍNH: 
                                    <select required>
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </p>
                                <p>MSNV: <input type="text" placeholder='Nhập mã số nhân viên' required /></p>
                                <p>SĐT: <input type="tel" placeholder='Nhập số điện thoại' required /></p>
                                <p>EMAIL: <input type="email" placeholder='Nhập email' required /></p>
                                <p>CHỨC VỤ: <input type="text" placeholder='Nhập chức vụ' required /></p>
                                <p>NGÀY BẮT ĐẦU LÀM VIỆC: <input type="date" required /></p>
                            </div>
                        </div>
                        <div className="AddEmployees_content_bottom_button">
                            <button type="button" onClick={onClose} className="cancel-btn">
                                Hủy
                            </button>
                            <button type="submit" onClick={notify} className="submit-btn"> Xác nhận 
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

