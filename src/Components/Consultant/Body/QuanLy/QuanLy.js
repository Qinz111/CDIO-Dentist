import React from "react";
import "./QuanLy.scss";
import { useNavigate } from "react-router-dom";

const QuanLy = () => {
  const navigate = useNavigate();

  const handleCalendarDentist = (dentist) => {
    if (dentist && dentist.id) {
      navigate(`/consultant/quan-li-bs/calendar/${dentist.id}`, {
        state: { dentist_manage: dentist },
      });
    } else {
      console.error("Invalid dentist object:", dentist);
    }
  };

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
  ];
  console.log(userList);
  return (
    <div className="container-quanly">
      <div className="quanly-top">XXX</div>
      <div className="quanly-list-user">
        <div className="quanly-user">
          {userList.map((user) => (
            <div
              className="quanly-user-image"
              onClick={() => handleCalendarDentist(user)}
              key={user.id}
            >
              <img src={user.image} alt="" />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuanLy;
