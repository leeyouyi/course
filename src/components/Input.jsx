const Input = (props) => {
  const { value, onChange, required, placeholder } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
