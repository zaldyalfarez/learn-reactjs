import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-gray-800 text-white"
      }`}
    >
      <div className="w-full max-w-sm border border-gray-300 rounded-md p-5 relative">
        <h1 className="font-bold text-3xl text-blue-600 mb-5">{title}</h1>
        <button
          className="absolute top-1.5 right-1.5 p-1.5 bg-blue-600 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
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
        {type === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
        &nbsp;
        <Link
          className="text-blue-600"
          to={type === "login" ? "/register" : "/login"}
        >
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
