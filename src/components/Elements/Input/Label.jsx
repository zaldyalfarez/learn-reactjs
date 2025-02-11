import PropTypes from "prop-types";

const Label = (props) => {
  const { children, htmlfor } = props;
  return (
    <label htmlFor={htmlfor} className="text-slate-700">
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlfor: PropTypes.string,
};

export default Label;
