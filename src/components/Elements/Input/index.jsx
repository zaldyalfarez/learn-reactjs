import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-5">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputForm;
