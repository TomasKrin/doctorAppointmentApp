import * as Yup from "yup";

import { Box, Button, Paper } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Field, Form, Formik } from "formik";

import { HOME_PATH } from "../../routes/consts";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { addHoursToTimeString } from "../../utils/dateAndTimeString";
import moment from "moment";
import { required } from "../../consts/validations";
import { useCreateAppointment } from "../../hooks/appointments";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  last_name: "",
  date: "",
  time: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(required),
  last_name: Yup.string().required(required),
  date: Yup.string().required(required),
  time: Yup.string().required(required),
});

const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync: addNewAppointment } = useCreateAppointment();

  const handleDateChange = (value, setFieldValue) => {
    setFieldValue("date", value.toLocaleDateString("lt"));
  };
  const handleTimeChange = (value, setFieldValue) => {
    console.log;
    setFieldValue("time", moment(value).format("HH:mm"));
  };

  const handleSubmit = (values) => {
    console.log(values);

    const { time, ...rest } = values;
    const updatedValues = {
      ...rest,
      start: time,
      end: addHoursToTimeString(time, 1),
    };
    console.log(updatedValues);

    addNewAppointment(updatedValues)
      .then(() => {
        setTimeout(() => {
          navigate(HOME_PATH);
        }, 500);
      })
      .catch((response) => {
        console.error(response.response.data);
      });
  };

  const renderHour = (hour) => {
    const formattedHour = hour.toString().padStart(2, "0") + ":00";
    return <span>{formattedHour}</span>;
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
        <Typography variant="h6" textAlign="center" mb={2}>
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
                  renderOption={renderHour}
                  sx={{ mb: 2, flex: 1 }}
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
                  label="Time"
                  format="HH:00"
                  required
                  formatDensity="spacious"
                  minutesStep={60}
                  views={["hours"]}
                  ampm={false}
                  sx={{ mb: 2, flex: 1 }}
                  disableIgnoringDatePartForTimeValidation={true}
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
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Register;
