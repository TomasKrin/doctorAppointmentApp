import BaseCalendar from "./BaseCalendar";
import { combinedDateTime } from "../../utils/dateAndTimeString";
import { useAppointments } from "../../hooks/appointments";

const CustomizedCalendar = () => {
  const { data } = useAppointments();
  const appointments = data || [];
  console.log(appointments);

  const events = appointments.map((appointment) => {
    const newObject = {
      title: appointment.person,
      start: combinedDateTime(appointment.date, appointment.start),
      end: combinedDateTime(appointment.date, appointment.end),
    };
    return newObject;
  });

  const today = new Date();

  return (
    <BaseCalendar
      events={events}
      style={{ height: "70vh", margin: "70px" }}
      views={["month", "week"]}
      min={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7)}
      max={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18)}
    />
  );
};

export default CustomizedCalendar;
