import React, { useState, useEffect } from "react";
import "./GroupInforUser.scss";
import { useNavigate } from "react-router-dom";
import { getAllDentist } from "../../../../services/userService";

const GroupInforUser = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const fetchDentists = async () => {
    try {
      let res = await getAllDentist();
      if (res.data?.doctors) {
        setUserList(res.data.doctors);
        setSelectedUser(res.data.doctors[0]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách nha sĩ: ", error);
    }
  };

  useEffect(() => {
    fetchDentists();
    const interval = setInterval(() => {
      fetchDentists();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectDentist = (dentist) => {
    if (dentist?.id) {
      navigate(`/dentist-calendar/${dentist.id}`, { state: { dentist } });
    } else {
      console.error("Invalid dentist object:", dentist);
    }
  };

  return (
    <div className="group-info-wrapper">
      <div className="group-info-container">
        <h2 className="group-title">BÁC SĨ</h2>
        <div className="group-info-container-left">
          {selectedUser && (
            <>
              <div className="info-grid">
                <p>Họ và tên: {selectedUser.name}</p>
                <p>Số điện thoại: {selectedUser.phone}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Địa chỉ: {selectedUser.location}</p>
                <p>Kinh nghiệm làm việc: {selectedUser.experience} năm</p>
              </div>
              <div className="btn-dk">
                {/* <button
                  className="btn-dk"
                  onClick={() => handleSelectDentist(selectedUser)}
                >
                  DK
                </button>  */}
                <a
                  class="fancy"
                  onClick={() => handleSelectDentist(selectedUser)}
                >
                  <span class="top-key"></span>
                  <span class="text">Xem lịch</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </a>
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
                <img src={user.profile_image} alt="Avatar" />
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
