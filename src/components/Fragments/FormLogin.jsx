import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@mail.com"
        type="email"
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />
      <Button classname="bg-blue-600 w-full" hover="blue" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
