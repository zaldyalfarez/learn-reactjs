import Button from "./components/Elements/Button";

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
