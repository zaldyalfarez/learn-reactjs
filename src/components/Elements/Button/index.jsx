import PropTypes from "prop-types";

const Button = (props) => {
  const { children = "null", color = "bg-black", hover } = props;
  return (
    <button
      type="submit"
      className={`rounded-md ${color} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${hover}-500 focus-visible:outline focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
};

export default Button;
