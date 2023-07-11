import { REGISTER_PATH } from "../../routes/consts";
import styled from "styled-components";
import { useAppointments } from "../../hooks/appointments";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useAppointments();
  const appointments = data || [];
  console.log(appointments);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(REGISTER_PATH)}>Register</button>
      <Calendar>
        {appointments.map((appointment, index) => (
          <ul key={index}>
            <li>{appointment.name}</li>
            <li>{appointment.date}</li>
            <li>{appointment.time}</li>
          </ul>
        ))}
      </Calendar>
    </div>
  );
};

export default Home;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
`;
