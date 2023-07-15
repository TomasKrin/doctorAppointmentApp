import * as Yup from "yup";

import moment from "moment";
import { required } from "../../consts/validations";

export const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export const initialValues = {
  name: "",
  last_name: "",
  date: "",
  time: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(required),
  last_name: Yup.string().required(required),
  date: Yup.string().required(required),
  time: Yup.string().required(required),
});

export const handleDateChange = (value, setFieldValue) => {
  setFieldValue("date", value.toLocaleDateString("lt"));
};

export const handleTimeChange = (value, setFieldValue) => {
  setFieldValue("time", moment(value).format("HH:mm"));
};
