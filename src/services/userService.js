import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const getAllDentist = (name, email, phone, location) => {
  return instance.get("api/v1/user/doctors");
};

const createAppointment = (
  customer_name,
  customer_phone,
  doctor_name,
  appointment_time
) => {
  const data = {
    customer_name: customer_name,
    customer_phone: customer_phone,
    doctor_name: doctor_name,
    appointment_time: appointment_time,
  };

  return instance.post("api/v1/user/appointment", data);
};

export { getAllDentist, createAppointment };
