import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./FormRegister.scss";
import { IoMdClose } from "react-icons/io";
import {
  createAppointment,
  getAllDentist,
} from "../../../../services/userService";

const FormRegister = (props) => {
  const { show, setShow } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    doctor: "",
    time: "",
    date: "",
  });

  const [validated, setValidated] = useState({ name: false, phone: false });
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const handleClose = () => setShow(false);
  const [doctor, setDoctor] = useState("");
  const [userDentist, setUserDentist] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await getAllDentist();
        if (response && response.data?.doctors) {
          setUserDentist(response.data.doctors);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bác sĩ:", error);
      }
    };

    fetchDentists();
  }, []);

  const validateDoctor = (doctor) => {
    if (!doctor.trim()) {
      setErrors((prev) => ({ ...prev, doctor: "Bạn chưa chọn bác sĩ!" }));
      setValidated((prev) => ({ ...prev, doctor: false }));
      return false;
    }
    setErrors((prev) => ({ ...prev, doctor: "" }));
    setValidated((prev) => ({ ...prev, doctor: true }));
    return true;
  };

  const validateTime = (time) => {
    if (!time.trim()) {
      setErrors((prev) => ({ ...prev, time: "Bạn chưa chọn thời gian!" }));
      setValidated((prev) => ({ ...prev, time: false }));
      return false;
    }

    // Chia thời gian thành giờ và phút
    const [hour, minute] = time.split(":").map(Number);

    // Kiểm tra giờ có nằm trong khoảng 07:00 - 17:00 không
    if (hour < 7 || hour > 17) {
      setErrors((prev) => ({
        ...prev,
        time: "Thời gian phải từ 07:00 đến 17:00!",
      }));
      setValidated((prev) => ({ ...prev, time: false }));
      return false;
    }

    // Kiểm tra phút có phải là 0, 15, 30, 45 không
    if (![0, 15, 30, 45].includes(minute)) {
      setErrors((prev) => ({
        ...prev,
        time: "Chỉ được chọn phút 00, 15, 30, 45!",
      }));
      setValidated((prev) => ({ ...prev, time: false }));
      return false;
    }

    // Nếu hợp lệ
    setErrors((prev) => ({ ...prev, time: "" }));
    setValidated((prev) => ({ ...prev, time: true }));
    return true;
  };

  const validateDate = (date) => {
    if (!date.trim()) {
      setErrors((prev) => ({ ...prev, date: "Bạn chưa chọn ngày!" }));
      setValidated((prev) => ({ ...prev, date: false }));
      return false;
    }
    setErrors((prev) => ({ ...prev, date: "" }));
    setValidated((prev) => ({ ...prev, date: true }));
    return true;
  };

  const validateName = (name) => {
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Bạn chưa điền tên!" }));
      setValidated((prev) => ({ ...prev, name: false }));
      return false;
    }
    setErrors((prev) => ({ ...prev, name: "" }));
    setValidated((prev) => ({ ...prev, name: true }));
    return true;
  };

  const validatePhoneNumber = (phone) => {
    let vnf_regex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    let mobile = phone.trim();

    if (!mobile) {
      setErrors((prev) => ({ ...prev, phone: "Bạn chưa điền số điện thoại!" }));
      setValidated((prev) => ({ ...prev, phone: false }));
      return false;
    }

    if (!vnf_regex.test(mobile)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Số điện thoại không đúng định dạng!",
      }));
      setValidated((prev) => ({ ...prev, phone: false }));
      return false;
    }

    setErrors((prev) => ({ ...prev, phone: "" }));
    setValidated((prev) => ({ ...prev, phone: true }));
    return true;
  };

  const handleSubmit = async () => {
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhoneNumber(phone);
    const isDateValid = validateDate(date);
    const isTimeValid = validateTime(time);
    const isDoctorValid = validateDoctor(doctor);

    if (
      isNameValid &&
      isPhoneValid &&
      isDateValid &&
      isTimeValid &&
      isDoctorValid
    ) {
      alert(
        "Hệ thống đã ghi nhận thông tin của bạn. CDIO Dentistn sẽ liên hệ với bạn trong thời gian sớm nhất. Cảm ơn bạn đã quan tâm tới dịch vụ ủa chúng tôi!"
      );

      let formattedDate = date.split("-").reverse().join("/");
      let resultTime = `${time}, ${formattedDate}`;
      let data = await createAppointment(name, phone, doctor, resultTime);
      // console.log(data);
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      setDoctor("");

      handleClose();
    } else {
      alert("Thông tin chưa chính xác!");
    }
  };

  return (
    <Modal show={show} className="modal-regis">
      <div className="container form-regis-container">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => validateName(e.target.value)}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}

              <input
                type="tel"
                className="form-control"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={(e) => validatePhoneNumber(e.target.value)}
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}

              <select
                className="form-control form-select"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                onBlur={(e) => validateDoctor(e.target.value)}
              >
                <option value="">Chọn bác sĩ</option>
                {userDentist.length > 0 ? (
                  userDentist.map((dentist) => (
                    <option key={dentist.id} value={dentist.name}>
                      {dentist.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Không có bác sĩ nào</option>
                )}
              </select>
              {errors.doctor && (
                <span className="error-text">{errors.doctor}</span>
              )}

              <input
                type="time"
                className="form-control"
                value={time}
                min="07:00"
                max="17:00"
                step="900"
                onChange={(e) => setTime(e.target.value)}
                onBlur={(e) => validateTime(e.target.value)}
              />

              {errors.time && <span className="error-text">{errors.time}</span>}
              <input
                type="date"
                className="form-control"
                placeholder="Chọn ngày"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onBlur={(e) => validateDate(e.target.value)}
              />
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>
            <div className="btn-send" onClick={handleSubmit}>
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
  );
};

export default FormRegister;
