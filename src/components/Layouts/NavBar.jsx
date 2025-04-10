import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white flex justify-end gap-2.5 items-center px-5 py-1">
      {username}
      <Button classname="bg-red-600 hover:bg-red-700" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full">
        {totalCart}
      </div>
    </nav>
  );
};

export default NavBar;
