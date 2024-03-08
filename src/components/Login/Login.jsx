import React from "react";
import Styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/loginAuth/authSlice";
import authSlice, {
  setLoginFailure,
  setLoginSuccess,
} from "../../features/loginAuth/authSlice";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { app, auth, provider } from "../../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const user = useSelector((state) => state.userAuth.user);
  const error = useSelector((state) => state.userAuth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert("App Login Hochuke Hai");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }));
    } else {
      dispatch(setLoginFailure("Please Fill The Email & Password"));
    }
  };
  return (
    <div>
      <div className={Styles["login-form-wrap"]}>
        <div className={Styles["login-container"]}>
          <div className={Styles["login-left"]}>
            <img src="login-image.jpg" alt="login-image" />
          </div>
          <div className={Styles["login-right"]}>
            <form className={Styles["form"]}>
              <div className={Styles["form-container"]}>
                <p className={Styles.title}>Login</p>
                <div className={Styles.form}>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={Styles.forgot}>
                      <Link rel="noopener noreferrer" to="/forgot-password">
                        Forgot Password ?
                      </Link>
                    </div>
                  </div>
                  <button className={Styles["loginBtn"]} onClick={handleLogin}>
                    Login
                  </button>
                  {isLoggedIn && <p>{isLoggedIn}</p>}
                  {error && <p>{error}</p>}
                </div>
                <div className={Styles["social-message"]}>
                  <div className={Styles.line}></div>
                  <p className={Styles.message}>Login with social accounts</p>
                  <div className={Styles.line}></div>
                </div>
                <div className={Styles["social-icons"]}>
                  <button
                    onClick={googleLogin}
                    aria-label="Log in with Google"
                    className={Styles["icon-wrap"]}
                  >
                    <FcGoogle className={Styles["icon-google"]} />
                  </button>
                </div>
                <p className={Styles.signup}>
                  Don't have an account?
                  <Link
                    rel="noopener noreferrer"
                    to="/signup"
                    className={Styles["signup-link"]}
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
