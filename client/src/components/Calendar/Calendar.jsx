import { Box, Paper } from "@mui/material";

import FullCalendar from "@fullcalendar/react";
import { REGISTER_PATH } from "../../routes/consts";
import { Watch } from "react-loader-spinner";
import allLocales from "@fullcalendar/core/locales/es";
import { combinedDateTime } from "../../utils/dateAndTimeString";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useAppointments } from "../../hooks/appointments";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useAppointments();
  const appointments = data || [];

  const events = appointments.map((appointment) => {
    const newObject = {
      title: appointment.person,
      start: combinedDateTime(appointment.date, appointment.start),
      end: combinedDateTime(appointment.date, appointment.end),
    };
    return newObject;
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#1976d2"
          ariaLabel="watch-loading"
          visible={true}
        />
      </Box>
    );
  } else {
    return (
      <Paper elevation={24} style={{ width: "70vw", margin: "35px auto", padding: "20px" }}>
        <FullCalendar
          locales={allLocales}
          height={612}
          handleWindowResize={true}
          allDaySlot={false}
          weekends={false}
          validRange={{ start: new Date() }}
          events={events}
          slotMinTime={"07:00:00"}
          slotMaxTime={"18:00:00"}
          locale="lt-global"
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin]}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          }}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
          }}
          customButtons={{
            myCustomButton: {
              text: "register",
              click: () => {
                navigate(REGISTER_PATH);
              },
            },
          }}
          headerToolbar={{
            start: "prev next myCustomButton",
            center: "title",
            end: "today dayGridMonth timeGridWeek",
          }}
        />
      </Paper>
    );
  }
};

export default Calendar;
