import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-md p-5">
      <h1 className="font-bold text-3xl text-blue-600 mb-5">{title}</h1>
      <p className="mb-5">Please fill the form below.</p>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AuthLayout;
