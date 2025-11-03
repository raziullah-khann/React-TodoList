import { useRouteError } from "react-router-dom";

const Error = () =>{
 const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: "red" }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;