import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-sm border border-gray-300 rounded-md p-5">
        <h1 className="font-bold text-3xl text-blue-600 mb-5">{title}</h1>
        <p className="mb-5">Please fill the form below.</p>
        {children}
        <NavLink type={type} />
      </div>
    </div>
  );
};

const NavLink = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-3">
        {type === "login" ? "Don't have an account?" : "Already have an account?"}&nbsp;
        <Link className="text-blue-600" to={type === "login" ? "/register" : "/login"}>
          {type === "login" ? "Register" : "Login"}
        </Link>
      </p>
    );
  }
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};

NavLink.propTypes = {
  type: PropTypes.string,
};

export default AuthLayout;
