import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./QuanLy.scss";
import { getAllDentist } from "../../../../services/userService";
const QuanLy = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const fetchDentists = async () => {
    try {
      let res = await getAllDentist();
      if (res.data?.doctors) {
        setUserList(res.data.doctors);
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

  const handlecalendarDentist = (dentist) => {
    if (dentist && dentist.id) {
      navigate(`/consultant/quan-li-bs/calendar/${dentist.id}`, {
        state: { dentist_manage: dentist },
      });
    } else {
      console.error("conchoquang");
    }
  };

  return (
    <div className="container-quanly">
      <div className="quanly-bs">
        <p className="title">DANH SÁCH BÁC SĨ</p>
        <hr className="divider" />
       
      </div>
      <div className="quanly-list-user">
        <div className="quanly-user">
          {userList.map((user) => (
            <div
              className="quanly-user-image"
              onClick={() => handlecalendarDentist(user)}
              key={user.id}
            >
              <img src={user.profile_image} alt="" />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuanLy;
