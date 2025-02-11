import PropTypes from "prop-types";

const Button = (props) => {
  const { children = "null", classname = "bg-black", hover } = props;
  return (
    <button
      type="submit"
      className={`rounded-md ${classname} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${hover}-500 focus-visible:outline focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  hover: PropTypes.string,
};

export default Button;
