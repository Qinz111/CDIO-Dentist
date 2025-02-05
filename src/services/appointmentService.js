// import axiosConfig from "../utils/axiosConfig";

// const appointmentService = {
//   createAppointment: async (appointmentData) => {
//     try {
//       const response = await axiosConfig.post("/appointments", appointmentData);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getAllAppointments: async () => {
//     try {
//       const response = await axiosConfig.get("/appointments");
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getAppointmentById: async (id) => {
//     try {
//       const response = await axiosConfig.get(`/appointments/${id}`);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },

//   updateAppointment: async (id, appointmentData) => {
//     try {
//       const response = await axiosConfig.put(
//         `/appointments/${id}`,
//         appointmentData
//       );
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },

//   deleteAppointment: async (id) => {
//     try {
//       const response = await axiosConfig.delete(`/appointments/${id}`);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },
// };

// export default appointmentService;
