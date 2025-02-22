import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-slate-200 gap-2.5">
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
  );
};

export default ProductsPage;
