import { ErrorMessage, Field } from "formik";

import Input from "../Input/Input";

// eslint-disable-next-line react/prop-types
const FormikInput = ({ name, ...restProps }) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <ErrorMessage style={{ color: "red" }} name={name} component="div" />
    </div>
  );
};

export default FormikInput;
