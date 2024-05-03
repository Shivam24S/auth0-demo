import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  return (
    <>
      {isLoading ?? <h4>Loading...</h4>}
      <h1>hello </h1> {isAuthenticated ? user.name : null}
      <br />
      {isAuthenticated ? (
        <button
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      )}
    </>
  );
};
export default App;
