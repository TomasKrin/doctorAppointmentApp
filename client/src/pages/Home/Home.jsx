import Calendar from "../../components/Calendar/Calendar";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography textAlign={"center"} mt={"20px"} fontSize={"1.5em"} sx={{ fontStyle: "italic" }}>
        Doctor Appointments Schedule
      </Typography>
      <Calendar />
    </div>
  );
};

export default Home;
