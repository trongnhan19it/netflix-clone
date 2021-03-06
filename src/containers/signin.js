import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Account } from "../components/index.js";
import * as ROUTES from "../routes/route.js";

export default function SignInContainer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    //firebase Promise
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(ROUTES.BROWSE);
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log({ errorCode, errorMessage });
      });
  };

  //check form input

  return (
    <>
      <Account>
        <Account.Title>Sign In</Account.Title>
        {error && <Account.Error>{error}</Account.Error>}
        <Account.Form onSubmit={handleSignIn} method="POST">
          <Account.Input
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Account.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Account.Submit disabled={isInvalid} type="submit">
            Sign In
          </Account.Submit>
        </Account.Form>
        <Account.Other>
          <Account.Text>
            New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now</Link>.
          </Account.Text>
          <Account.TermsOfUse>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </Account.TermsOfUse>
        </Account.Other>
      </Account>
    </>
  );
}
