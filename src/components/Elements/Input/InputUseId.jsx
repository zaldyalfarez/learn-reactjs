import { useId } from "react";
import PropTypes from "prop-types";

function InputUseId(props) {
  const inputId = useId();
  const { label, id = "input" } = props;

  return (
    <>
      <div className="className=w-xs bg-slate-200 p-2.5 rounded">
        <label htmlFor="">
          <span>{label}</span>
          <input
            className="w-full p-2 border border-gray-400 rounded-md"
            type="text"
            id={`${inputId}-${id}`}
          />
          <small aria-details={`${inputId}-${id}`}>
            Please fill the form above.
          </small>
        </label>
      </div>
    </>
  );
}

InputUseId.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default InputUseId;
