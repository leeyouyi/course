import styled from "@emotion/styled";

const StyleInput = styled.input`
  border-width: 1px;
  border-style: solid;
  outline: 0;
  background: rgb(255, 255, 255);
  border-color: rgb(221, 221, 221);
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  &:focus {
    color: rgb(73, 80, 87);
    background-color: rgb(255, 255, 255);
    border-color: rgb(128, 189, 255);
    border-width: 2px;
  }
`;

function Input(props) {
  const { name, value, onChange, required } = props;
  return (
    <StyleInput
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
