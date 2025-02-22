import PropTypes from "prop-types";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="group relative w-72 p-4 bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
};

CardProduct.propTypes = {
  children: PropTypes.node,
};

const Header = (props) => {
  const { image } = props;
  return (
    <img
      alt="Product 1"
      src={image}
      className="w-full h-64 rounded-md bg-gray-200 object-cover border-2 border-gray-200"
    />
  );
};

Header.propTypes = {
  image: PropTypes.string,
};

const Body = (props) => {
  const { children, title, price } = props;
  return (
    <div className="mt-4 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="/product1" className="relative z-10 hover:text-blue-600">
            {title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{children}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{price}</p>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  price: PropTypes.string,
};

const Footer = () => {
  return (
    <div>
      <button className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative z-20">
        Add to cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
