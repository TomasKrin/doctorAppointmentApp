import * as Yup from "yup";

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
