import { Box, Button, Paper } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Field, Form, Formik } from "formik";
import {
  handleDateChange,
  handleTimeChange,
  initialValues,
  isWeekend,
  validationSchema,
} from "./consts";

import { HOME_PATH } from "../../routes/consts";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { addHoursToTimeString } from "../../utils/dateAndTimeString";
import moment from "moment";
import { toast } from "react-hot-toast";
import { useCreateAppointment } from "../../hooks/appointments";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync: addNewAppointment } = useCreateAppointment();

  const handleSubmit = (values) => {
    const { time, ...rest } = values;
    const updatedValues = {
      ...rest,
      start: time,
      end: addHoursToTimeString(time, 1),
    };

    addNewAppointment(updatedValues)
      .then(() => {
        toast.success("Your Appointment Registered Successfully");
        setTimeout(() => {
          navigate(HOME_PATH);
        }, 500);
      })
      .catch((response) => {
        toast.error(response.response.data);
        console.error(response.response.data);
        setTimeout(() => {
          navigate(HOME_PATH);
        }, 2000);
      });
  };

  return (
    <Box>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 5,
          width: 700,
          m: "150px auto",
        }}
      >
        <Typography variant="h6" textAlign="center" mb={2} sx={{ fontStyle: "italic" }}>
          Register
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, errors }) => (
            <Form>
              <Field
                component={TextField}
                name="name"
                label="Name"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                inputProps={{
                  style: {
                    height: "0.8em",
                    fontSize: "0.8em",
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "0.8em", fontStyle: "italic" },
                }}
              />
              <Field
                component={TextField}
                name="last_name"
                label="Last Name"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                inputProps={{
                  style: {
                    height: "0.8em",
                    fontSize: "0.8em",
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "0.8em", fontStyle: "italic" },
                }}
              />
              <Box display={"flex"} width={"100%"} gap={3}>
                <Field
                  component={DatePicker}
                  name="date"
                  label="Date"
                  views={["month", "day"]}
                  fullWidth
                  required
                  disablePast
                  sx={{ mb: 2, flex: 1 }}
                  shouldDisableDate={isWeekend}
                  onChange={(value) => handleDateChange(new Date(value), setFieldValue)}
                  slotProps={{
                    textField: {
                      variant: "filled",
                      error: Boolean(errors.date),
                      helperText: errors.date,
                      inputProps: { style: { height: "0.8em", fontSize: "0.8em" } },
                      InputLabelProps: { style: { fontSize: "0.8em", fontStyle: "italic" } },
                      placeholder: "",
                    },
                  }}
                />
                <Field
                  component={TimePicker}
                  name="time"
                  label="Select an Appointment Time"
                  format="HH:00"
                  required
                  minutesStep={60}
                  views={["hours"]}
                  ampm={false}
                  sx={{ mb: 2, flex: 1 }}
                  minTime={moment().set({ hour: 7, minute: 0 })}
                  maxTime={moment().set({ hour: 17, minute: 0 })}
                  skipDisabled
                  onChange={(value) => handleTimeChange(new Date(value), setFieldValue)}
                  slotProps={{
                    textField: {
                      variant: "filled",
                      error: Boolean(errors.date),
                      helperText: errors.date,
                      inputProps: {
                        style: { height: "0.8em", fontSize: "0.8em" },
                        readOnly: true,
                        onFocus: (event) => event.target.blur(),
                        onKeyDown: (event) => event.preventDefault(),
                      },
                      InputLabelProps: { style: { fontSize: "0.8em", fontStyle: "italic" } },
                    },
                  }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                required
                fullWidth
              >
                Register
              </Button>
              <Button
                variant="text"
                sx={{ mb: 2 }}
                required
                fullWidth
                onClick={() => navigate(HOME_PATH)}
              >
                Home Page
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Register;
