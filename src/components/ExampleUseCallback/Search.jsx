import { memo } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const { onChange } = props;
  console.log("Search rendered");

  return (
    <input
      type="text"
      className="p-2 border border-gray-400 rounded-md"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
};

export default memo(Search);
