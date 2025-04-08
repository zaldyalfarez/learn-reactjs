import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const product = [
  {
    id: 1,
    image: "/images/product-1.png",
    name: "Chrome Hearts Jacket",
    price: "$29.50",
    color: "Black",
  },
  {
    id: 2,
    image: "/images/product-2.png",
    name: "Chrome Hearts Rings",
    price: "$20.75",
    color: "Silver",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="bg-white flex justify-end gap-2.5 items-center px-5 py-1">
        <div>{email}</div>
        <Button classname="bg-red-600 hover:bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </nav>
      <div className="flex justify-center items-center min-h-screen bg-slate-200 gap-2.5">
        {product.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body
              name={product.name}
              color={product.color}
              price={product.price}
            />
            <CardProduct.Footer />
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductsPage;
