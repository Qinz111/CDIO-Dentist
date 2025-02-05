import React from "react";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import "./LocationModal.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const LocationModal = ({ show, setShow, onSelectLocation }) => {
  const handleClose = () => setShow(false);

  const locations = [
    {
      id: 1,
      name: "Chi nhánh 1",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "1900 123 456",
    },
    {
      id: 2,
      name: "Chi nhánh 2",
      address: "456 Đường XYZ, Quận 2, TP.HCM",
      phone: "1900 456 789",
    },
    {
      id: 3,
      name: "Chi nhánh 1",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "1900 123 456",
    },
    {
      id: 4,
      name: "Chi nhánh 2",
      address: "456 Đường XYZ, Quận 2, TP.HCM",
      phone: "1900 456 789",
    },
    {
      id: 5,
      name: "Chi nhánh 1",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "1900 123 456",
    },
    {
      id: 6,
      name: "Chi nhánh 2",
      address: "456 Đường XYZ, Quận 2, TP.HCM",
      phone: "1900 456 789",
    },
    {
      id: 7,
      name: "Chi nhánh 1",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "1900 123 456",
    },
    {
      id: 8,
      name: "Chi nhánh 2",
      address: "456 Đường XYZ, Quận 2, TP.HCM",
      phone: "1900 456 789",
    },
    {
      id: 9,
      name: "Chi nhánh 1",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "1900 123 456",
    },
    {
      id: 10,
      name: "Chi nhánh 2",
      address: "456 Đường XYZ, Quận 2, TP.HCM",
      phone: "1900 456 789",
    },
  ];

  const handleSelectLocation = (e) => {
    const selectedLocation = locations.find(
      (loc) => loc.id === parseInt(e.target.value)
    );
    if (selectedLocation) {
      onSelectLocation(selectedLocation);
      setShow(false);
    }
  };

  return (
    <Modal show={show}>
      <div className="modal-content">
        <div className="container">
          <div className="container-box">
            <div className="box-header">
              <div className="header-logo">
                <img src="/logo2.png" alt="" />
              </div>
              <div className="header-note">ĐẶT LỊCH HẸN</div>
            </div>
          </div>
          <select
            className="form-select form-select-lg"
            onChange={handleSelectLocation}
            size={4}
            aria-label=".form-select-lg example"
          >
            <option value="" disabled>
              Chọn chi nhánh
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name} - {location.address}
              </option>
            ))}
          </select>
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

export default LocationModal;
