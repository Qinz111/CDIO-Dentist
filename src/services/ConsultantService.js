import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const LoginConsultan = async (email, password, id) => {
  const data = {
    email: email,
    password: password,
    id: id,
  };

  try {
    const res = await instance.post("api/v1/consultant/login", data);

    // Kiểm tra nếu response có chứa accessToken
    if (res.data && res.data.accessToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("consultantId", id);
    }

    return res;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error;
  }
};

const getInfo = async (config) => {
  const id = localStorage.getItem("consultantId"); // Lấy id từ localStorage
  if (!id) {
    throw new Error("Không tìm thấy consultantId trong localStorage");
  }

  return instance.get(`api/v1/consultant/${id}`, config);
};

const getApoinReq = async (config) => {
  return instance.get("api/v1/consultant/appointment-requests", config);
};

const confirmReq = async (id, status, config) => {
  return instance.put(
    `/api/v1/consultant/appointment-requests/${id}/confirm`,
    status,
    config
  );
};

const getDoctorSchedule = async (id, config) => {
  return instance.get(`/api/v1/consultant/doctor-schedule/${id}`, {}, config);
};

export { LoginConsultan, getApoinReq, confirmReq, getDoctorSchedule, getInfo };
