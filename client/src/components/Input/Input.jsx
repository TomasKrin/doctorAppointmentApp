import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 4px;
  color: black;
  background-color: lightgray;
  border: 1px solid lightgray;
  padding: 10px 14px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 8px;
`;
