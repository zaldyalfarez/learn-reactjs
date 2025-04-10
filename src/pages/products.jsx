import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import NavBar from "../components/Layouts/NavBar";
import { useLogin } from "../hooks/useLogin";

// const product = [
//   {
//     id: 1,
//     image: "/images/product-1.png",
//     name: "Chrome Hearts Jacket",
//     price: 29.5,
//     color: "Black",
//   },
//   {
//     id: 2,
//     image: "/images/product-2.png",
//     name: "Chrome Hearts Rings",
//     price: 20.75,
//     color: "Silver",
//   },
// ];

// const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-screen bg-slate-200 gap-2.5">
        <div className="w-4/6 grid grid-cols-3 gap-4 p-4">
          {products.length > 0 &&
            products.slice(0, 6).map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body
                  name={product.title}
                  price={product.price}
                  id={product.id}
                />
                <CardProduct.Footer id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 p-2.5">
          <div className="text-2xl font-bold">Cart</div>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
