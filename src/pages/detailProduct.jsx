import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      {Object.keys(product).length > 0 && (
        <div>
          <div>Detail Id: {id}</div>
          <img className="h-64" src={product.image} alt={product.title} />
          <div>Name: {product.title}</div>
          <div>
            Price:{" "}
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProductPage;
