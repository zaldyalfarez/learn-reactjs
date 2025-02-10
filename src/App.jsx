import PropTypes from "prop-types";

const Button = (props) => {
  const { children = "null", color = "bg-black", hover } = props;
  return (
    <button
      type="submit"
      className={`rounded-md ${color} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${hover}-500 focus-visible:outline focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
};

function App() {
  return (
    <div className="flex justify-center bg-green-500 min-h-screen items-center gap-2.5">
      <Button color="bg-indigo-600" hover="indigo">
        Click here
      </Button>
      <Button color="bg-red-600" hover="red">
        Delete
      </Button>
      <Button color="bg-slate-600" hover="slate">
        Back
      </Button>
      <Button></Button>
    </div>
  );
}

export default App;
