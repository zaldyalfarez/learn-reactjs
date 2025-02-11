import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Email" name="email" placeholder="example@mail.com" type="email" />
      <InputForm label="Fullname" name="fullname" placeholder="enter your full name" type="text" />
      <InputForm label="Password" name="password" placeholder="********" type="password" />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        placeholder="********"
        type="password"
      />
      <Button classname="bg-blue-600 w-full" hover="blue">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
