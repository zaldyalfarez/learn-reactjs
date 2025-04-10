import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [grandTotal, setGrandTotal] = useState(0);
  const grandTotalRef = useRef(null);

  useEffect(() => {
    if (products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const productData = products.find((p) => p.id === item.id);
        if (!productData) return acc;
        return acc + productData.price * item.qty;
      }, 0);
      setGrandTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      grandTotalRef.current.style.display = "table-row";
    } else {
      grandTotalRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
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
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return null;
            return (
              <tr key={item.id}>
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">
                  {(product.price * item.qty).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-4 py-2">{item.qty}</td>
                <td className="px-4 py-2">{product.price * item.qty}</td>
              </tr>
            );
          })}
        <tr ref={grandTotalRef}>
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
  );
};

TableCart.propTypes = {
  products: PropTypes.array,
};

export default TableCart;
