import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-600">{loginFailed}</p>}
      <InputForm
        label="Username"
        name="username"
        placeholder="Zaldy Alfarez"
        type="text"
        ref={usernameRef}
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
