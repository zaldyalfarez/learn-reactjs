import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-5">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

InputForm.displayName = "InputForm";

InputForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  ref: PropTypes.object,
};

export default InputForm;
