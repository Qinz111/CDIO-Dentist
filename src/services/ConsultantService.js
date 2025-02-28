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
    }

    return res;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error;
  }
};

const getApoinReq = async (config) => {
  return instance.get("api/v1/consultant/appointment-requests", config);
};

export { LoginConsultan, getApoinReq };
