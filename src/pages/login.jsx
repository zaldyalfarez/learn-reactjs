import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-3">
        Don't have an account?&nbsp;
        <Link className="text-blue-600" to="/register">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
