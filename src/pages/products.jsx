import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useEffect, useState } from "react";

const product = [
  {
    id: 1,
    image: "/images/product-1.png",
    name: "Chrome Hearts Jacket",
    price: 29.5,
    color: "Black",
  },
  {
    id: 2,
    image: "/images/product-2.png",
    name: "Chrome Hearts Rings",
    price: 20.75,
    color: "Silver",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const productData = product.find((p) => p.id === item.id);
        return acc + productData.price * item.qty;
      }, 0);
      setGrandTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <nav className="bg-white flex justify-end gap-2.5 items-center px-5 py-1">
        <div>{email}</div>
        <Button classname="bg-red-600 hover:bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </nav>
      <div className="flex justify-center min-h-screen bg-slate-200 gap-2.5">
        <div className="w-4/6 flex justify-center items-center gap-2">
          {product.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body
                name={product.name}
                color={product.color}
                price={product.price}
              />
              <CardProduct.Footer
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 p-2.5">
          <div className="text-2xl font-bold">Cart</div>
          <table className="w-full text-sm text-left border border-gray-300 rounded-md mt-5">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Price</th>
                <th className="px-4 py-2 border-b">Qty</th>
                <th className="px-4 py-2 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const productData = product.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td className="px-4 py-2">{productData.name}</td>
                    <td className="px-4 py-2">
                      {(productData.price * item.qty).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-4 py-2">{item.qty}</td>
                    <td className="px-4 py-2">
                      {productData.price * item.qty}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="px-4 py-2" colSpan={3}>
                  <b>Grand Total</b>
                </td>
                <td className="px-4 py-2">
                  <b>
                    {grandTotal.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
