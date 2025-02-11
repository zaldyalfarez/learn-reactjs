import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" name="email" placeholder="example@mail.com" type="email" />
      <InputForm label="Password" name="password" placeholder="********" type="password" />
      <Button classname="bg-blue-600 w-full" hover="blue">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
