import { addNewAppointment, fetchAppointments } from "../api/appointments";
import { useMutation, useQuery } from "@tanstack/react-query";

const APPOINTMENT = "APPOINTMENTS";

export const useAppointments = () => {
  return useQuery([APPOINTMENT], fetchAppointments);
};

export const useCreateAppointment = () => {
  return useMutation([APPOINTMENT], addNewAppointment);
};
