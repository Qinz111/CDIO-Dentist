import React from "react";
import { Modal } from "react-bootstrap";
import "./FormRegister.scss";
import { IoMdClose } from "react-icons/io";
const FormRegister = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    handleClose();
  };
  return (
    <>
      <Modal show={show}>
        <div className="container">
          <div className="container-box">
            <div className="box-header">
              <div className="header-logo">
                <img src="/logo2.png" alt="" />
              </div>
              <div className="header-note">Gọi ngay để được tư vấn</div>
              <a href="tel:1900123456" className="header-call">
                <div className="call-icon">
                  <img src="/images/phone-icon.png" alt="" />
                </div>
                0912314189
              </a>
              <div className="box-header">
                <div className="header-note">
                  Hoặc để lại thông tin để được tư vấn
                </div>
              </div>
            </div>
            <div className="box-content">
              <div className="input-phone form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên của bạn"
                />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="btn-send" onClick={() => handleSubmit()}>
                <input type="submit" value="Xác nhận" />
              </div>
            </div>
            <div className="box-close" onClick={handleClose}>
              <div className="close-icon">
                <IoMdClose />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FormRegister;
