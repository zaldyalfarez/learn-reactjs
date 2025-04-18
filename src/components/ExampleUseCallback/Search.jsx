import { memo } from "react";

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

export default memo(Search);
