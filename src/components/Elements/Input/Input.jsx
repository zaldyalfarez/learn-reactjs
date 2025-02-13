import PropTypes from "prop-types";

const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      className="w-full p-2 border border-gray-400 rounded-md"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
