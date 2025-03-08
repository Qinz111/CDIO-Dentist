import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const getAllDentist = async () => {
  try {
    const res = await instance.get("api/v1/user/doctors");
    if (res.data?.doctors) {
      const updatedDoctors = res.data.doctors.map((doctor) => ({
        ...doctor,
        profile_image: doctor.profile_image?.startsWith("http")
          ? doctor.profile_image
          : `http://localhost:3001${doctor.profile_image}`,
      }));
      return { data: { doctors: updatedDoctors } };
    }
    return res;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách nha sĩ: ", error);
    throw error;
  }
};

const createAppointment = (
  customer_name,
  customer_phone,
  doctor_name,
  appointment_time
) => {
  return instance.post("api/v1/user/appointment", {
    customer_name,
    customer_phone,
    doctor_name,
    appointment_time,
  });
};

const getSchedule = (id) => {
  return instance.get(`api/v1/user/doctor/${id}`);
};

export { getAllDentist, createAppointment, getSchedule };
