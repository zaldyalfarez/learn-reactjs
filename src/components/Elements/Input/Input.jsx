import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      className="w-full p-2 border border-gray-400 rounded-md"
      name={name}
      id={name}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  ref: PropTypes.object,
};

export default Input;
