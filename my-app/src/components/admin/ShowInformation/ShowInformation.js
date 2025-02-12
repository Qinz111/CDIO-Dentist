import React, { useState } from "react";
import './ShowInformation.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from "react-icons/ai";
import Adjust from "../ModelAdjust/Adjust";
const ShowInformation = ({onClose}) => {
    const showInformationList = [
        {
            id: 1,
            name: "Bruno Fernandes",
            Date: "2-1-2015",
            Gender: "Male",
            MSNV: "123123123",
            SĐT:"12312312",
            Email:"trunghieu@gmail.com",
            Position: "First",
            Date_Start: "2-1-2015",
            image: "/images/bruno.jpg",
        },
    ];
    const [showAdjust, setShowAdjust] = useState(false);
    const notify_delete = () => toast.error("Xoá thành công!", {
        icon: <AiOutlineDelete style={{ color: '#0C2D79', fontSize: '24px'}} />,
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
    const [selectedInfomation,setselectedInfomation] = useState(showInformationList[0]);
    return (
        <div className="show-information-overlay">
            <div className="show-information-content">
                <h2>THÔNG TIN NHÂN VIÊN</h2>
                <form className="information_detail" key={selectedInfomation.id}>
                    <div className="form-group-img">
                        <img className="form-group-img-svg" src={selectedInfomation.image}  />
                    </div>
                    <div className="form-group">
                        <label>Họ và tên:</label>
                        {selectedInfomation.name}
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh:</label>
                        {selectedInfomation.Date}
                    </div>
                    <div className="form-group">
                        <label>Giới tính:</label>
                        {selectedInfomation.Gender}
                    </div>
                    <div className="form-group">
                        <label>MSNV:</label>
                        {selectedInfomation.MSNV}
                    </div>
                    <div className="form-group">
                        <label>SĐT:</label>
                        {selectedInfomation.SĐT}
                    </div>
                    <div className="form-group">
                        <label>EMAIL:</label>
                        {selectedInfomation.Email}
                    </div>
                    <div className="form-group">
                        <label>CHỨC VỤ:</label>
                        {selectedInfomation.Position}
                    </div>
                    <div className="form-group">
                        <label>NGÀY BẮT ĐẦU LÀM VIỆC:</label>
                        {selectedInfomation.Date_Start}
                    </div>
                    <div className="button-group">
                        <div className="button-group-right">
                            <button className="button-close" type="button" onClick={onClose}>Hủy</button>
                        </div>
                        <div className="button-group-left">
                            <button className="button-delete" type="button" onClick={notify_delete} >Xoá</button>
                            <button className="button-adjust" type="button" onClick={() => setShowAdjust(true)}>Điều chỉnh</button>
                        </div>
                    </div>  
                </form>
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
            {showAdjust && (
                <Adjust 
                    onClose={() => setShowAdjust(false)}
                />
            )}
        </div>
       
    );
}

export default ShowInformation;
