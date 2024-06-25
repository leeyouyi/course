import PropTypes from "prop-types";

const Select = (props) => {
  const { data, value, onChange, required } = props;
  return (
    <select value={value} onChange={onChange} required={required}>
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Select;
