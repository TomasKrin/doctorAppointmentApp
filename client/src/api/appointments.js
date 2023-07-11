import axios from "axios";

const APPOINTMENTS_URL = "http://localhost:8080/appointments";
const NEW_APPOINTMENT_URL = `${APPOINTMENTS_URL}/new`;

export const fetchAppointments = () => {
  return axios.get(APPOINTMENTS_URL).then((response) => response.data);
};

export const addNewAppointment = (appointment) => {
  return axios.post(NEW_APPOINTMENT_URL, appointment).then((response) => response.data);
};
