import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="font-bold text-2xl">Error occured!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
