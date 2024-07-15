import styled from "@emotion/styled";

const StyledSelect = styled.select`
  min-width: 220px;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  background: rgb(255, 255, 255);
  border-color: rgb(221, 221, 221);
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.375rem 0.5rem;
  &:focus {
    color: rgb(73, 80, 87);
    background-color: rgb(255, 255, 255);
    border-color: rgb(128, 189, 255);
    border-width: 2px;
  }
`;
const Select = (props) => {
  const { style, name, value, onChange, required, data } = props;
  return (
    <StyledSelect
      style={style}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      {data.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        );
      })}
    </StyledSelect>
  );
};
export default Select;
