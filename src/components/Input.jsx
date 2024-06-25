import PropTypes from "prop-types";

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

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
