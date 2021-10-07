import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "182257385150-63q70mfl5epk5vpo3oj81t013c6mf0dc.apps.googleusercontent.com";

export default function Header({ setUserID }) {
  const [isLogged, setIsLogged] = useState(false);

  const logoutSuccess = (response) => {
    setIsLogged(false);
    setUserID("");
  };

  const logoutFailed = (response) => {
    console.log(response);
  };

  const loginSuccess = (response) => {
    if (response.accessToken) {
      setIsLogged(true);
      setUserID(response.profileObj.googleId);
    }
  };

  const loginFailed = (response) => {
    console.log(response);
  };

  return (
    <div>
      <p>Video Streamer Ludilo</p>
      {isLogged ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
          onFailure={logoutFailed}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          responseType="code,token"
          onSuccess={loginSuccess}
          onFailure={loginFailed}
        />
      )}
    </div>
  );
}
