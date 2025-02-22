import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-slate-200 gap-2.5">
      <CardProduct>
        <CardProduct.Header image="/images/product-1.png" />
        <CardProduct.Body title="Chrome Hearts Jacket" price="$29.50">
          Black
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/product-2.png" />
        <CardProduct.Body title="Chrome Hearts Rings" price="$20.75">
          Silver
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
