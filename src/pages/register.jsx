import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-3">
        Already have an account?&nbsp;
        <Link className="text-blue-600" to="/login">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
