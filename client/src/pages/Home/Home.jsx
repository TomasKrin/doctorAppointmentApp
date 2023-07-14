// import CustomizedCalendar from "../../components/Calendar/CustomizedCalendar";

import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales/es";
import { combinedDateTime } from "../../utils/dateAndTimeString";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useAppointments } from "../../hooks/appointments";

const Home = () => {
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

  return (
    <div>
      {/* <CustomizedCalendar /> */}
      <div style={{ width: "70vw", margin: "50px auto" }}>
        <FullCalendar
          locales={allLocales}
          height={600}
          aspectRatio={2}
          handleWindowResize={true}
          locale="lt-global"
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev next",
            center: "title",
            end: "today dayGridMonth timeGridWeek",
          }}
          validRange={{ start: new Date() }}
          events={events}
          slotMinTime={"07:00:00"}
          slotMaxTime={"18:00:00"}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
          }}
          weekends={false}
        />
      </div>
    </div>
  );
};

export default Home;
