import React, { useState } from "react";
import "./DentistModal.scss";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DentistModal.scss";
const DentistModal = ({ show, setShow, onSelectDentist }) => {
  const handleClose = () => setShow(false);

  const dentistList = [
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
          title: "Khám bệnh",
          start: "2024-02-01T09:00:00",
          end: "2024-02-01T11:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-03T14:00:00",
          end: "2024-02-03T16:00:00",
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
          title: "Khám bệnh",
          start: "2024-02-02T10:00:00",
          end: "2024-02-02T12:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-04T15:00:00",
          end: "2024-02-04T17:00:00",
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
          title: "Khám bệnh",
          start: "2024-02-02T10:00:00",
          end: "2024-02-02T12:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-04T15:00:00",
          end: "2024-02-04T17:00:00",
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
          title: "Khám bệnh",
          start: "2024-02-02T10:00:00",
          end: "2024-02-02T12:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-04T15:00:00",
          end: "2024-02-04T17:00:00",
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
          title: "Khám bệnh",
          start: "2024-02-02T10:00:00",
          end: "2024-02-02T12:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-04T15:00:00",
          end: "2024-02-04T17:00:00",
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
          title: "Khám bệnh",
          start: "2024-02-02T10:00:00",
          end: "2024-02-02T12:00:00",
        },
        {
          title: "Tư vấn",
          start: "2024-02-04T15:00:00",
          end: "2024-02-04T17:00:00",
        },
      ],
    },
  ];

  const handleSelectDentist = (dentist) => {
    if (dentist && dentist.id) {
      onSelectDentist(dentist);
      setShow(false);
    } else {
      console.error("Invalid dentist object:", dentist);
    }
  };

  const [hovered, setHovered] = useState(false);

  return (
    <Modal show={show}>
      <div className="modal-content">
        <div className="container">
          <div className="container-box">
            <div className="box-header">
              <div className="header-logo">
                <img src="/logo2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="list-dentist">
          <div
            className={`list-dentist-container ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {dentistList.map((dentist) => (
              <div
                className="select-dentist"
                key={dentist.id}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => handleSelectDentist(dentist)}
              >
                <img src={dentist.image} alt="" />
                <p>{dentist.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="box-close" onClick={handleClose}>
          <div className="close-icon">
            <IoMdClose />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DentistModal;
