import { WebAuth } from "auth0-js";
import { navigate } from "@reach/router";
import jwt_decode from "jwt-decode";
import axios from "axios";

const redirectUri =
  process.env.NODE_ENV === "production"
    ? "https://yarnit.now.sh/callback"
    : "http://localhost:3000/callback";
console.log("redirect uri", redirectUri);

// Brought in from .env
const auth0 = new WebAuth({
  redirectUri,
  clientID: "ovtH4dXlZOC1bX9Ktqq3nYLGK8ZKk6Wr",
  domain: "yarn-it.auth0.com",
  audience: "https://yarn-it.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid profile"
});

export const login = () => {
  auth0.authorize();
};

const setSession = authResult => {
  // Set the time that the Access Token will expire at
  let expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  const { sub, name, picture } = jwt_decode(authResult.idToken);
  axios.post("/api/createuser", { data: { sub, picture, name } });
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);
};

export const logout = () => {
  // Clear Access Token and ID Token from local storage
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  // navigate to the home route
  navigate("/");
};

export const handleAuthentication = () => {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.idToken) {
      setSession(authResult);
    } else if (err) {
      console.error(err);
    }
    navigate("/mypatterns");
  });
};

export const isAuthenticated = () => {
  // Check whether the current time is past the
  // Access Token's expiry time
  let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  const now = new Date().getTime();
  return now < expiresAt;
};

export const getUserData = () => {
  const idToken = localStorage.getItem("id_token");
  // we only really care about given_name, family_name, nickname, name, picture, gender, sub
  // and could destructure those jwt_decode(idToken) from here.
  return idToken ? jwt_decode(idToken) : null;
};
