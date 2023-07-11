import * as Yup from "yup";

import { Form, Formik } from "formik";

import FormikInput from "../../components/Formik/FormikInput.jsx";
import { HOME_PATH } from "../../routes/consts";
import { required } from "../../consts/validations";
import styled from "styled-components";
import { useCreateAppointment } from "../../hooks/appointments";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  last_name: "",
  date: new Date().toLocaleDateString("lt").toString(),
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

  const handleSubmit = (values) => {
    addNewAppointment(values)
      .then(() => {
        setTimeout(() => {
          navigate(HOME_PATH);
        }, 500);
      })
      .catch((response) => {
        console.error(response.response.data);
      });
  };

  return (
    <PageContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <h1>Register</h1>
            <RowContainer>
              <FormikInput type="text" name="name" placeholder="Name" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="text" name="last_name" placeholder="Last Name" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="date" name="date" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="time" name="time" />
            </RowContainer>
            <RowContainer>
              <button disabled={isSubmitting}>Register</button>
              <span onClick={() => navigate(HOME_PATH)}>Home</span>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Register;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow: hidden;
  h1 {
    text-align: center;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 15px;
    align-self: center;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
