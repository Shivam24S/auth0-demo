import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1>hello</h1>
      <br />
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
    </>
  );
};
export default App;
