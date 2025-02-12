import React, { useState } from "react";
import "./GroupInforUser.scss";
import { useNavigate } from "react-router-dom";

const GroupInforUser = (props) => {
  const userList = [
    {
      id: 1,
      name: "Bruno Fernandes",
      birthday: "08/09/1994",
      phone: "+351 999888777",
      email: "bruno.fernandes@manutd.com",
      address: "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA",
      image: "/images/bruno.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 2,
      name: "João Cancelo",
      birthday: "27/05/1994",
      phone: "+351 888777666",
      email: "cancelo@manutd.com",
      address: "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA",
      image: "/images/Cancelo.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 3,
      name: "André Onana",
      birthday: "02/04/1996",
      phone: "+237 777666555",
      email: "onana@manutd.com",
      address: "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA",
      image: "/images/onana.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 4,
      name: "Niclas Jackson",
      birthday: "04/02/2003",
      phone: "+45 666555444",
      email: "Jackson@manutd.com",
      address: "Chelsea, Stamford Bridge, Fulham Road, London SW6 1HS",
      image: "/images/jackson.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 5,
      name: "Harry Maguire",
      birthday: "05/03/1993",
      phone: "+44 555444333",
      email: "maguire@manutd.com",
      address: "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA",
      image: "/images/maguire.jpeg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 6,
      name: "Cole Palmer",
      birthday: "06/05/2002",
      phone: "+44 444333222",
      email: "palmer@chelsea.com",
      address: "Stamford Bridge, Fulham Road, London SW6 1HS",
      image: "/images/Cole-Palmer-.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 7,
      name: "Niclas Jackson",
      birthday: "04/02/2003",
      phone: "+45 666555444",
      email: "Jackson@manutd.com",
      address: "Chelsea, Stamford Bridge, Fulham Road, London SW6 1HS",
      image: "/images/jackson.jpg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
    {
      id: 8,
      name: "Harry Maguire",
      birthday: "05/03/1993",
      phone: "+44 555444333",
      email: "maguire@manutd.com",
      address: "Old Trafford, Sir Matt Busby Way, Manchester M16 0RA",
      image: "/images/maguire.jpeg",
      schedule: [
        {
          title: "Tập luyện",
          start: "2025-02-10T10:00:00",
          end: "2025-02-10T11:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Họp báo",
          start: "2025-02-14T15:00:00",
          end: "2025-02-14T16:00:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
        {
          title: "Trận đấu vs Arsenal",
          start: "2025-02-17T19:30:00",
          end: "2025-02-17T21:30:00",
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
        },
      ],
    },
  ];

  const [selectedUser, setSelectedUser] = useState(userList[0]);
  const navigate = useNavigate();

  const handleSelectDentist = (dentist) => {
    if (dentist && dentist.id) {
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
          <div className="info-grid">
            <p>Họ và tên: {selectedUser.name}</p>
            <p>Ngày sinh: {selectedUser.birthday}</p>
            <p>Số điện thoại: {selectedUser.phone}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Địa chỉ: {selectedUser.address}</p>
          </div>
          <div className="btn-dk">
            <button
              className="btn-dk"
              onClick={() => handleSelectDentist(selectedUser)}
            >
              DK
            </button>
          </div>
        </div>
        <div className="group-info-container-right">
          <div className="image-info">
            <img src={selectedUser.image} alt="" />
          </div>
        </div>
      </div>

      {/* Phần danh sách người dùng */}
      <div className="user-list-container">
        <h3>Danh sách nha sĩ</h3>
        <div className="user-list">
          {userList.map((user) => (
            <div
              key={user.id}
              className={`user-item ${
                selectedUser.id === user.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="user-info">
                <img src={user.image} alt="?" />
              </div>
              <div className="detail-info">
                <p>{user.birthday}</p>
                <p> {user.name} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupInforUser;
