import InputUseId from "../components/Elements/Input/InputUseId";

const InputUseIdPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
        <InputUseId label="firstname" />
        <InputUseId label="lastname" />
      </div>
    </>
  );
};

export default InputUseIdPage;
