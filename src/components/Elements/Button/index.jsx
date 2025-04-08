import PropTypes from "prop-types";

const Button = (props) => {
  const {
    children = "null",
    classname = "bg-black",
    hover,
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      type={type}
      className={`rounded-md ${classname} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${hover}-500 focus-visible:outline focus-visible:outline-offset-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  hover: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
