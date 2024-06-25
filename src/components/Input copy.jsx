import PropTypes from "prop-types";

const Input = (props) => {
  const { placeholder, value, onChange, required } = props;
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

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Input;
