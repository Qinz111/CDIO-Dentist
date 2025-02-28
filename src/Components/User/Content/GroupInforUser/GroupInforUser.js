import React, { useState, useEffect } from "react";
import "./GroupInforUser.scss";
import { useNavigate } from "react-router-dom";
import { getAllDentist } from "../../../../services/userService";

const GroupInforUser = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        let res = await getAllDentist();
        if (res.data?.doctors) {
          setUserList(res.data.doctors); //nếu có dentist thì sẽ lưu vào userList
          setSelectedUser(res.data.doctors[0]);
          console.log("check", res);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách nha sĩ: ", error);
      }
    };

    fetchDentists();
  }, []);

  const handleSelectDentist = (dentist) => {
    if (dentist?.id) {
      navigate(`/dentist-calendar/${dentist.id}`, {
        state: { dentist },
      });
    } else {
      console.error("Invalid dentist object:", dentist);
    }
  };

  return (
    <div className="group-info-wrapper">
      <div className="group-info-container">
        <h2 className="group-title">ĐỘI HÌNH</h2>
        <div className="group-info-container-left">
          {selectedUser && (
            <>
              <div className="info-grid">
                <p>Họ và tên: {selectedUser.name}</p>
                <p>Ngày sinh: {selectedUser.birthday}</p>
                <p>Số điện thoại: {selectedUser.phone}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Địa chỉ: {selectedUser.location}</p>
              </div>
              <div className="btn-dk">
                <button
                  className="btn-dk"
                  onClick={() => handleSelectDentist(selectedUser)}
                >
                  DK
                </button>
              </div>
            </>
          )}
        </div>
        <div className="group-info-container-right">
          {selectedUser && (
            <div className="image-info">
              <img src={selectedUser.profile_image} alt="Avatar" />
            </div>
          )}
        </div>
      </div>

      {/* Danh sách nha sĩ */}
      <div className="user-list-container">
        <h3>Danh sách nha sĩ</h3>
        <div className="user-list">
          {userList.map((user) => (
            <div
              key={user.id}
              className={`user-item ${
                selectedUser?.id === user.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="user-info">
                <img src={user.profile_image} alt="?" />
              </div>
              <div className="detail-info">
                <p>{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupInforUser;
