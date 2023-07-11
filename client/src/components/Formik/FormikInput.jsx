import { ErrorMessage, Field } from "formik";

import Input from "../Input/Input";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const FormikInput = ({ name, ...restProps }) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <StyledErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`;
